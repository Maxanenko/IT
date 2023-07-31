let story_secs = document.querySelectorAll(".story");

story_secs.forEach(story => {
    let blocks = [...story.querySelectorAll(".story__block")];
    let pagination = story.querySelector(".story__pagination");
    let dotsContainer = pagination.querySelector(".pagination__dots");
    let dots = [];

    let activeBlockId = 0;


    InitPagination();
    HideAll();
    CheckAll();
    addEventListener('scroll', CheckAll);


    function InitPagination() {
        for (let i = 0; i < blocks.length; i++) {
            let dot = document.createElement('div');
            dot.className = "pagination__dot";
            dotsContainer.append(dot);
            dots.push(dot);
        }
    }

    function HideAll() {
        blocks.forEach(Hide);
    }

    function CheckAll() {
        blocks.forEach(Check);
    }


    function Check(block) {
        if (OnScreen(block)) {
            Show(block);
            SetActive(block);
        }
    }


    function Show(block) {
        block.classList.remove("story__block_hidden");
    }

    function Hide(block) {
        block.classList.add('story__block_hidden');
    }

    function SetActive(block) {
        const activeClass = "story__block_active";
        const activeDotClass = "pagination__dot_active";

        dots[activeBlockId].classList.remove(activeDotClass)
        blocks[activeBlockId].classList.remove(activeClass);

        activeBlockId = blocks.indexOf(block);

        dots[activeBlockId].classList.add(activeDotClass)
        blocks[activeBlockId].classList.add(activeClass);
    }


    function OnScreen(block) {
        let top = window.scrollY;
        let offset = block.offsetTop;
        let height = block.offsetHeight;

        return top >= offset;
    }
})