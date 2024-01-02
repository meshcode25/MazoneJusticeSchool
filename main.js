//toggle and untoggle service display on hover

var showmenu= document.getElementById("showmenu");

var collapsemenu=document.getElementById("collapsemenu");
var navlinks=document.getElementById("nav-links");



var dropplaygroup= document.getElementById("dropdaycare");
var playgroupcollapse= document.getElementById("playgroupcollapse");


var dropkinda= document.getElementById("dropkinda");
var kindacollapse= document.getElementById("kindacollapse");


var dropprimary= document.getElementById("dropprimary");
var primarycollapse= document.getElementById("primarycollapse");


var dropsecondary= document.getElementById("dropsecondary");
var secondarycollapse= document.getElementById("secondarycollapse");


//header hamburger and collapse menu
showmenu.addEventListener("click", ()=>{
    showmenu.style.display="none";
    
    showmenu.style.animate="all 2s ease";
    showmenu.style.visibility="hidden"
    showmenu.style.opacity="1"
    
    collapsemenu.style.display="block"
    collapsemenu.style.visibility="visible"
    collapsemenu.style.opacity="1"


    navlinks.setAttribute(
        "style","position:absolute; top:0; left:0; display:block; opacity:1; visibility:visible; background-color: #242526; width:75%;"
    )
});

collapsemenu.addEventListener("click", ()=>{
    collapsemenu.style.display="none";
    
    collapsemenu.style.animate="all 2s ease";
    collapsemenu.style.visibility="hidden"
    collapsemenu.style.opacity="1"
    
    showmenu.style.display="block"
    showmenu.style.visibility="visible"
    showmenu.style.opacity="1"

    navlinks.removeAttribute("style");

})

    //PlayGroup togglling and showing menu
dropplaygroup.addEventListener("mouseenter", ()=>{
   
   
    playgroupcollapse.setAttribute(
        "style","position:static; display:block; opacity:1; visibility:visible; background-color: #242526; width:75%;"
    )
});

dropplaygroup.addEventListener("mouseleave", ()=>{
    
   
    playgroupcollapse.removeAttribute("style")
});

    //Kinda togglling and showing menu
dropkinda.addEventListener("mouseenter", ()=>{
    dropkinda.style.backgroundColor;
   
    kindacollapse.setAttribute(
        "style","position:static; display:block; opacity:1; visibility:visible; background-color: #242526; width:75%;"
    )
});

dropkinda.addEventListener("mouseleave", ()=>{
    dropkinda.style.backgroundColor;
   
    kindacollapse.removeAttribute("style")
});


    //Primary togglling and showing menu
dropprimary.addEventListener("mouseenter", ()=>{
    dropprimary.style.backgroundColor;
   
    primarycollapse.setAttribute(
        "style","position:static; display:block; opacity:1; visibility:visible; background-color: #242526; width:75%;"
    )
});

dropprimary.addEventListener("mouseleave", ()=>{
    dropprimary.style.backgroundColor;
   
    primarycollapse.removeAttribute("style")
});

//secondary School togglinga and showind menu
dropsecondary.addEventListener("mouseenter", ()=>{
    dropsecondary.style.backgroundColor;
   
    secondarycollapse.setAttribute(
        "style","position:static; display:block; opacity:1; visibility:visible; background-color: #242526; width:75%;"
    )
});

dropsecondary.addEventListener("mouseleave", ()=>{
    dropsecondary.style.backgroundColor;
   
    secondarycollapse.removeAttribute("style")
});