const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
const endpoint = "https://64550ab8a74f994b33505ccc.mockapi.io/articles/" + id;
fetch(endpoint)
    .then((response) => response.json())
    .then((data)  =>  {
        let articles =
            `
            <div>
                <img src="${data["urlToImage"]}" alt="" style="width: 100%; height: 400px;">
                <h1>${data["title"]}</h1>
                <p>${data["content"]}</p>
            </div>
            `
        document.getElementById("articlesDetail").innerHTML = articles;
    })