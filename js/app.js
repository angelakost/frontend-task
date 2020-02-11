let menuWrapper = document.querySelector('.menu-wrapper');
let isMenuOpened = false;
let menuToggle = document.querySelector('.menu-toggle');
let menuItems = document.querySelectorAll('.menu-wrapper a');

menuItems.forEach(item => {
    item.addEventListener('click',() => toggleMenu());
});
menuToggle.addEventListener('click',() => toggleMenu());

defaultView = () => {
    console.log("Povikana f ja od  app.js deafult");
    document.getElementById("About").style.display = "block";
    document.getElementById("CV").style.display = "none";
};

showContent = (ev, menuName) => {

    console.log("Povikana f ja od  app.js");
    var i;
    var menuContent;
    var menuLinks;

    menuContent = document.getElementsByClassName ("menu-content");

    for(i=0; i < menuContent.length; i++) {
        menuContent[i].style.display = "none"
    }

    menuLinks = document.getElementsByClassName("menu-link");

    for(i=0; i < menuLinks.length; i++){
     menuLinks[i].className = menuLinks[i].className.replace(" active", "");
    }

    //Display corresponding content to the clicked menu link
    document.getElementById(menuName).style.display = "block";

    //Adding active class to the clicked menu link
    ev.currentTarget.className += " active";
}

toggleMenu = () => {
    console.log("Menu toggled");
    isMenuOpened = !isMenuOpened;
    if(isMenuOpened){
        menuWrapper.classList.add('show-menu');
    }
    else{
        menuWrapper.classList.remove('show-menu');
    };
}