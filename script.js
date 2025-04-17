let clickCounter = -1;
let gold = 50;

const next = document.getElementById('next');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const currentText = document.getElementById('currentText');
const container = document.getElementById('container');

const gameTexts = [
    'You stand at the threshold of Rune Hunter. The runes have chosen you. Not I. Their reasons are their own.',

    'Beyond this veil lie dungeons untouched by time, riddled with secrets… and stained with the silence of those who failed.',

    'No map shall guide you. No light shall follow. Only the runes may show you the way—if they deem you worthy.',

    'Listen well. Trust little. Step carefully. For once you enter… the hunt begins, and there is no turning back.',

    'go to rune and start exploring!',

    'You must have atleast 500 gold to reconstruct the stronghold.',

    'You have returned to the entrance.',

    'You have entered the trade market. Here you can buy weapons and armors.',
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

// NEXT FUNCTION //
const nextAction =()=> {
    clickCounter++;
    if(clickCounter <= 3 && clickCounter % 2 != 0){
        currentText.innerText = gameTexts[clickCounter];
        document.body.style.backgroundImage = backgroundImages[0];
    }
    else if(clickCounter == 4){
        currentText.innerText = gameTexts[clickCounter];
        document.body.style.backgroundImage = backgroundImages[1];
        next.style.display = 'none';
        button3.style.border = "4px solid darkgray";
        button3.style.backgroundImage = "linear-gradient(darkgray, gray)";
    }
    else{
        currentText.innerText = gameTexts[clickCounter];
        document.body.style.backgroundImage = backgroundImages[1];
    }
}

const trade =()=> {
    if(clickCounter == 4){
        document.body.style.backgroundImage = backgroundImages[2];
        update(locations[1]);
        button3.style.border = "4px solid orange";
        button3.style.backgroundImage = "linear-gradient(yellow, red)";
        currentText.innerText = gameTexts[7];
    }
}

const rune =()=> {
    if(clickCounter == 4){
        document.body.style.backgroundImage = backgroundImages[3];
    }
}

const stronghold =()=> {
    if(clickCounter == 4){
        if(gold >= 500){
            document.body.style.backgroundImage = backgroundImages[4];
            container.style.backgroundImage = 'linear-gradient(brown, red)';
        }
        else{
            currentText.innerText = gameTexts[5];
        }
    }
}

next.onclick = nextAction;
button1.onclick = trade;
button2.onclick = rune;
button3.onclick = stronghold;

const buyWeapon =()=> {
    
}

const fightMonster =()=> {

}

const exploreDungeon =()=> {
    
}

const buyHealth =()=> {
    
}

const returnToEntrance =()=> {
    document.body.style.backgroundImage = backgroundImages[1];
    currentText.innerText = gameTexts[6];
    update(locations[0]);
}

const update =(location)=>{
    button1.innerText = location.buttonText[0];
    button2.innerText = location.buttonText[1];
    button3.innerText = location.buttonText[2];
    button1.onclick = location.buttonActions[0];
    button2.onclick = location.buttonActions[1];
    button3.onclick = location.buttonActions[2];
}


const locations = [
    {
        buttonText: ["Trade", "Rune", "Stronghold"],
        buttonActions: [trade, rune, stronghold],
    },
    {
        buttonText: ["Buy Weapon", "Buy Health", "Return to Entrance"],
        buttonActions: [buyWeapon, buyHealth, returnToEntrance]
    },
    {
        buttonText: ["Fight Monster", "Explore Dungeon", "Return to Entrance"],
        buttonActions: [fightMonster, exploreDungeon, returnToEntrance]
    }
]