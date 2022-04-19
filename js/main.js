const navbar = document.querySelector('#header');
const navbarHeight = navbar.getBoundingClientRect().height;
const logo = document.querySelector('.navbar__logo__img');
const logoWhite = 'images/logo.svg';
const logoDark = 'images/logo-dark.svg';
const arrowUp = document.querySelector('.top__btn');
document.addEventListener('scroll',() => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('on');
        logo.src = logoDark;
        arrowUp.classList.add('on');
    }else{
        navbar.classList.remove('on');
        logo.src = logoWhite;
        arrowUp.classList.remove('on');
    }
});

arrowUp.addEventListener('click', () => {
    window.scrollTo({top:0})
});

window.addEventListener('scroll', () => {
    let wScroll = window.scrollY;
    const aboutSection = document.querySelector('#about');
    if(wScroll >= aboutSection.offsetTop-window.innerHeight / 6){
        aboutSection.classList.add('show');
    }else{
        aboutSection.classList.remove('show');
    }
});

function categorize(e){
    const type = e.textContent;
    const projects = document.querySelectorAll('.work__list__item');
    const projectContainer = document.querySelector('.work__list');
    const workNavi = document.querySelectorAll('.work__navi__item');
    projectContainer.classList.add('ani-out');
    for(p=0; p<workNavi.length; p++){
        workNavi[p].classList.remove('on');
    }
    e.parentNode.classList.add('on');    
    setTimeout(() => {
        for(i=0; i<projects.length; i++){
            let datasetType = projects[i].dataset.type;
            projects[i].classList.remove('on');
            if(datasetType === type){
                projects[i].classList.add('on');
            }else if(type === 'All'){
                projects[i].classList.add('on');
            }
        };
        projectContainer.classList.remove('ani-out')
    }, 300);
}