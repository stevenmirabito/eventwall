"""
EventWall
Flask Application Package
"""

import time
import hashlib
import json
import requests
from flask import Flask, request, redirect
from azure.storage.blob import BlobService
from config import *

app = Flask(__name__)
blob_service = BlobService(account_name=azure_account_name, account_key=azure_account_key)


@app.route('/')
def default():
    return redirect("http://eventwall.org/", code=302)


@app.route('/upload', methods=['POST'])
def upload():
    if request.method == 'POST':
        name = request.form['inputName']
        email = request.form['inputEmail']
        # wall = request.form['wallId']
        # uploaded_file = request.files['inputFile']

        # if uploaded_file and allowed_file(uploaded_file.filename):
        #    blob_service.put_block_blob_from_bytes(
        #            wall,
        #            blob_filename(email, uploaded_file.filename),
        #            uploaded_file.read(),
        #            max_connections=5
        #    )

        requests.post("https://api.sparkpost.com/api/v1/transmissions", headers={
            "Authorization: " + sparkpost_api_key,
            "Content-Type: application/json"
        }, data={
            "content": {
                "from": "sandbox@sparkpostbox.com",
                "subject": "Thanks for uploading to EventWall!",
                "text": "Hey " + name + "!\n\n We just wanted to let you know that we received your EventWall upload. If the administrator has chosen to approve photos before they appear, you'll receive an email when your submission has been approved.\n\nThank you!\n\nThe EventWall Team"
            }, "recipients": [
                {"address": email}
            ]})

    return redirect("http://eventwall.org/", code=302)

@app.route('/wall/<string:wall_id>', methods=['GET'])
def get_wall(wall_id):
    urls = []
    for blob in blob_service.list_blobs(wall_id):
        urls.append(blob_service.make_blob_url(
                container_name=wall_id,
                blob_name=blob.name
        ))

    return json.dumps(urls)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in allowed_extensions


def blob_filename(email, filename):
    return str(hashlib.sha256(email).hexdigest()) + str(time.time()) + '.' + filename.rsplit('.', 1)[1]


if __name__ == '__main__':
    app.run()
