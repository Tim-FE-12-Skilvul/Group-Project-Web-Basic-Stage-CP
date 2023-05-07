const endpoint = "https://64550ab8a74f994b33505ccc.mockapi.io/articles"

async function logJSONData() {
    const response = await fetch(endpoint);
    const jsonData = await response.json();
    console.log(jsonData);
    for (i = 0; i < jsonData.length; i++) {
        // console.log(jsonData[i]["title"]);
        // display data to html
        let articles =
            `
            <div class="col-md-4">
                <div class = "card" style = "width: 18rem;" >
                    <img src = "${jsonData[i]["urlToImage"]}" class = "card-img-top" alt = "" >
                    <div class = "card-body" >
                        <h5 class = "card-title">${jsonData[i]["title"]}</h5> <p class = "card-text">${jsonData[i]["description"]}</p> 
                        <a href = "detailBerita.html?id=${jsonData[i]["id"]}" class = "card-link"> Baca Selengkapnya </a> 
                    </div > 
                </div>
            </div>
            `
        document.getElementById("listArticles").innerHTML += articles;
    }
}

logJSONData();