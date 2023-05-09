const ALL_PRODUCT = document.getElementsByClassName('product');
let MAX_PRODUCT_NUMBER;
let PRODUCT_NUMBER_LIST = 0;


function next_product_list()
{
    if(PRODUCT_NUMBER_LIST === MAX_PRODUCT_NUMBER - 1) PRODUCT_NUMBER_LIST = 0;
    else PRODUCT_NUMBER_LIST += 1;

    for(let product_number = 0; product_number < ALL_PRODUCT.length; product_number++)
    {
        ALL_PRODUCT[product_number].style.display = 'none';

        if(product_number < PRODUCT_NUMBER_LIST*4 + 4 && product_number >= PRODUCT_NUMBER_LIST*4)
        {
            ALL_PRODUCT[product_number].style.display = 'block';
        }
    }
}

function behind_product_list()
{
    if(PRODUCT_NUMBER_LIST === 0) PRODUCT_NUMBER_LIST = MAX_PRODUCT_NUMBER - 1;
    else PRODUCT_NUMBER_LIST -= 1;

    for(let product_number = 0; product_number < ALL_PRODUCT.length; product_number++)
    {
        ALL_PRODUCT[product_number].style.display = 'none';

        if(product_number < PRODUCT_NUMBER_LIST*4 + 4 && product_number >= PRODUCT_NUMBER_LIST*4)
        {
            ALL_PRODUCT[product_number].style.display = 'block';
        }
    }
}


function main()
{
    MAX_PRODUCT_NUMBER = Math.ceil(ALL_PRODUCT.length / 4)
    for(let product_number = 4; product_number < ALL_PRODUCT.length; product_number++) ALL_PRODUCT[product_number].style.display = 'none';
}

main()