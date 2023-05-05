console.log("OK");

const endpoint = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=60a2fb5301a448ee88eb6be5d8219886"

async function logJSONData() {
    const response = await fetch(endpoint);
    const jsonData = await response.json();
    console.log(jsonData);
}

logJSONData();