let scrollBlocked = false;


(function () {
    let header = document.querySelector(".header");
    let toggler = header.querySelector(".toggler");
    let menu = header.querySelector(".header__menu");


    toggler.addEventListener('click', () => {
        menu.classList.toggle('header__menu_open');
        toggler.classList.toggle('toggler_active');

        ScrollToTop();
        ToggleScroll();
    });

})();


function ToggleScroll() {
    if (scrollBlocked)
        UnblockScroll();
    else
        BlockScroll();
}

function ScrollToTop() {
    window.scrollTo(0, 0);
}

function BlockScroll() {
    scrollBlocked = true;
    window.onscroll = () => {
        ScrollToTop()
    };
}

function UnblockScroll() {
    scrollBlocked = false;
    window.onscroll = null;
}