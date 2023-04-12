ChatGPT Browser Extension
A browser extension for using the ChatGPT API, built for the Brave Browser. This extension allows you to interact with the ChatGPT API by entering text in the popup and receiving generated responses.

Getting Started
These instructions will help you set up the ChatGPT browser extension and Flask server on your local machine.

Prerequisites
Brave Browser
Python 3.6 or higher (if not using Docker)
Flask and Flask-CORS libraries (if not using Docker)
OpenAI Python library (if not using Docker)
Docker (optional)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/chatgpt-extension.git
cd chatgpt-extension
Set up a virtual environment and install dependencies (non-Docker method), or use Docker:

Non-Docker method:

bash
Copy code
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
Docker method:

swift
Copy code
docker build -t chatgpt-extension .
Add your ChatGPT API key to the .env file:

makefile
Copy code
OPENAI_API_KEY=your_api_key_here
Run the Flask server:

Non-Docker method:

Copy code
python app.py
Docker method:

arduino
Copy code
docker run -p 5001:5001 --env-file .env chatgpt-extension
Load the extension in Brave Browser:

Open Brave Browser
Navigate to brave://extensions
Enable "Developer mode" in the top right corner
Click "Load unpacked" and select the chatgpt-extension directory
Now, the ChatGPT browser extension should be active and ready to use.

Usage
Click on the extension icon in the browser toolbar, enter your input text in the provided textarea, and click "Generate" to receive a response from the ChatGPT API. The generated text will be displayed in the "Output" textarea.

Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
