//toggle and untoggle service display on hover

var showmenu= document.getElementById("showmenu");

var collapsemenu=document.getElementById("collapsemenu");
var navlinks=document.getElementsByClassName("nav-links");

showmenu.addEventListener("click", ()=>{
    showmenu.style.display="none";
    
    showmenu.style.animate="all 2s ease";
    showmenu.style.visibility="hidden"
    showmenu.style.opacity="1"
    
    collapsemenu.style.display="block"
    collapsemenu.style.visibility="visible"
    collapsemenu.style.opacity="1"

    navlinks.style.display="block"
    navlinks.style.visibility="visible"
    navlinks.style.opacity="1"
    
});
collapsemenu.addEventListener("click", ()=>{
    collapsemenu.style.display="none";
    
    collapsemenu.style.animate="all 2s ease";
    collapsemenu.style.visibility="hidden"
    collapsemenu.style.opacity="1"
    
    showmenu.style.display="block"
    showmenu.style.visibility="visible"
    showmenu.style.opacity="1"
})