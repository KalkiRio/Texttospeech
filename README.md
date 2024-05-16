# Texttospeech

Overview

This project is a simple Text-to-Speech (TTS) web application that converts user input text into speech using the Web Speech API. The app consists of an input text area where users can type their text, and two buttons: one to start speaking and another to stop the speech.

Files

index.html

Contains the basic structure of the web page including a text area for input and buttons for controlling the speech.
styles.css

Provides the styling for the web page, making it visually appealing and responsive.
script.js

Implements the functionality of the application using JavaScript and the Web Speech API.
HTML Structure

Container: The main wrapper for the app elements.
Text Area: An input area where users type the text to be converted to speech.
Buttons:
Speak Button: Starts the speech synthesis.
Stop Button: Stops the speech synthesis if it is currently speaking.
CSS Styling

Styles are applied to ensure the application is centered on the screen, with a modern, clean look.
Buttons have hover effects for better user interaction feedback.
JavaScript Functionality

DOMContentLoaded Event: Ensures the script runs after the DOM has fully loaded.
SpeechSynthesis API:
SpeechSynthesisUtterance: Creates an utterance object for the text input.
synth.speak(): Speaks the provided text.
synth.cancel(): Stops any ongoing speech.
Event Listeners:
For the Speak button to start the speech.
For the Stop button to stop the speech.
Usage

Open the index.html file in a web browser.
Type the text you want to be spoken into the text area.
Click the "Speak" button to hear the text.
Click the "Stop" button to stop the speech at any time.
This project demonstrates how to use the Web Speech API to create interactive web applications with JavaScript. It can be extended with additional features such as voice selection, pitch, and rate adjustments for more customized experiences.
