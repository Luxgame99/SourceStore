
const gamelist = document.getElementById("gamelist");

const games = [
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1063730/header.jpg",
        "New World: Aternum",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1228610/header.jpg",
        "Karlson",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/524220/header.jpg?t=1727790045",
        "NiER: Automata",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg",
        "Subnautica",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg",
        "ARK: Survival Evolved",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1128920/header.jpg",
        "EVERSPACE 2",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/950050/header.jpg",
        "Starlink: Battle for Atlas",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1262350/header.jpg",
        "SIGNALIS",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1456940/header.jpg",
        "Level Zero: Extraction",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2124490/header.jpg",
        "SILENT HILL 2",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
        "Baldur's Gate 3",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1790600/header.jpg",
        "DRAGON BALL: Sparking! ZERO"
]

function update(){
    console.log("Found " + games.length / 2 + " Game Entries.");
    for(let i = 0; i < games.length; i+=2){
        let img = games[i];
        let name = games[i+1];
        gamelist.innerHTML += `
        <div>
            <div style="background-image: url(${img});"></div> 
            <p>${name}</p>
        </div>
        `;
    }
    
}

update();