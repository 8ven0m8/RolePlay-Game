let clickCounter = -1;
let gold = 1000;

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
    "url('https://sdmntprwestus2.oaiusercontent.com/files/00000000-ae1c-61f8-8e41-2987c9fe2deb/raw?se=2025-04-17T12%3A49%3A22Z&sp=r&sv=2024-08-04&sr=b&scid=a0965ba7-1f14-5441-a44f-18ff99e2266c&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T21%3A25%3A13Z&ske=2025-04-17T21%3A25%3A13Z&sks=b&skv=2024-08-04&sig=OzdUpqB17m48pr82fnSEMwGhdLQjJDQuZP6ORFz2f28%3D')",
    // Yaksha 2nd scene
    "url('https://sdmntprwestus2.oaiusercontent.com/files/00000000-7a64-61f8-9087-4322de2d40da/raw?se=2025-04-17T13%3A03%3A01Z&sp=r&sv=2024-08-04&sr=b&scid=faae721c-3a8a-5031-a73c-d5bb0efe3019&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T21%3A25%3A33Z&ske=2025-04-17T21%3A25%3A33Z&sks=b&skv=2024-08-04&sig=mHWP%2B94RGsDlPVJ8nU4BJmuPolggf8mB/otLColHn9k%3D')",
    // Trade place scene
    "url('https://sdmntprwestus.oaiusercontent.com/files/00000000-2fe8-6230-bde8-87735036e89b/raw?se=2025-04-17T12%3A30%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=1bcfb8b6-ee9b-599e-8602-c4d59e40a830&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T21%3A26%3A29Z&ske=2025-04-17T21%3A26%3A29Z&sks=b&skv=2024-08-04&sig=wdmy/rMmjIN8XteNgA4e5geYOpU3K4oyxY4QRCNFupA%3D')",
    // Rune scene
    "url('https://sdmntprwestus2.oaiusercontent.com/files/00000000-6f8c-61f8-b482-ea54e9dddcf0/raw?se=2025-04-17T12%3A37%3A37Z&sp=r&sv=2024-08-04&sr=b&scid=bea4bd9c-a506-53f4-ae36-c7a03a71edc1&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T21%3A28%3A53Z&ske=2025-04-17T21%3A28%3A53Z&sks=b&skv=2024-08-04&sig=ZujUMQPbbBH9Gp21Prdm1W6aB13mRbJ4OC5ZiZ%2Bw0/s%3D')",
    // stronghold scene
    "url('https://sdmntprwestus2.oaiusercontent.com/files/00000000-3fc8-61f8-92cd-69368efb9e51/raw?se=2025-04-17T12%3A41%3A06Z&sp=r&sv=2024-08-04&sr=b&scid=d65ab4ca-c16f-5e19-bba4-f20640fe9fab&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T21%3A25%3A29Z&ske=2025-04-17T21%3A25%3A29Z&sks=b&skv=2024-08-04&sig=hX1vl4zwK09GHu2URJvF7TjkdciiduQ5ukgXyl0ZJKc%3D')"
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
