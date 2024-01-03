//toggle and untoggle service display on hover

var Screensizes=[0,480,768,996,1200]


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



//Navigation Scrolling appear and collapse nav bar 
    if(window.innerWidth <= Screensizes[2]){

        // keep track of previous scroll position
        let prevScrollPos = window.pageYOffset;

        window.addEventListener('scroll', function() {
            // current scroll position
            const currentScrollPos = window.pageYOffset;

            if (prevScrollPos < currentScrollPos) {
                // user has scrolled up
                document.querySelector('nav').classList.add('hidenav');
            } else {
                // user has scrolled down
                document.querySelector('nav').classList.remove('hidenav');
            }

            // update previous scroll position
            prevScrollPos = currentScrollPos;
        });

    }

//header hamburger and collapse menu
showmenu.addEventListener("click", ()=>{
    showmenu.style.display="none";
    
    showmenu.style.animation="all 2s ease";
    showmenu.style.visibility="hidden"
    showmenu.style.opacity="0"
    
    collapsemenu.style.display="block"
    collapsemenu.style.visibility="visible"
    collapsemenu.style.opacity="1"
    collapsemenu.style.transition="all 2s ease"
    collapsemenu.style.animation="all 2s ease"



    navlinks.setAttribute(
        "style","position:absolute; top:90px; left:0; display:block; opacity:1; visibility:visible; background-color: #242526; width:75%; overflow-y:scroll"
    )
});

collapsemenu.addEventListener("click", ()=>{
    collapsemenu.style.display="none";
    
    collapsemenu.style.animation="all 2s ease";
    collapsemenu.style.transition="all 2s ease";

    collapsemenu.style.visibility="hidden"
    collapsemenu.style.opacity="0"
    

    showmenu.style.transition="all 2s ease"
    showmenu.style.animation="all 2s ease"


    showmenu.style.display="block"
    showmenu.style.visibility="visible"
    showmenu.style.opacity="1"

    navlinks.removeAttribute("style");

})

    //PlayGroup togglling and showing menu
dropplaygroup.addEventListener("mouseenter", ()=>{
   
   
    playgroupcollapse.setAttribute(
        "style","position:static; display:block; opacity:1; visibility:visible; background-color: #242526; width:100%; margin-left:8px"
    )
});

dropplaygroup.addEventListener("mouseleave", ()=>{
    
   
    playgroupcollapse.removeAttribute("style")
});

    //Kinda togglling and showing menu
dropkinda.addEventListener("mouseenter", ()=>{
    dropkinda.style.backgroundColor;
   
    kindacollapse.setAttribute(
        "style","position:static; display:block; opacity:1; visibility:visible; background-color: #242526; width:100%; margin-left:5px"
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
        "style","position:static; display:block; opacity:1; visibility:visible; background-color: #242526; width:100%; margin-left:10px"
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
        "style","position:static; display:block; opacity:1; visibility:visible; background-color: #242526; width:100%; margin-left:5px"
    )
});

dropsecondary.addEventListener("mouseleave", ()=>{
    dropsecondary.style.backgroundColor;
   
    secondarycollapse.removeAttribute("style")
});


//slides for the blog posts 
var slides=document.querySelectorAll(".blog");
let currentSlide=0;
let blogslides;

function ChangeSlides(){
    for(i=0; i<slides.length; i++){
        slides[i].style.opacity=0;
        

        slides[i].style.display="none";
    
        slides[i].style.visibility="hidden"
    }

    

    slides[currentSlide].style.opacity=1;

    slides[currentSlide].style.display="block";

    slides[currentSlide].style.visibility="visible"

    
    slides[currentSlide].style.position="relative"

    slides[currentSlide].style.left="0";
    slides[currentSlide].style.top="0";
    

    // slides[currentSlide].style.backgroundColor="purple";


    currentSlide=(currentSlide+1) % slides.length

}

if(window.innerWidth <= Screensizes[2]){
    blogslides=setInterval(ChangeSlides,3000);
}else{

} 
