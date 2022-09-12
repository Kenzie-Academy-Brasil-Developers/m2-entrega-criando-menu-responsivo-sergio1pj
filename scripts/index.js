class Menu {
    static animateLinks() {
        const li = document.querySelectorAll('.nav__list li');
        const input = document.querySelector('.input-group input');
        li.forEach((link) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = "navLinkFade 0.5s ease forwards 0.3s";
            }
        });
        if (input.style.animation) {
            input.style.animation = '';
        }
        else {
            input.style.animation = "navLinkFade 0.5s ease forwards 0.3s";
        }
    }   
    static handleClick() {
        const nav = document.querySelector('.nav__list');
        const inputGroup = document.querySelector('.input-group');
        nav.classList.toggle('active');
        inputGroup.classList.toggle('active');
        Menu.animateLinks();
    }
    static addClickEvent() {
        const menu = document.querySelector('.menu');
        menu.addEventListener('click', this.handleClick);
    }
}

Menu.addClickEvent();