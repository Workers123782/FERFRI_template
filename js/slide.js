function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


function set_slide_position(slides, window_width_size)
{
    for(let slide_number = 1; slide_number < slides.length; slide_number++)
    {
        slides[slide_number].style.left = String(-window_width_size) + 'px';
    }
}


async function main()
{
    let slides = document.getElementsByClassName('slider-container');
    let window_width_size = window.innerWidth;

    let front_slide_number = 1;
    let slide_number = 0;
    let behind_slide_number = slides.length - 1

    set_slide_position(slides, window_width_size);

    while(slides.length > 1)
    {
        await sleep(5000);
        slide_number = front_slide_number;
        front_slide_number = slide_number + 1;
        behind_slide_number = slide_number - 1;

        if(slide_number === 0)
        {
            behind_slide_number = slides.length - 1;
        }
        else if(slide_number === slides.length - 1)
        {
            front_slide_number = 0;
        }

        for (let slide_position = 0; slide_position <= window_width_size; slide_position += window_width_size / 20) {
            slides[behind_slide_number].style.left = String(-slide_position) + 'px';
            slides[slide_number].style.left = String(slide_position - window_width_size) + 'px';
            await sleep(50);
        }
    }
}


main();
