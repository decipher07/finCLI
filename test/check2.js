var inpKeyword = 'Bitcoin';
const apiKey = 'MjqbVnKO6CbaiH5g7ys1c20XMu5-uH5XxdsG0xDlxBQJlPwp';

var url = 'https://api.currentsapi.services/v1/search?' + 'keywords=' + inpKeyword + '&language=en&apiKey=' + apiKey;

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    for (let i = 0; i < 5; i++) {
        console.log(data.news[i].title);
        console.log(data.news[i].url);
    }
}

getData();

    // .then(title => console.log(title))

