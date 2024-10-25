
const gamelist = document.getElementById("gamelist");

const urlParams = new URLSearchParams(window.location.search);
const gameid = urlParams.get('gameid');

const games = [
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1063730/header.jpg",
        "6445",
        "New World: Aternum",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1228610/header.jpg",
        "6293",
        "Karlson",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/524220/header.jpg?t=1727790045",
        "9573",
        "NiER: Automata",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg",
        "4033",
        "Subnautica",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg",
        "8466",
        "ARK: Survival Evolved",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1128920/header.jpg",
        "4439",
        "EVERSPACE 2",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/950050/header.jpg",
        "9327",
        "Starlink: Battle for Atlas",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1262350/header.jpg",
        "9275",
        "SIGNALIS",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1456940/header.jpg",
        "3720",
        "Level Zero: Extraction",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2124490/header.jpg",
        "0252",
        "SILENT HILL 2",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
        "9235",
        "Baldur's Gate 3",
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1790600/header.jpg",
        "5523",
        "DRAGON BALL: Sparking! ZERO"
];

const list = [
    // name, vidURL, imgURL, desc, price
    {
        name: "New World: Aternum",
        vid: "https://www.youtube.com/embed/fHJAiKc3ZjI?si=Y3jQ8E_JDRirGOJM",
        img: "https://images.ctfassets.net/j95d1p8hsuun/1YpzULMYGPlezffjfRBj6b/8f326efa4d8192a35c6bb63dbc2290c3/NWA_Announce_3v3Arenas_MapA_01_1920x1080.jpg",
        desc: "Experience a thrilling action RPG set on the supernatural island of Aeternum. Forge your destiny on an adventure filled with danger and opportunity.",
        price: 60
    },
    {
        name: "Karlson",
        vid: "https://www.youtube.com/embed/_npGfPDfByw?si=TAN4lpRcBNi39ex2",
        img: "https://img.itch.zone/aW1nLzI4NzY0NzUucG5n/original/th7PnP.png",
        desc: "What do you get if you combine an FPS, Parkour, Slowmo & ... Milk? KARLSON. The milk-infused man will stop at nothing to locate and drink his favorite beverage.",
        price: 0
    },
    {
        name: "NiER: Automata",
        vid: "https://www.youtube.com/embed/wJxNhJ8fjFk?si=7pzSmXQJ2kTiyuIE",
        img: "https://fyre.cdn.sewest.net/neir-automata-nsw/62a1efcf97579600197a5263/package_us-2x-VNEEmHgmC.png?quality=85&width=1024",
        desc: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
        price: 40
    },
    {
        name: "Subnautica",
        vid: "https://www.youtube.com/embed/Rz2SNm8VguE?si=sd1j6NzMO5fuwhXZ",
        img: "https://store-images.s-microsoft.com/image/apps.23135.63409341877910445.4fd452e1-c3ee-4448-a0f8-ac6eb6bdaabf.5a02df2f-4cea-4002-856b-2f4f478da7e9?q=90&w=480&h=270",
        desc: "",
        price: 60
    },
    {
        name: "ARK: Survival Evolved",
        vid: "https://www.youtube.com/embed/FW9vsrPWujI?si=I6KZWS8CR7m2PMBV",
        img: "https://image.api.playstation.com/vulcan/img/rnd/202105/3018/iGDKLFRCAfyT0XMMSbu9CUJH.jpg",
        desc: "Stranded on the shores of a mysterious island, you must learn to survive. Use your cunning to kill or tame the primeval creatures roaming the land, and encounter other players to survive, dominate... and escape!",
        price: 15
    },
    {
        name: "EVERSPACE 2",
        vid: "https://www.youtube.com/embed/XIAIXXJYmV8?si=W96jjcyJk63zYnEd",
        img: "https://www.gamersglobal.de/sites/gamersglobal.de/files/news/teaser/1183/teaser-everspace-2_01.jpg",
        desc: "EVERSPACE 2 is a fast-paced single-player spaceship shooter with exploration in space and on planets, tons of loot, RPG elements, mining, and crafting. Experience an exciting sci-fi story set in a vivid, handcrafted open world full of secrets, puzzles, and perils.",
        price: 50
    },
    {
        name: "Starlink: Battle for Atlas",
        vid: "https://www.youtube.com/embed/RCza4n4h4yU?si=13uHEE89y3bOOYks",
        img: "https://store-images.s-microsoft.com/image/apps.36695.70669386936987918.cc1eac8f-dd1c-4f9f-99a3-197d14f2c168.c2bc5e64-57e9-48d3-ac45-bd35814222fd?q=90&w=480&h=270",
        desc: "Lead a group of interstellar pilots dedicated to free the Atlas Star System from Grax and the Forgotten Legion. Start your adventure with the full original Starlink: Battle for Atlas™ Initiative team.",
        price: 8
    },
    {
        name: "SIGNALIS",
        vid: "https://www.youtube.com/embed/Na4KadSK770?si=LvBnIVhjwEwSFS0x",
        img: "https://image.api.playstation.com/vulcan/ap/rnd/202209/1922/F2NLbMp1w1z1btcObWEyihPS.png",
        desc: "A classic survival horror experience set in a dystopian future where humanity has uncovered a dark secret. Unravel a cosmic mystery, escape terrifying creatures, and scavenge an off-world government facility as Elster, a technician Replika searching for her lost dreams.",
        price: 20
    },
    {
        name: "Level Zero: Extraction",
        vid: "https://www.youtube.com/embed/KXSZ-ehn-WM?si=uHVzzQWVw5CVEdNv",
        img: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1456940/ss_be2fa4e25df4b396467c4f26444a8b466107af16.1920x1080.jpg?t=1729087020",
        desc: "Tactical extraction shooter meets immersive survival horror. Play as rival mercenaries fighting for loot, or as alien monsters hunting humans from the shadows. Solo or with friends, experience this unique dark take on asymmetrical PvPvE multiplayer.",
        price: 20
    },
    {
        name: "SILENT HILL 2",
        vid: "https://www.youtube.com/embed/7f5qac5f3mE?si=P0M5yc4muqggZh11",
        img: "https://www.nme.com/wp-content/uploads/2022/10/silent-hill-2-remake-header-696x392.jpeg",
        desc: "Investigating a letter from his late wife, James returns to where they made so many memories - Silent Hill. What he finds is a ghost town, prowled by disturbing monsters and cloaked in deep fog. Confront the monsters, solve puzzles, and search for traces of your wife in this remake of SILENT HILL 2.",
        price: 70
    },
    {
        name: "Baldur's Gate 3",
        vid: "https://www.youtube.com/embed/XuCfkgaaa08?si=dudIKyvUIyeGWzKT",
        img: "https://www.theaureview.com/wp-content/uploads/2023/10/Baldurs-gate-3-chatacter-creation-guide.jpeg",
        desc: "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
        price: 60
    },
    {
        name: "DRAGON BALL: Sparking! ZERO",
        vid: "https://www.youtube.com/embed/XTvBSY0YMyg?si=kfbFxn7RGdXRlRHr",
        img: "https://static.bandainamcoent.eu/high/dragon-ball/dragon-ball-sparking-zero/00-page-setup/Page-Setup-Revamp/DBSZ_banner_mobile.jpg",
        desc: "DRAGON BALL: Sparking! ZERO takes the legendary gameplay of the Budokai Tenkaichi series and raises it to whole new levels. Make yours the destructive power of the strongest fighters ever to appear in Dragon Ball!",
        price: 70
    }
];

switch(gameid){
    case "6445": 
        update2(0);
        break;
    case "6293":
        update2(1);
        break;
    case "9573":
        update2(2);
        break;
    case "4033":
        update2(3);
        break;
    case "8466":
        update2(4);
        break;
    case "4439":
        update2(5);
        break;
    case "9327":
        update2(6);
        break;
    case "9275":
        update2(7);
        break;
    case "3720":
        update2(8);
        break;
    case "0252":
        update2(9);
        break;
    case "9235":
        update2(10);
        break;
    case "5523":
        update2(11);
        break;
}

function link(path){
    window.location.href = 'game.html?gameid=' + path;
}

function update(){
    console.log("Found " + games.length / 3 + " Game Entries.");
    for(let i = 0; i < games.length; i+=3){
        let img = games[i];
        let id = games[i+1];
        let name = games[i+2];
        gamelist.innerHTML += `
        <div class="xh" id="${id}" onclick="link(${id})">
            <div style="background-image: url(${img});"></div> 
            <p>${name}</p>
        </div>
        `;
    }
    // window.location.href = 'game.html?'
}

function update2(li){
    console.log("Viewing: " + list[li].name + ".");
    document.title = list[li].name + " - Source Store";
    document.getElementById("name").innerHTML = list[li].name;
    document.getElementById("vid").src = list[li].vid;
    document.getElementById("img").src = list[li].img;
    document.getElementById("desc").innerHTML = list[li].desc;
    if(list[li].price > 0){
        document.getElementById("price").innerHTML = list[li].price + "$";
    } else {
        document.getElementById("price").innerHTML = "FREE";
    }
}

if (window.location.pathname == '/game.html') {
    update2();
} else{
    update();
}
