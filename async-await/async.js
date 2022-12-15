let baseurl = "http://numbersapi.com"
let favnumber = 7;

// Part 1/3
async function getfact() {
    let res = await axios.get(`${baseurl}/${favnumber}?json`);
    return res.data.text;
    // console.log(res.data.text);
}

getfact();

// Part2/3
let nums = [5,6,7];
async function getmultifacts() {
    let res = await axios.get(`${baseurl}/${nums}?json`);
    console.log(res.data);
}
getmultifacts();

// Part 1/3
let facts = [];

async function getallfacts() {
    for (let i=0; i<4; i++) {
        let fact = await getfact();
        facts.push(fact);
    }
    console.log(facts);
}
getallfacts();

// Part 2/1
const DECK_API = "https://deckofcardsapi.com/api/deck";

async function getSingleCard() {
    card = await axios.get(`${DECK_API}/new/draw/?count=1`)
    console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
}
getSingleCard();

// Part 2/2
cards = [];
async function getTwoCards() {
    newDeck = await axios.get(`${DECK_API}/new/shuffle/`);
    id = newDeck.data.deck_id;

    for (let i=0; i<2; i++) {
        let cardobj = await axios.get(`${DECK_API}/${id}/draw/?count=1`);
        let cardinfo = `${cardobj.data.cards[0].value} of ${cardobj.data.cards[0].suit} `
        cards.push(cardinfo);
    }
    console.log(cards);
}
getTwoCards();

// Part 2/3
// ---> domcardadd.js