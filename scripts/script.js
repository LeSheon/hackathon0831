const FACT_API_URL = "https://api.api-ninjas.com/v1/facts?";
const NEWS_API_URL = "https://mmo-games.p.rapidapi.com/latestnews";

const limit = 1;

factOptions = { 
    headers: {
        'X-Api-Key': 'xSUxVSqJIfSRWj+IY6taWg==3clVSI6MX17xoyQn'
    }
};
newsOptions = {
    headers: {
        'X-RapidAPI-Key': '2f341bdeedmsh659d794d3a283a0p19717ajsn3e389a0d0d2a',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
}

function displayNews(news) {
    const article = document.querySelector('.news');

    const title = document.createElement('h2');
    title.classList.add('news__title');
    title.innerHTML = news.title;

    console.log(news);

    const newsDiv = document.createElement('div');
    newsDiv.classList.add('news-container');
    newsDiv.innerHTML = news.article_content;

    article.appendChild(title);
    article.appendChild(newsDiv);
    
}

function displayFact(fact) {
    const factText = document.querySelector('.facts__text');
    factText.classList.add('facts__text');
    factText.innerHTML = fact.fact;
}

function randomArticle(length) {
    return Math.round(Math.random() * (length-2)+1);
}





axios.get(`${NEWS_API_URL}`, newsOptions).then(response => {
    displayNews(response.data[randomArticle(response.data.length)]);
}).catch(e => {
    console.log(e.data);
})


document.querySelector('.facts__button').addEventListener('click', evt => {
    axios.get(`${FACT_API_URL}limit=1`, factOptions).then(response => {
        displayFact(response.data[0]);
    }).catch(e => {
        console.log(e.data);
    })
})