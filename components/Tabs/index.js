// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let show = 'reset';

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(res => {
    let { topics } = res.data;
    topics = [
        ...topics,
        "reset"
    ];
    topics.forEach(item => {
        const tabDiv =  tab(item);
        append("topics", tabDiv);
        tabDiv.addEventListener("click", (e) => {
            const { target } = event;
            const { topic } = target.dataset;
            console.log(topic);
            show = topic === "node.js" ? "node" : topic;
            filterCards();
        })
    })
})
.catch(err => console.error(err));

const tab = topic => {
    const tab = ele("div");
    ac(tab, "tab");
    text(tab, topic);
    tab.dataset.topic = topic;
    return tab;
}

const filterCards = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(item => {
        const { topic } = item.dataset;
        if(topic === show || show === "reset") item.style.display = "block";
        else item.style.display = "none";
    })
}