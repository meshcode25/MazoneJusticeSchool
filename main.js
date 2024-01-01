//toggle and untoggle service display on hover

var showmenu= document.getElementById("showmenu");

var collapsemenu=document.getElementById("collapsemenu");
var navlinks=document.getElementById("nav-links");



var dropplaygroup= document.getElementsByClassName("drop-down-playgroup");
var playgroupcollapse= document.getElementsByClassName("playgroupcollapse");



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


dropplaygroup.addEventListener("click", ()=>{
    dropplaygroup.style.backgroundColor="yellow";
    
    playgroupcollapse.setAttribute(
        "style","position:static; display:block; opacity:1; visibility:visible; background-color: #242526; width:75%;"
    )
});