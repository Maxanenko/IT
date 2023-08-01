const hiddenClass = "story__block_hidden";
const activeClass = "story__block_active";
const activeDotClass = "pagination__dot_active";


InitStoryBoards();


function InitStoryBoards() {
    document
        .querySelectorAll(".story")
        .forEach(InitStoryBoard);
}

function InitStoryBoard(story) {
    const blocks = [...story.querySelectorAll(".story__block")];
    const pagination = story.querySelector(".story__pagination");
    const dotsContainer = pagination.querySelector(".pagination__dots");

    let dots = [];
    let activeBlockId = 0;

    InitBlocks();
    addEventListener('scroll', CheckBlocks);


    function AddDot(dotsContainer) {
        let dot = document.createElement('div');
        dot.className = "pagination__dot";
        dotsContainer.append(dot);
        return dot;
    }


    function InitBlocks() {
        blocks.forEach(block => {
            Hide(block);
            dots.push(AddDot(dotsContainer));
            Check(block);
        });
    }

    function CheckBlocks() {
        blocks.forEach(block => {
            Check(block);
        });
    }

    function Check(block) {
        if (InFocus(block)) {
            Show(block);
            SetActive(block);
        }
    }


    function InFocus(block) {
        const rect = block.getBoundingClientRect();
        const blockCenter = rect.top + .5 * rect.height;
        const windowThreshold = .75 * window.innerHeight;
        return blockCenter - windowThreshold <= 0;
    }

    function Show(block) {
        block.classList.remove(hiddenClass);
    }

    function Hide(block) {
        block.classList.add(hiddenClass);
    }

    function SetActive(block) {
        dots[activeBlockId].classList.remove(activeDotClass)
        blocks[activeBlockId].classList.remove(activeClass);

        activeBlockId = blocks.indexOf(block);

        dots[activeBlockId].classList.add(activeDotClass)
        blocks[activeBlockId].classList.add(activeClass);
    }
}