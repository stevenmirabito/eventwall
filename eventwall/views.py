"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template
from eventwall import app


@app.route('/')
def web_app():
    """Starts the web app"""
    return app.send_static_file('index.html')


@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template(
            'contact.html',
            title='Contact',
            year=datetime.now().year,
            message='Your contact page.'
    )


@app.route('/about')
def about():
    """Renders the about page."""
    return render_template(
            'about.html',
            title='About',
            year=datetime.now().year,
            message='Your application description page.'
    )
