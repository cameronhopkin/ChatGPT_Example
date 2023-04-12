document.getElementById("generate").addEventListener("click", async () => {
    const prompt = document.getElementById("prompt").value;
    const response = await fetch("http://localhost:5001/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
    });

    if (response.ok) {
        const generatedText = await response.text();
        document.getElementById("response").value = generatedText;
    } else {
        alert("Error: " + response.statusText);
    }
});

