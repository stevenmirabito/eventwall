"""
EventWall
Flask Application Package
"""

from flask import Flask
import eventwall.views

app = Flask(__name__)