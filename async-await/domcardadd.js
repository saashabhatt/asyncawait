
const DECK_API = "https://deckofcardsapi.com/api/deck";
let drawcardsurl;
let imglink;
let deckid;

// Get deck id and draw card
async function getid() {
    let deckobj = await axios.get(`${DECK_API}/new/shuffle/?deck_count=1`)
    deckid = deckobj.data.deck_id;

    let cardobj = await axios.get(`${DECK_API}/${deckid}/draw/?count=1`);
    return imglink = cardobj.data.cards[0].image;
}

// Append to dom
$("button").on("click", function() {
    getid();
    
    let $newimg = $("<img>");
    $newimg.attr("src", imglink);
    $("body").append($newimg);
})
