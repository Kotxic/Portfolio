const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if  (menuLinks.length>0){
    menuLinks.forEach(menuLink=>{
        menuLink.addEventListener("click", onMenuLinckClick);
    });

    function onMenuLinckClick(e){
        const menuLink=e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top+pageYOffset-document.querySelector('header').offsetHeight

            window.scrollTo({
                top:gotoBlockValue,
                behavior:"smooth"
            });
            e.preventDefault();
        }
    }
}

const iconMenu = document.querySelector('.menu__icon');
const header = document.querySelector('.header');
if(iconMenu){
    const menuBody = document.querySelector('.navigation__content');
    iconMenu.addEventListener("click", function(e){
        menuBody.classList.toggle("_active");
        document.body.classList.toggle('_lock');
    })
}
