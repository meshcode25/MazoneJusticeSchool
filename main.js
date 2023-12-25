//toggle and untoggle service display on hover

var showmenu= document.getElementById("showmenu");

var collapsemenu=document.getElementById("collapsemenu");

showmenu.addEventListener("click", ()=>{
    showmenu.style.display="none";
    
    showmenu.style.animate="all 2s ease";
    showmenu.style.visibility="hidden"
    showmenu.style.opacity="1"
    
    collapsemenu.style.display="block"
    collapsemenu.style.visibility="visible"
    collapsemenu.style.opacity="1"
    
});
dropdownbutton.addEventListener("mouseout", ()=>{
    dropdowncontent.style.display="none";
})