const cards = document.querySelectorAll(".card");
const btnNewGame = document.querySelector(".btnNewGame");
const Value = document.getElementById("value");

let moves = 0;
let pairs = 0;
let cardOne, cardTwo;
let disable = false;

shuffleStart();

function flipCard(e) {
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disable) {

        clickedCard.classList.add("flip");
        moves++;
        Value.innerHTML = moves;
        
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disable = true;
        let cardOneImg = cardOne.querySelector("img.imgBack").src,
        cardTwoImg = cardTwo.querySelector("img.imgBack").src;
        pair(cardOneImg, cardTwoImg);
    }
}

function pair(img1, img2) {
    if(img1 === img2) {
        pairs++;
        if(pairs == 6) {
            newGame();
        }
        cardOne.removeEventListener("click" ,flipCard);
        cardTwo.removeEventListener("click" ,flipCard);
        cardOne = cardTwo = "";
        return disable = false;
    }
    
    setTimeout(() => {
        cardOne.classList.remove("flip");
        cardTwo.classList.remove("flip");
        cardOne = cardTwo = "";
        disable = false;
    }, 700);
}

function newGame() {
    btnNewGame.addEventListener("click", bnewGame);
    btnNewGame.classList.add("visible");

    function bnewGame() {
        shuffleCard();
    }
}

function shuffleCard() {

    moves = 0;
    Value.innerHTML = moves;
    pairs = 0;
    cardOne = cardTwo = "";
    disable = false;
    let array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    array.sort(() => Math.random() > 0.5 ? 1 : -1);
    btnNewGame.classList.remove("visible");
    cards.forEach((card, index) => {
        card.classList.remove("flip");

        setTimeout(() => {
            let imgTag = card.querySelector("img.imgBack");
            imgTag.src = `../../img/fmgIMG/img-${array[index]}.jpg`;
            let imgTag2 = card.querySelector("img.img");
            imgTag2.src = `../../img/fmgIMG/maaLippu.jpg`;
            card.addEventListener("click", flipCard);
        }, 300);
    });
}

function shuffleStart() {
    let array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    array.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {

        let imgTag = card.querySelector("img.imgBack");
        imgTag.src = `../../img/fmgIMG/img-${array[index]}.jpg`;
        let imgTag2 = card.querySelector("img.img");
        imgTag2.src = `../../img/fmgIMG/maaLippu.jpg`;
        card.addEventListener("click", flipCard);
    });
}

cards.forEach(card => {
    card.addEventListener("click", flipCard);    
});