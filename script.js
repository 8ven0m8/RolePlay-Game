let clickCounter = -1;
let gold = 50;

const next = document.getElementById('next');
const goTrade = document.getElementById('button1');
const goRune = document.getElementById('button2');
const goStronghold = document.getElementById('button3');
const currentText = document.getElementById('currentText');
const container = document.getElementById('container');

const gameTexts = [
    'You stand at the threshold of Rune Hunter. The runes have chosen you. Not I. Their reasons are their own.',
    'Beyond this veil lie dungeons untouched by time, riddled with secrets… and stained with the silence of those who failed.',
    'No map shall guide you. No light shall follow. Only the runes may show you the way—if they deem you worthy.',
    'Listen well. Trust little. Step carefully. For once you enter… the hunt begins, and there is no turning back.',
    'go to rune and start exploring!',
    'You must have atleast 500 gold to reconstruct the stronghold.'
]

const backgroundImages = [
    // Yaksha 1st scene
    "url('')",
    // Yaksha 2nd scene
    "url('')",
    // Trade place scene
    "url('')",
    // Rune scene
    "url('')",
    // stronghold scene
    "url('')"
]

next.addEventListener('click', ()=> {
    clickCounter++;
    if(clickCounter <= 3 && clickCounter % 2 != 0){
        currentText.innerText = gameTexts[clickCounter];
        document.body.style.backgroundImage = backgroundImages[0];
    }
    else if(clickCounter == 4){
        currentText.innerText = gameTexts[clickCounter];
        document.body.style.backgroundImage = backgroundImages[1];
        next.style.display = 'none';
    }
    else{
        currentText.innerText = gameTexts[clickCounter];
        document.body.style.backgroundImage = backgroundImages[1];
    }
});

goTrade.addEventListener('click', ()=> {
    document.body.style.backgroundImage = backgroundImages[2];
});

goRune.addEventListener('click', ()=> {
    document.body.style.backgroundImage = backgroundImages[3];
});

goStronghold.addEventListener('click', ()=> {
    if(gold >= 500){
        document.body.style.backgroundImage = backgroundImages[4];
        container.style.backgroundImage = 'linear-gradient(brown, red)';
    }
    else{
        currentText.innerText = gameTexts[5];
    }
});
