// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(res => {
    const { articles } = res.data;
    const articleNames = Object.keys(articles);
    for(let index in articleNames){
        const article = articleNames[index];
        articles[article].forEach(item => {
            const art = newArticle(item);
            art.dataset.topic = article;
            append("cards-container", art);
        })
    }
})
.catch(err => console.error(err));

const newArticle = a => {
    const card = ele("div"),
        headline = ele("div"),
        author = ele("div"),
        imgContainer = ele("div"),
        img = ele("img"),
        name = ele("span");

    ac(card, "card");
    ac(headline, "headline");
    ac(author, "author");
    ac(imgContainer, "img-container");

    text(headline, a.headline);
    text(name, a.authorName);

    img.src = a.authorPhoto;

    append(card, headline);
    append(card, author);
    append(author, imgContainer);
    append(author, name);
    append(imgContainer, img);

    return card;
}