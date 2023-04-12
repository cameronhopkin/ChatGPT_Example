# ChatGPT_Example
Brave Browser Extension using ChatGPT and Flask

1. Create a new directory for the extension and navigate to it.

2. Inside the extension directory, create a manifest.json file and define the necessary metadata.

3. Create a popup.html file for the extension's popup UI.

4. Add a popup.js file to handle the logic and API calls.

5. Create a Flask server that acts as a proxy for the ChatGPT API.
 Using docker and the ports listed in the app.py file run
 docker build -t my-server-image .
 docker run -p 5001:5000 --env-file ../.env my-server-image
6. Configure the Flask server to handle CORS.
   
7. Use environment variables to store API keys securely.

8. Test the extension locally in Brave Browser using the "Load unpacked" option.

9. Set up a GitHub repository to store the extension code.

10. Create a .gitignore file to exclude sensitive files from the repository.
     The .env file should be in it.
11. Push the code to the GitHub repository.

