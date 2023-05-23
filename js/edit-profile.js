function choice_profile_img()
{
    let file = document.getElementById('choice-account-img').files[0];
    let account_image;
    if (file)
    {
        account_image = document.getElementById('account-img').src = URL.createObjectURL(file);
        localStorage.setItem('accountImage', account_image.src);
    }

    account_image.src = localStorage.getItem('accountImage')
}