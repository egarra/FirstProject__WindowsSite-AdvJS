const modals = () => {
    function bindModal (triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

            modal.classList.remove('fadeOut');
            modal.style.display = 'block';
            modal.classList.add('fadeIn');
            
            });
        });

        close.addEventListener('click', () => {
            modal.classList.remove('fadeIn');
            modal.classList.add('fadeOut');
            window.setTimeout(() => {
                modal.style.display = 'none';
            },500);
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.classList.remove('fadeIn');
                modal.classList.add('fadeOut');
                window.setTimeout(() => {
                    popUp.style.display = 'none';
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
    showModalByTime('.popup', 60000);
};

export default modals;