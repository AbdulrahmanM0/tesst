// get data from json file and store it in IconsData
let IconsData = [];
let newAsync = []

fetch('../data/data.json').then(res => res.json()).then(data => data.map(item => IconsData.push(item))).catch(error => console.error(error));
async function fetchData() {
    try {
        const response = await fetch('../data/data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
  // call the function and use the data



// root element
const root = document.getElementById('root');

// open and close list
let open = false;
const startList = document.getElementsByClassName('ST-list')[0];
const startBTN = document.getElementById('start-btn');

startBTN.onclick = () => {
    if(open == false){
        startList.style.display='block';
        open = true;
    }else if(open == true){
        startList.style.display='none';
        open = false;
    }
}

// power bottons
const powerOff = document.getElementById("powerOFF");
const restart = document.getElementById("restart");
let t = 5;

powerOff.onclick = () => {
    console.log('close')
    let goodBy = confirm('Are you sure you want to close Abdulrahmans PC??');
    if(goodBy == true){
    endMSG()
    setTimeout(()=>{
    window.close()}
    ,5000)
    }else{
        console.log("stop playing")
    }
}
endMSG = () =>{
    let banar = `<div style="width:100%;height:100vh;background:blue"><h1 style='color:white'>GOOD BY</h1><h1 style=width:500px;font-size:10px;>
    ░█████╗░██████╗░██████╗░██╗░░░██╗██╗░░░░░██████╗░░█████╗░██╗░░██╗███╗░░░███╗░█████╗░███╗░░██╗
    ██╔══██╗██╔══██╗██╔══██╗██║░░░██║██║░░░░░██╔══██╗██╔══██╗██║░░██║████╗░████║██╔══██╗████╗░██║
    ███████║██████╦╝██║░░██║██║░░░██║██║░░░░░██████╔╝███████║███████║██╔████╔██║███████║██╔██╗██║
    ██╔══██║██╔══██╗██║░░██║██║░░░██║██║░░░░░██╔══██╗██╔══██║██╔══██║██║╚██╔╝██║██╔══██║██║╚████║
    ██║░░██║██████╦╝██████╔╝╚██████╔╝███████╗██║░░██║██║░░██║██║░░██║██║░╚═╝░██║██║░░██║██║░╚███║
    ╚═╝░░╚═╝╚═════╝░╚═════╝░░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝
                                
                                ███╗░░░███╗░█████╗░██╗░░██╗░█████╗░███╗░░░███╗███╗░░░███╗███████╗██████╗░
                                ████╗░████║██╔══██╗██║░░██║██╔══██╗████╗░████║████╗░████║██╔════╝██╔══██╗
                                ██╔████╔██║██║░░██║███████║███████║██╔████╔██║██╔████╔██║█████╗░░██║░░██║
                                ██║╚██╔╝██║██║░░██║██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝░░██║░░██║
                                ██║░╚═╝░██║╚█████╔╝██║░░██║██║░░██║██║░╚═╝░██║██║░╚═╝░██║███████╗██████╔╝
                                ╚═╝░░░░░╚═╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░░░░╚═╝╚══════╝╚═════╝░</h1></div>`;
    root.innerHTML = banar;
}

restart.onclick = () => {
    location.reload()
}

                    // there is something called ASCII
                    //  you can change your text to be some code or numbers
                    //  like this => Abdulrahman =will be=> (65 98 100 117 108 114 97 104 109 97 110 )
                    //                                       ^^^^^ so this is my code name ^^^^^^^
                    // you can try it from this site https://www.browserling.com/tools/text-to-ascii
                            // ENJOY    

// i didnt use full screen
let fullScreenWidth = window.screen.width;
let fullScreenHeight = window.screen.height;
// open list icon
const listStart = document.getElementsByClassName('small-list')[0];
const opendIcons = document.getElementsByClassName('opend-icons')[0];
let foxWindow;
let writeWindow;
let craftWindow;
let tubeWindow;
let safWindow;
let pcWindow;
let sketchWindow;

listStart.onclick = (e) =>{
    if(opendIcons.childNodes.length < 5){
        if(e.target.id == "online-writing" || e.target.innerText == 'Online Writing'){
            console.log('YOU DID OPEN WRITING SITE');
            writeWindow = window.open('https://www.plotgrid.app/?gclid=Cj0KCQjwla-hBhD7ARIsAM9tQKuFgJA4zRO2v5DUvfVfCR4CA7B3aj3q7tV3uN2rCaIejSjXEOvasbcaAidyEALw_wcB#/app','writeWindow',`width=${fullScreenWidth},height=${fullScreenHeight}`);
            opendIcons.innerHTML += `<div class=footer-icon-container><span class=close-Icon >X</span><img id=Writer class=footer-icon src=../assets/icons/writing.png /></div>`
        }
        if(e.target.id == "firefox" || e.target.innerText == 'Firefox'){
            console.log('YOU DID OPEN FIREFOX');
            foxWindow = window.open('https://www.google.com/','foxWindow',`width=${fullScreenWidth},height=${fullScreenHeight}`)
            opendIcons.innerHTML += `<div class=footer-icon-container><span class=close-Icon >X</span><img id=${IconsData[1].id} class=footer-icon src=../assets/icons/${IconsData[1].icon} /></div>`
        }
        if(e.target.id == "Mincraft" || e.target.innerText == 'Mincraft'){
            console.log('YOU DID OPEN MINECRAFT')
            craftWindow = window.open('https://classic.minecraft.net/','craftWindow',`width=${fullScreenWidth},height=${fullScreenHeight}`)
            opendIcons.innerHTML += `<div class=footer-icon-container><span class=close-Icon >X</span><img id=${IconsData[3].id} class=footer-icon src=../assets/icons/${IconsData[3].icon} /></div>`
        }
    }else{
        opendIcons.innerHTML += '<h3 style=color:red >TOO MANY ICONS</h3>';
        setTimeout(()=>{opendIcons.childNodes[5].remove()},2000)
    }
}

// open Desk icons
let gridIcons = document.getElementsByClassName('grid-icons')[0];

gridIcons.ondblclick = (e) => {
    if(e.target.classList.contains('iconImg')){
        if(opendIcons.childNodes.length < 5){
            if(e.target.id == 1){
                console.log('YOU DID OPEN YOUR PC AGAIN!!!');
                pcWindow = window.open('../index.html','pcWindow',`width=${fullScreenWidth},height=${fullScreenHeight}`);
                opendIcons.innerHTML += `<div class=footer-icon-container><span class=close-Icon >X</span><img id=${IconsData[0].id} class=footer-icon src=../assets/icons/${IconsData[0].icon} /></div>`
            }
            if(e.target.id == 2){
                console.log('YOU DID OPEN FIREFOX!!!');
                foxWindow = window.open('https://www.google.com/','foxWindow',`width=${fullScreenWidth},height=${fullScreenHeight}`)
                opendIcons.innerHTML += `<div class=footer-icon-container><span class=close-Icon >X</span><img id=${IconsData[1].id} class=footer-icon src=../assets/icons/${IconsData[1].icon} /></div>`
            }
            if(e.target.id == 3){
                console.log('YOU DID OPEN EDGE!!!');
                foxWindow = window.open('https://www.google.com/','edgeWindow',`width=${fullScreenWidth},height=${fullScreenHeight}`)
                opendIcons.innerHTML += `<div class=footer-icon-container><span class=close-Icon >X</span><img id=${IconsData[2].id} class=footer-icon src=../assets/icons/${IconsData[2].icon} /></div>`
            }
            if(e.target.id == 4){
                console.log('YOU DID OPEN MINECRAFT!!!');
                craftWindow = window.open('https://classic.minecraft.net/','craftWindow',`width=${fullScreenWidth},height=${fullScreenHeight}`)
                opendIcons.innerHTML += `<div class=footer-icon-container><span class=close-Icon >X</span><img id=${IconsData[3].id} class=footer-icon src=../assets/icons/${IconsData[3].icon} /></div>`
            }
            if(e.target.id == 5){
                console.log('YOU DID OPEN MY SAFE :) ');
                safWindow = window.open('../safe/safe.html','safWindow',`width=${fullScreenWidth},height=${fullScreenHeight}`)
                opendIcons.innerHTML += `<div class=footer-icon-container><span class=close-Icon >X</span><img id=${IconsData[4].id} class=footer-icon src=../assets/icons/${IconsData[4].icon} /></div>`
            }
            if(e.target.id == 6){
                console.log('YOU DID OPEN YOUTUBE!!!');
                tubeWindow = window.open('https://www.youtube.com/','tubeWindow',`width=${fullScreenWidth},height=${fullScreenHeight}`)
                opendIcons.innerHTML += `<div class=footer-icon-container><span class=close-Icon >X</span><img id=${IconsData[5].id} class=footer-icon src=../assets/icons/${IconsData[5].icon} /></div>`
            }
            if(e.target.id == 7){
                console.log('YOU DID OPEN SKETCH!!!');
                sketchWindow = window.open('https://sketch.io/sketchpad/','sketchWindow',`width=${fullScreenWidth},height=${fullScreenHeight}`)
                opendIcons.innerHTML += `<div class=footer-icon-container><span class=close-Icon >X</span><img id=${IconsData[6].id} class=footer-icon src=../assets/icons/${IconsData[6].icon} /></div>`
            }
        }
    }
}

// close and focuse window
opendIcons.onclick = (e) => {
    if(e.target.classList.contains('close-Icon')){
        if(e.target.nextElementSibling.id == IconsData[3].id){
            craftWindow.close();
        }
        if(e.target.nextElementSibling.id == "Writer"){
            writeWindow.close();
        }
        if(e.target.nextElementSibling.id == IconsData[1].id){
            foxWindow.close();
        }
        if(e.target.nextElementSibling.id == 1){
            pcWindow.close();
        }
        if(e.target.nextElementSibling.id == 2){
            foxWindow.close();
        }
        if(e.target.nextElementSibling.id == 3){
            foxWindow.close();
        }
        if(e.target.nextElementSibling.id == 4){
            craftWindow.close();
        }
        if(e.target.nextElementSibling.id == 5){
            safWindow.close();
        }
        if(e.target.nextElementSibling.id == 6){
            tubeWindow.close();
        }
        if(e.target.nextElementSibling.id == 7){
            sketchWindow.close();
        }
    e.target.parentElement.remove();
    }

// you know what my eyes hurt right now (*-*)  <<====================

    if(e.target.id == IconsData[3].id){
        craftWindow.focus();
    }
    if(e.target.id == "Writer"){
        writeWindow.focus()
    }
    if(e.target.id == IconsData[1].id){
        foxWindow.focus();
    }
    if(e.target.id == 1){
        pcWindow.focus();
    }
    if(e.target.id == 2){
        foxWindow.focus();
    }
    if(e.target.id == 3){
        foxWindow.focus();
    }
    if(e.target.id == 4){
        craftWindow.focus();
    }
    if(e.target.id == 5){
        safWindow.focus();
    }
    if(e.target.id == 6){
        tubeWindow.focus();
    }
    if(e.target.id == 7){
        sketchWindow.focus();
    }
}


// Date and time
const DateTime = document.getElementsByClassName("data&time")[0];
let date = new Date();
let amORpm = date.getHours > 12 ? "AM":"PM";
let hours =date.getHours();
let minutes = date.getMinutes();
    if(hours > 12){
        hours = hours - 12;
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
DateTime.innerHTML = `<div>${hours}<span>:</span>${minutes}<span style=margin-left:5px >${amORpm}</span></div>`;
date.getHours()

// wifi settings
let wifiOpen = false;
let connection = document.getElementById('Connection');
let cWifi = document.getElementById('CWIFI');
let displaySpan = document.getElementById('opD');
let connectedID = 'opn';
let unConnectedID = 'close';
connection.onclick = () => {
    if(wifiOpen == false){
        displaySpan.style.display = 'inline';
        wifiOpen = true;
    }else if(wifiOpen == true){
        displaySpan.style.display = 'none';
        wifiOpen = false;
    }
}
cWifi.onclick = () => {
    if(cWifi.childNodes[0].id == connectedID){
        connection.src = '../assets/wifi/icons8-wi-fi-connected-96.png';
        cWifi.childNodes[0].src = '../assets/wifi/icons8-wi-fi-off-100.png';
        cWifi.childNodes[1].innerHTML = 'Close';
        cWifi.childNodes[0].id = unConnectedID;
    }else if(cWifi.childNodes[0].id == unConnectedID){
        connection.src = '../assets/wifi/icons8-wi-fi-off-100.png';
        cWifi.childNodes[0].src = '../assets/wifi/icons8-wi-fi-connected-96.png';
        cWifi.childNodes[1].innerHTML = 'TOFI';
        cWifi.childNodes[0].id = connectedID;
    }
}



// Read icons on the DESK
let actives
(async function() {
    const newAsync = await fetchData();
    // console.log(newAsync); // use data here
    newAsync.map(items => gridIcons.innerHTML += `<div class=icon-container ><img id=${items.id} class='iconImg'  src='../assets/icons/${items.icon}' alt=icon /><p class=icon-name >${items.name}</p></div>`)
    actives = document.querySelectorAll('.iconImg')
})();

unActiveIcon = () => {
    actives.forEach(a=>a.classList.remove('active-icon'));
}
gridIcons.onclick = (e) => {
    if(e.target.classList.contains('iconImg')){
        unActiveIcon()
        e.target.classList.add('active-icon');
    }
}

// un active
root.onclick = (e) => {
    if(!e.target.classList.contains('iconImg')){
        unActiveIcon()
    }

    if(!e.target.classList.contains('ST')){
            startList.style.display='none';
            open = false;
    }
    if(!e.target.classList.contains('YF')){
        displaySpan.style.display = 'none';
        wifiOpen = false;
    }
}

//             _         _       _           _                           
//       /\   | |       | |     | |         | |                          
//      /  \  | |__   __| |_   _| |_ __ __ _| |__  _ __ ___   __ _ _ __  
//     / /\ \ | '_ \ / _` | | | | | '__/ _` | '_ \| '_ ` _ \ / _` | '_ \ 
//    / ____ \| |_) | (_| | |_| | | | | (_| | | | | | | | | | (_| | | | |
//   /_/    \_|_.__/ \__,_|\__,_|_|_|  \__,_|_| |_|_| |_| |_|\__,_|_| |_|                                                               
//               __  __       _                                        _           
//               |  \/  |     | |                                      | |          
//               | \  / | ___ | |__   __ _ _ __ ___  _ __ ___   ___  __| |          
//               | |\/| |/ _ \| '_ \ / _` | '_ ` _ \| '_ ` _ \ / _ \/ _` |          
//               | |  | | (_) | | | | (_| | | | | | | | | | | |  __| (_| |          
//               |_|  |_|\___/|_| |_|\__,_|_| |_| |_|_| |_| |_|\___|\__,_|  

const randomPoint = document.getElementById('randomPoint');
let music = document.getElementById('music');
let deskTop = document.getElementsByClassName('desktop')[0];
let sendMSG = document.createElement('div');
sendMSG.classList.add('inputMsg');
sendMSG.innerHTML = `<form action="mailto:gabdulrahman.mohammed@gmail.com" method="post" enctype="text/plain"><div style=color:#000;margin-bottom:10px; >Let me know your name LEGEND (*o*)</div><input type=text placeholder=Enter-your-name name=name /><button type=submit >Submit</button></form>`;
let sTimer;
randomPoint.onmouseover = () => {
    sTimer=setTimeout(()=>{
        // deskTop.classList.add('newDesk');
        deskTop.innerHTML += `<video autoplay muted loop id="myVideo">
                                <source src="assets/GG/ggv.mp4" type="video/mp4">
                            </video>`
        music.innerHTML = `<audio autoplay>
                                <source src='assets/GG/ggm.mp4' type='audio/mp3'>
                            </audio>`;
        deskTop.appendChild(sendMSG);
        music.childNodes[0].play();
        randomPoint.remove();
    },8000)
    console.log(`
                ▄               ▄    ______________________  
                ▌▒█           ▄▀▒▌  | I WAS HERE 4/6/2023 |
                ▌▒▒█        ▄▀▒▒▒▐  | (0_0) Abdulrahman   |
               ▐▄█▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐  |_____________________|
             ▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐   
            ▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌   
           ▐▒▒▒▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▌  
           ▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐  
          ▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌ 
          ▌░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌ 
         ▌▒▒▒▄██▄▒▒▒▒▒▒▒▒░░░░░░░░▒▒▒▐ 
        ▐▒▒▐▄█▄█▌▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
         ▐▒▒▐▀▐▀▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▐ 
          ▌▒▒▀▄▄▄▄▄▄▀▒▒▒▒▒▒▒░▒░▒░▒▒▒▌ 
          ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▒▄▒▒▐  
            ▀▄▒▒▒▒▒▒░▒▒▒▒▒▒▒▒░▒▄▒▒▒▒▌  
            ▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▄▒▒▒▒▌  
            ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▒▄▒▐  
            ▀▄▒▒▒▒▒▒▒▒░▒▒▒▒▒░▒▒▄▒▒▒▒▌  
            ▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▄▒▒▒▒▌  
    `)
}
randomPoint.onmouseout = () => {
    clearTimeout(sTimer)
}

sendMSG.childNodes[0].childNodes[2].onclick = (e) => {
    sendMSG.style.display = 'none';

}

console.log(`
░█████╗░██████╗░██████╗░██╗░░░██╗██╗░░░░░██████╗░░█████╗░██╗░░██╗███╗░░░███╗░█████╗░███╗░░██╗
██╔══██╗██╔══██╗██╔══██╗██║░░░██║██║░░░░░██╔══██╗██╔══██╗██║░░██║████╗░████║██╔══██╗████╗░██║
███████║██████╦╝██║░░██║██║░░░██║██║░░░░░██████╔╝███████║███████║██╔████╔██║███████║██╔██╗██║
██╔══██║██╔══██╗██║░░██║██║░░░██║██║░░░░░██╔══██╗██╔══██║██╔══██║██║╚██╔╝██║██╔══██║██║╚████║
██║░░██║██████╦╝██████╔╝╚██████╔╝███████╗██║░░██║██║░░██║██║░░██║██║░╚═╝░██║██║░░██║██║░╚███║
╚═╝░░╚═╝╚═════╝░╚═════╝░░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝

███╗░░░███╗░█████╗░██╗░░██╗░█████╗░███╗░░░███╗███╗░░░███╗███████╗██████╗░
████╗░████║██╔══██╗██║░░██║██╔══██╗████╗░████║████╗░████║██╔════╝██╔══██╗
██╔████╔██║██║░░██║███████║███████║██╔████╔██║██╔████╔██║█████╗░░██║░░██║
██║╚██╔╝██║██║░░██║██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝░░██║░░██║
██║░╚═╝░██║╚█████╔╝██║░░██║██║░░██║██║░╚═╝░██║██║░╚═╝░██║███████╗██████╔╝
╚═╝░░░░░╚═╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░░░░╚═╝╚══════╝╚═════╝░
`)

