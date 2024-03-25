function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h >= 5 && h < 12) {
        console.log("Good morning! I am Misty Fan.");
    }
    else if (h >= 12 && h < 18) {
        console.log("Good afternoon! I am Misty Fan.");
    }
    else if (h >= 18 && h < 20) {
        console.log("Good evening! I am Misty Fan.");
    }
    else if (h >= 20 && h < 24 ||  h < 5) {
        console.log("Good night! I am Misty Fan.");
    }
}
greetingFunc();

function addYear() {
    var d = new Date();
    var y = d.getFullYear();
 
    var E = document.getElementById("copyYear");
    E.innerHTML += y;
}
/*
function showList() {

    document.getElementById("FavList").style.display = "block";
 
    document.getElementById("SeeMoreBTN").style.display = "none";
 
}
*/
$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();  
    $("#readMore").show();    
});
 
$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();    
});

function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("Usertext");
    var msg = document.getElementById("ValidateMsg");

    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 
}

let map;

async function initMap() {
    const position = {lat: 40.3888393587544, lng: -79.86509182685019};
    const {Map} = await google.maps.importLibrary("maps");
    const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        zoom: 12,
        center: position,
        mapId: "DEMO_MAP_ID",
    });
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title:"KENNYWOOD PARK",
    });
}
initMap();

function activeNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}