let clickCounter = -1;
let gold = 1000;
let health = 100;
let level = 0;
let weaponInventoryIndex = 0;
let weaponInventory = [];
let armorInventoryIndex = 0;
let armorInventory = [];
let damage = 5;
let currentEnemyIndex = 0;
let enemyOriginalHealth = 0;

const next = document.getElementById('next');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const currentText = document.getElementById('currentText');
const container = document.getElementById('container');
const goldText = document.getElementById('goldText');
const healthText = document.getElementById('healthText');
const levelText = document.getElementById('levelText');
const display = document.getElementById('display');
const enemyStatDisplay = document.getElementById('enemyStatDisplay');

const gameTexts = [
    //0
    'You stand at the threshold of Rune Hunter. The runes have chosen you. Not I. Their reasons are their own.',
    //1
    'Beyond this veil lie dungeons untouched by time, riddled with secrets… and stained with the silence of those who failed.',
    //2
    'No map shall guide you. No light shall follow. Only the runes may show you the way—if they deem you worthy.',
    //3
    'Listen well. Trust little. Step carefully. For once you enter… the hunt begins, and there is no turning back.',
    //4
    'Go to the trade market to buy weapon first\!',
    //5
    'You must have atleast 500 gold and reach level 15 to reconstruct the stronghold.',
    //6
    'You have returned to the entrance.',
    //7
    'You have entered the trade market. Here you can buy weapons and armors.',
    //8
    'You have entered the rune. Here you can fight monsters and explore dungeons.',
    //9
    'You are at stage 2 rune.',
    //10
    'you are at stage 3 rune.',
    //11
    'You have returned to the rune entrance.',
    //12
    'You have returned to the stage 2 rune.',
    //13
    'You see a monster infront of you, he is charging at you.',
    //14
    'You died!',
    //15
    'You have defeated the monster!',
    //16
    'You have respawned!'
]

const backgroundImages = [
    // Gate closed
    "url('https://github.com/8ven0m8/RolePlay-Game/blob/main/images/133b7aa653f666e14342f498e6e2a334.jpg?raw=true')",
    // Gate open
    "url('https://github.com/8ven0m8/RolePlay-Game/blob/main/images/f68d273d50bf4e0838c5b09584877398.jpg?raw=true')",
    // Trade place scene
    "url('https://github.com/8ven0m8/RolePlay-Game/blob/main/images/4ac91d110dcb267a15a14be26e287b0c.jpg?raw=true')",
    // Rune scene
    "url('https://github.com/8ven0m8/RolePlay-Game/blob/main/images/6843a28538507cc2a31242cc391e8a4f.jpg?raw=true')",
    // stronghold scene
    "url('https://github.com/8ven0m8/RolePlay-Game/blob/main/images/cff76d14949b372fb9221c6001193142.jpg?raw=true')",
    // stronghold closed gate
    "url('https://github.com/8ven0m8/RolePlay-Game/blob/main/images/IMG_0772.JPG?raw=true')"
]

const weapons = [
    {
        name: 'Axe',
        price: 30,
        damage: 30
    },
    {
        name: 'Hammer',
        price: 70,
        damage: 70
    },
    {
        name: 'Sphear',
        price: 120,
        damage: 120
    },
    {
        name: 'Machete',
        price: 200,
        damage: 200
    },
    {
        name: 'Katana',
        price: 300,
        damage: 300
    },
    {
        name: 'heavenly sword',
        price: 100000,
        damage: 100000
    }
]

const armors = [
    {
        name: 'Leather Armor',
        price: 30,
        defense: 30
    },
    {
        name: 'Chainmail Armor',
        price: 70,
        defense: 70
    },
    {
        name: 'Plate Armor',
        price: 120,
        defense: 120
    },
    {
        name: 'Scale Armor',
        price: 200,
        defense: 200
    },
    {
        name: 'Dragon Armor',
        price: 300,
        defense: 300
    },
    {
        name: 'heavenly armor',
        price: 100000,
        defense: 100000
    }
]

const enemy = [
    {
        name: 'Monster',
        health: 100,
        damage: 10,
        award: 50
    },
    {
        name: 'Spirit',
        health: 500,
        damage: 50,
        award: 100
    },
    {
        name: 'Ghoul',
        health: 700,
        damage: 100,
        award: 200
    },
    {
        name: 'Yeti',
        health: 2000,
        damage: 40,
        award: 300
    },
    {
        name: 'Dragon',
        health: 5000,
        damage: 100,
        award: 1500
    }
]

// CHANGE BUTTON GRADIENT TO ORANGE OR GREY//
const changeButtonGradient = (num)=> {
    if(num == 0){
        button3.style.border = "4px solid orange";
        button3.style.backgroundImage = "linear-gradient(yellow, red)";
    }
    else{
        button3.style.border = "4px solid gray";
        button3.style.backgroundImage = "linear-gradient(darkgray, gray)";
    }
}

// NEXT FUNCTION //
const nextAction =()=> {
    clickCounter++;
    if(clickCounter <= 3){
        currentText.innerText = gameTexts[clickCounter];
        display.style.backgroundImage = backgroundImages[0];
    }
    else if(clickCounter == 4){
        currentText.innerText = gameTexts[clickCounter];
        display.style.backgroundImage = backgroundImages[1];
        next.style.display = 'none';
        changeButtonGradient(1);
    }
}

const trade =()=> {
    if(clickCounter == 4){
        display.style.backgroundImage = backgroundImages[2];
        changeButtonGradient(0);
        update(locations[1]);
        currentText.innerText = gameTexts[7];
    }
}

const rune =()=> {
    if(clickCounter == 4){
        display.style.backgroundImage = backgroundImages[3];
        changeButtonGradient(0);
        update(locations[2]);
        currentText.innerText = gameTexts[8];
    }
}

const stronghold =()=> {
    if(clickCounter == 4){
        if(gold >= 500 && level >= 15){
            changeButtonGradient(0)
            display.style.backgroundImage = backgroundImages[4];
            container.style.backgroundImage = 'linear-gradient(brown, red)';
        }
        else{
            currentText.innerText = gameTexts[5];
            display.style.backgroundImage = backgroundImages[5];
        }
    }
}

next.onclick = nextAction;
button1.onclick = trade;
button2.onclick = rune;
button3.onclick = stronghold;

const sellWeapon =()=> {
    if(weaponInventory.length > 0 && weaponInventory[0].name != "Katana"){
        gold += weaponInventory[0].price - 10;
        currentText.innerText = `You have sold ${weaponInventory.shift().name}.`;
        goldText.innerText = `${gold}`;
    }
    else{
        currentText.innerText = `You cannot sell your only weapon.`;
    }
}

const buyWeapon =()=> {
    if(weapons[weaponInventoryIndex].name == "heavenly sword"){
        currentText.innerText = `You have bought all the weapons. You can sell them to get gold. Note: Katana is the last weapon so you cannot sell it.`;
        button1.innerText = "Sell Weapon";
        button1.onclick = sellWeapon;
    }
    else if(gold >= weapons[weaponInventoryIndex].price && weaponInventoryIndex < weapons.length - 1){
        gold -= weapons[weaponInventoryIndex].price;
        damage = weapons[weaponInventoryIndex].damage;
        goldText.innerText = `${gold}`;
        weaponInventory.push(weapons[weaponInventoryIndex]);
        currentText.innerText = `You have bought ${weapons[weaponInventoryIndex].name} and your damage is now ${damage}.`;
        weaponInventoryIndex++;
    }
    else if(gold < weapons[weaponInventoryIndex].price && weaponInventoryIndex < weapons.length - 1){
        currentText.innerText = `You don't have enough gold to buy ${weapons[weaponInventoryIndex].name}.`;
    }
    else if(weaponInventoryIndex == weapons.length - 1 && weaponInventory[0].name != "heavenly sword"){
        gold -= weapons[weaponInventoryIndex].price;
        damage = weapons[weaponInventoryIndex].damage;
        goldText.innerText = `${gold}`;
        weaponInventory.push(weapons[weaponInventoryIndex]);
        currentText.innerText = `You have bought ${weapons[weaponInventoryIndex].name} and your damage is now ${damage}. You have bought all the weapons. You can sell them to get gold. Note: Katana is the last weapon so you cannot sell it.`;
    }
}

const sellHealth =()=> {
    if(armorInventory.length > 0 && armorInventory[0].name != "Dragon Armor"){
        gold += armorInventory[0].price - 10;
        currentText.innerText = `You have sold ${armorInventory.shift().name}.`;
        goldText.innerText = `${gold}`;
    }
    else{
        currentText.innerText = `You cannot sell your only Armor Set.`;
    }
}

const buyHealth =()=> {
    if(armors[armorInventoryIndex].name == "heavenly armor"){
        currentText.innerText = `You have bought all the armors. You can sell them to get gold. Note: Dragon Armor is the last armor set so you cannot sell it.`;
        button2.innerText = "Sell Armor";
        button2.onclick = sellHealth;
    }
    else if(gold >= armors[armorInventoryIndex].price && armorInventoryIndex < armors.length - 1){
        gold -= armors[armorInventoryIndex].price;
        health = armors[armorInventoryIndex].defense + 100;
        healthText.innerText = `${health}`;
        goldText.innerText = `${gold}`;
        armorInventory.push(armors[armorInventoryIndex]);
        currentText.innerText = `You have bought ${armors[armorInventoryIndex].name}.`;
        armorInventoryIndex++;
    }
    else if(gold < armors[armorInventoryIndex].price && armorInventoryIndex < armors.length - 1){
        currentText.innerText = `You don't have enough gold to buy ${armors[armorInventoryIndex].name}.`;
    }
    else if(armorInventoryIndex == armors.length - 1 && armorInventory[0].name != "heavenly armor"){
        gold -= armors[armorInventoryIndex].price;
        health = armors[armorInventoryIndex].defense + 100;
        healthText.innerText = `${health}`;
        goldText.innerText = `${gold}`;
        armorInventory.push(armors[armorInventoryIndex]);
        currentText.innerText = `You have bought ${armors[armorInventoryIndex].name}. You have bought all the armor sets. You can sell them to get gold. Note: dragon armor is the last weapon so you cannot sell it.`;
    }
}

const fightMonster =()=> {
    update(locations[5]);
    currentEnemyIndex = 0;
    currentText.innerText = gameTexts[13];
    displayEnemyStatBar(enemy[0]);
    enemyOriginalHealth = enemy[0].health;
}

const hit =()=> {
    if(health > 0 && enemy[currentEnemyIndex].health > 0){
      enemy[currentEnemyIndex].health -= damage;
      health -= enemy[currentEnemyIndex].damage;
      healthText.innerText = `${health}`;
      displayEnemyStatBar(enemy[currentEnemyIndex]);
    }
    else if(health <= 1){
        currentText.innerText = gameTexts[14];
        enemyStatDisplay.style.display = 'none';
        update(locations[6]);
    }
    else if(enemy[currentEnemyIndex].health <= 1){
        currentText.innerText = gameTexts[15];
        enemyStatDisplay.style.display = 'none';
        level++;
        levelText.innerText = `${level}`;
        gold += enemy[currentEnemyIndex].award;
        goldText.innerText = `${gold}`;
        update(locations[7]);
        armorInventory.length > 0? health = 100 + armorInventory[armorInventory.length - 1].defense: health = 100;
        healthText.innerText = `${health}`;
        enemy[currentEnemyIndex].health = enemyOriginalHealth;
    }
}

const block =()=> {

}

const run =()=> {

}

const exploreR2 =()=> {
    if(level >= 3){
        currentText.innerText = gameTexts[9];
        update(locations[3]);
    }
    else{
        currentText.innerText = `You need to be at least level 3 to explore this stage.`;
    }
}

const fightSpirit =()=> {

}

const exploreR3 =()=> {
    if(level >= 10){
        currentText.innerText = gameTexts[10];
        update(locations[4]);
    }
    else{
        currentText.innerText = `You need to be at least level 10 to explore this stage.`;
    }
}

const returnToRuneEntrance =()=> {
    currentText.innerText = gameTexts[11];
    update(locations[2]);
}

const fightGhoul =()=> {

}

const fightYeti =()=> {

}

const returnToStage2 =()=> {
    currentText.innerText = gameTexts[12];
    update(locations[3]);
}


const returnToEntrance =()=> {
    display.style.backgroundImage = backgroundImages[1];
    changeButtonGradient(1);
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

const reload =()=>{
    update(locations[0]);
    gold = 50;
    health = 100;
    level = 0;
    weaponInventoryIndex = 0;
    weaponInventory = [];
    armorInventoryIndex = 0;
    armorInventory = [];
    damage = 5;
    currentEnemyIndex = 0;
    goldText.innerText = `${gold}`;
    healthText.innerText = `${health}`;
    levelText.innerText = `${level}`;
    display.style.backgroundImage = backgroundImages[1];
    currentText.innerText = gameTexts[16];
    enemy[currentEnemyIndex].health = enemyOriginalHealth;
}

const displayEnemyStatBar = (enemies)=> {
    enemyStatDisplay.style.display = 'block';
    let enemyHealth = Math.max(0, enemies.health);
    enemyStatDisplay.innerHTML = `
        <div id="enemyStatBar">
            <span class="enemyStat"><b>Name: </b>${enemies.name}</span>
            <span class="enemyStat"><b>Health: </b>${enemyHealth}</span>
            <span class="enemyStat"><b>Damage: </b>${enemies.damage}</span>
        </div>
    `;
}

const locations = [
    // 0
    {
        buttonText: ["Trade Market", "Rune", "Stronghold"],
        buttonActions: [trade, rune, stronghold],
    },
    // 1
    {
        buttonText: ["Buy Weapon", "Buy Armor", "Return to Entrance"],
        buttonActions: [buyWeapon, buyHealth, returnToEntrance]
    },
    // 2
    {
        buttonText: ["Fight Monster", "Explore Stage 2 rune", "Return to Entrance"],
        buttonActions: [fightMonster, exploreR2, returnToEntrance]
    },
    // 3
    {
        buttonText: ["Fight Spirit", "Explore Stage 3 rune", "Return to rune entrance"],
        buttonActions: [fightSpirit, exploreR3, returnToRuneEntrance]
    },
    // 4
    {
        buttonText: ["Fight Ghoul", "fight Yeti", "Return to Stage 2 Dungeon"],
        buttonActions: [fightGhoul, fightYeti, returnToStage2]
    },
    // 5
    {
        buttonText: ["Hit", "Block", "Run"],
        buttonActions: [hit, block, run]
    },
    // 6
    {
        buttonText: ["Restart", "Restart", "Restart"],
        buttonActions: [reload, reload, reload]
    },
    // 7
    {
        buttonText: ["Return", "Return", "Return"],
        buttonActions: [returnToRuneEntrance, returnToRuneEntrance, returnToRuneEntrance]
    }
]

// THESE FUNCTIONS ARE FOR PRELOADING IMAGES //
// Extract direct URLs
const cacheImageList = backgroundImages.map(bg =>
    bg.replace(/^url\(['"]?/, "").replace(/['"]?\)$/, "")
);

// Preload images
const cache = [];
cacheImageList.forEach(url => {
    const img = new Image();
    img.src = url;
    cache.push(img);
});


// COMMIT UPDATES
//V 1.1- Currently working on hit, block, run, fightMonster and checkHealthLevels functions and made a enemy array.