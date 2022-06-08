function modalWindow () {
    let button = document.querySelector('.popup_engineer_btn'),
        popUp = document.querySelector('.popup_engineer'),
        buttonClose = document.getElementsByClassName('popup_close')[1];
    
    button.addEventListener('click', () => {
        popUp.classList.remove('fadeOut');
        popUp.style.display = 'block';
        popUp.classList.add('fadeIn');
    });

    buttonClose.addEventListener('click', () => {
        popUp.classList.remove('fadeIn');
        popUp.classList.add('fadeOut');
            window.setTimeout(() => {
                popUp.style.display = 'none';
            },500);
    });

    popUp.addEventListener('click', (e) => {
        let target = e.target;

        if(target.classList.contains('popup_engineer')) {
            popUp.classList.remove('fadeIn');
            popUp.classList.add('fadeOut');
            window.setTimeout(() => {
                popUp.style.display = 'none';
            },500);
            }
    });
}

function modalCallBack () {
    let phoneNumber = document.getElementsByTagName('a')[0],
        phoneNumberFooter =  document.querySelectorAll('.phone_link')[1],
        phoneLink = document.querySelector('.phone_link'),
        popUp = document.querySelector('.popup'),
        buttonClose = document.getElementsByClassName('popup_close')[0];

    phoneNumber.addEventListener('click', () => {
        popUp.classList.remove('fadeOut');
        popUp.style.display = 'block';
        popUp.classList.add('fadeIn');
    });

    phoneNumberFooter.addEventListener('click', () => {
        popUp.classList.remove('fadeOut');
        popUp.style.display = 'block';
        popUp.classList.add('fadeIn');
    });

    phoneLink.addEventListener('click', () => {
        popUp.classList.remove('fadeOut');
        popUp.style.display = 'block';
        popUp.classList.add('fadeIn');
    });

    buttonClose.addEventListener('click', () => {
        popUp.classList.remove('fadeIn');
        popUp.classList.add('fadeOut');
            window.setTimeout(() => {
                popUp.style.display = 'none';
            },500);
    });

    popUp.addEventListener('click', (e) => {
        let target = e.target;

        if(target.classList.contains('popup')) {
            popUp.classList.remove('fadeIn');
            popUp.classList.add('fadeOut');
            window.setTimeout(() => {
                popUp.style.display = 'none';
            },500);
        }
    });
}

window.setTimeout(() => {
    document.querySelector('.popup').classList.add('fadeIn');
    document.querySelector('.popup').style.display = 'block';
},60000);

modalWindow();
modalCallBack();