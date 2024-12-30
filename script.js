// Load token data from data.json
fetch("/data.json")
    .then(response => response.json())
    .then(tokens => {
        const tokenList = document.getElementById("token-list");

        // Populate the table with token names
        tokens.forEach(token => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${token["Token Name"]}</td>`;
            tokenList.appendChild(row);
        });
    })
    .catch(error => console.error("Error loading token data:", error));

