
const modals = () => {
    function bindModal (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, calcButton = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }
             
            windows.forEach(item => {
                item.classList.remove('fadeIn');
                item.classList.add('fadeOut');
                item.style.display = 'none';
            });

        

            modal.classList.remove('fadeOut');
            modal.style.display = 'block';
            modal.classList.add('fadeIn');
            
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.classList.remove('fadeIn');
                item.classList.add('fadeOut');
                window.setTimeout(() => {
                    item.style.display = 'none';
                },500);
            });
            modal.classList.remove('fadeIn');
            modal.classList.add('fadeOut');
            window.setTimeout(() => {
                modal.style.display = 'none';
            },500);
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.classList.remove('fadeIn');
                    item.classList.add('fadeOut');
                    window.setTimeout(() => {
                        item.style.display = 'none';
                    },500);
                });
                modal.classList.remove('fadeIn');
                modal.classList.add('fadeOut');
                window.setTimeout(() => {
                    modal.style.display = 'none';
                },500);
            }
        });

    }

    function showModalByTime (selector, time) {
        setTimeout(() => {
            document.querySelector(selector).classList.add('fadeIn');
            document.querySelector(selector).style.display = 'block';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, true);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, true);
    //showModalByTime('.popup', 60000);
};

export default modals;