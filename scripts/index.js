class Menu {
    static animateLinks() {
        const li = document.querySelectorAll('.nav__list li');
        li.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });     
    }   
    static handleClick() {
        const nav = document.querySelector('.nav__list');
        nav.classList.toggle('active');
        this.animateLinks();
    }
    static addClickEvent() {
        const menu = document.querySelector('.menu');
        menu.addEventListener('click', this.handleClick);
    }
}

Menu.addClickEvent();