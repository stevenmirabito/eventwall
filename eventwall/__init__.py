"""
EventWall
Flask Application Package
"""

import time
import hashlib
from flask import Flask, request, redirect
from azure.storage.blob import BlobService
from config import *

app = Flask(__name__)


@app.route('/')
def default():
    return redirect("http://api.eventwall.org/", code=302)


@app.route('/upload', methods=['POST'])
def upload():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        wall = request.form['wallId']
        uploaded_file = request.files['inputFile']

        if uploaded_file and allowed_file(uploaded_file.filename):
            blob_service = BlobService(account_name=azure_account_name, account_key=azure_account_key)
            blob_service.put_block_blob_from_bytes(
                    wall,
                    blob_filename(email, uploaded_file.filename),
                    uploaded_file.read(),
                    max_connections=5
            )


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in allowed_extensions


def blob_filename(email, filename):
    return str(hashlib.sha256(email).hexdigest()) + str(time.time()) + '.' + filename.rsplit('.', 1)[1]


if __name__ == '__main__':
    app.run()
