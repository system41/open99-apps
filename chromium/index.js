"use strict";

let bookmarks = [
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png",
        name: "Google",
        url: "https://www.google.com/webhp?igu=1",
    },
    {
        icon: "/favicon.ico",
        name: "daedalOS",
        url: "https://dustinbrett.com/",
    },
    {
        icon: "/System/Icons/win96.png",
        name: "Windows 96",
        url: "https://windows96.net/",
    },
    {
        icon: "/System/Icons/aos.png",
        name: "AaronOS",
        url: "https://aaronos.dev/AaronOS/",
    },
    {
        icon: "/System/Icons/jspaint.png",
        name: "JS Paint",
        url: "https://jspaint.app/",
    },
    {
        icon: "/System/Icons/minecraft.png",
        name: "Minecraft Classic",
        url: "https://classic.minecraft.net/",
    },
    {
        icon: "/System/Icons/diablo.png",
        name: "Diablo",
        url: "https://d07riv.github.io/diabloweb/",
    },
];

let app = document.getElementById('BROWSERapp')
let bookmarkBar = app.children[1]

bookmarks.forEach(function(item){
    let btn = document.createElement('button')
    btn.ariaLabel = item.name + " " + item.url
    btn.title = item.name + " " + item.url
    btn.type = "button"
    let icon = document.createElement('img')
    icon.src = item.icon
    btn.appendChild(icon)
    bookmarkBar.appendChild(btn)
})

app.addEventListener("keyup", function(e){
    if(e.key = "Enter" && app.children[0].getElementsByTagName('input')[0] === document.activeElement){
        app.getElementsByTagName('iframe').setAttribute('src', app.children[0].getElementsByTagName('input')[0].value)
    }
})