const SLIDES = document.getElementsByClassName('slider-container');

const WINDOW_WIDTH_SIZE = window.innerWidth;

let FRONT_SLIDE_NUMBER = 0;
let SLIDE_NUMBER = 0;
let BEHIND_SLIDE_NUMBER = 0;

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


function set_slide_position()
{
    for(let slide_number = 1; slide_number < SLIDES.length; slide_number++)
    {
        SLIDES[slide_number].style.left = String(-WINDOW_WIDTH_SIZE) + 'px';
    }
}


async function next_slide(slide_number)
{
    BEHIND_SLIDE_NUMBER = SLIDE_NUMBER;
    SLIDE_NUMBER = slide_number;
    FRONT_SLIDE_NUMBER = slide_number + 1;

    if(slide_number === 0)
    {
        BEHIND_SLIDE_NUMBER = SLIDES.length - 1;
    }
    else if(slide_number === SLIDES.length - 1)
    {
        FRONT_SLIDE_NUMBER = 0;
    }

    for (let slide_position = 0; slide_position <= WINDOW_WIDTH_SIZE; slide_position += WINDOW_WIDTH_SIZE / 20) {
        SLIDES[BEHIND_SLIDE_NUMBER].style.left = String(-slide_position) + 'px';
        SLIDES[SLIDE_NUMBER].style.left = String(slide_position - WINDOW_WIDTH_SIZE) + 'px';
        await sleep(50);
    }
}

function create_button()
{
    let html_text = '';
    for(let slide_number = 0; slide_number < SLIDES.length; slide_number++)
    {
        html_text += '<button class="header-slide-button" onclick="next_slide(' + String(slide_number) +
            ')" id="slide-number' + String(slide_number) + '"></button>'
    }

    document.getElementsByClassName('slide-navigation')[0].innerHTML = html_text
}


async function main()
{
    FRONT_SLIDE_NUMBER = 1;
    SLIDE_NUMBER = 0;
    BEHIND_SLIDE_NUMBER = SLIDES.length - 1;

    set_slide_position();
    create_button();

    while(SLIDES.length > 1)
    {
        await sleep(5000);
        await next_slide(FRONT_SLIDE_NUMBER)
    }
}


main();
