console.log("OK");

const endpoint = "https://64550ab8a74f994b33505ccc.mockapi.io/articles"

async function logJSONData() {
    const response = await fetch(endpoint);
    const jsonData = await response.json();
    console.log(jsonData);
}

logJSONData();