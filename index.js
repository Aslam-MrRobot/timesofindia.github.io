console.log("this is news app project");

// function getnews() {
//     url = 'https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=c4a4a970be284d4885531f94b489e19e';
//     fetch(url).then(function (response) {
//         console.log("first responce");
//         console.log(response.text()) ;
//     })
// }
// getnews();
let newsAccordion = document.getElementById("newsAccordion");

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=c4a4a970be284d4885531f94b489e19e', true);

xhr.onload = function () {
    // console.log(this.responseText);

    let json = JSON.parse(this.responseText);
    // console.log(json);

    let articles = json.articles;
    // console.log(articles);

    let newsHTML = "";
    articles.forEach(element => {
        newsHTML += `<div class="card" style="width: 18rem; margin: 5px; border-color: rgb(41 39 39 / 46%); box-shadow: rgb(191, 192, 194); display: inline-block;">
                        <img src="${element.urlToImage}" style="max-height: 350px;" class="card-img-top" alt="...">
                        <div class="card-body" style="height: auto; overflow: hidden;">
                        <b>${element.title}</b>
                        <br>
                        <div  style="justify-content: center;">
                        <a href="${element.url}" target="_blank" >Learn more</a>
                        </div>
                        </div>
                    </div>` ;
    });
    newsAccordion.innerHTML = newsHTML;
}
xhr.send();