const FACT_API_URL = "https://api.api-ninjas.com/v1/facts?";
const NEWS_API_URL = "https://mmo-games.p.rapidapi.com/latestnews";

const limit = 1;

factOptions = { 
    headers: {
        'X-Api-Key': '[API-KEY]'
    }
};
newsOptions = {
    headers: {
        'X-RapidAPI-Key': '[API-KEY]',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
}

// Display News
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

// Display Fact
function displayFact(fact) {
    const factText = document.querySelector('.facts__text');
    factText.classList.add('facts__text');
    factText.innerHTML = fact.fact;
}

// Helper function to pick 1 random article
function randomArticle(length) {
    return Math.round(Math.random() * (length-2)+1);
}




// Display 1 random news from article array when page is loded.
axios.get(`${NEWS_API_URL}`, newsOptions).then(response => {
    displayNews(response.data[randomArticle(response.data.length)]);
}).catch(e => {
    console.log(e.data);
})


// When Fact Button is pressed display random fact.
document.querySelector('.facts__button').addEventListener('click', () => {
    axios.get(`${FACT_API_URL}limit=1`, factOptions).then(response => {
        displayFact(response.data[0]);
    }).catch(e => {
        console.log(e.data);
    })
})
