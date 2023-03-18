// Code your solutions in this file
const myArrCards = ["Guadalupe", "Ollie", "Aki"];

function writeCards() {
    for ( let i = 0; i < myArrCards.length; i++) {
        return [`Thank you, ${myArrCards[0]}, for the wonderful surprise gift!`,
        `Thank you, ${myArrCards[1]}, for the wonderful surprise gift!`,
        `Thank you, ${myArrCards[2]}, for the wonderful surprise gift!`];
    }

}

function countDown() {

    let countDown = 0;

    while ( countDown < 11) {
        console.log(countDown++);
    }


}