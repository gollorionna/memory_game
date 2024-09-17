


const wrapper = document.querySelector('.wrapper');
const gameBlock = document.querySelector('.game');



const cardsNumberArray = [];
let firstCard = null;
let secondCard = null;
let counter = 0;

// Добавление чисел в cardsNumberArray
for(let i = 1; i<=16; i++){
    cardsNumberArray.push(i, i)
}


// перемешивание карточек
for(let i = 0; i < cardsNumberArray.length; i++){
    let randomIndex = Math.floor(Math.random() * cardsNumberArray.length);
    let temp = cardsNumberArray[i];
    cardsNumberArray[i] = cardsNumberArray[randomIndex];
    cardsNumberArray[randomIndex] = temp;
}

for (const cardNumber of cardsNumberArray) {
    const card = document.createElement('div');
    card.classList.add('cover');
    const frontFace = document.createElement('img');
    card.textContent = cardNumber;
    card.classList.add('card');

    card.addEventListener('click', () => {
        if(card.classList.contains('open') || card.classList.contains('success')){
            return
        }
        if(firstCard !== null && secondCard !== null){
            firstCard.classList.remove('open');
            secondCard.classList.remove('open');
            firstCard = null;
            secondCard = null;
        }
        card.classList.add('open');
        if(firstCard === null){
            firstCard = card;
        } else {
            secondCard = card;
        }

        if(firstCard !== null && secondCard !== null){
            let firstCardNumber = firstCard.textContent
            let secondCardNumber = secondCard.textContent

            if(firstCardNumber === secondCardNumber) {
                firstCard.classList.add('success');
                secondCard.classList.add('success');
            }
            
        }
        if(cardsNumberArray.length === document.querySelectorAll('.success').length){
            setTimeout(() => {
                alert(`Победа! Вы выиграли сделав ${counter/2} ходов`)      
            },400);
        }
        let hasOpenClass = card.classList.contains('open');
        if (hasOpenClass){
            counter++
        }
    })
    gameBlock.append(card)
}


