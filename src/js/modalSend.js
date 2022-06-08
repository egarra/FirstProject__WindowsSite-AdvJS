function popUpSend() {
   
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы скоро с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let forms = document.querySelectorAll('.form'),
        input = document.getElementsByTagName('input'),
        inputName = document.getElementsByTagName('input'),
        inputNumber = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    
    statusMessage.classList.add('status');

    function sendForm(element) {

        element.addEventListener('submit', function(event) {
            event.preventDefault();
            
            element.appendChild(statusMessage);
            
            let formData = new FormData(element);

            function postData(data) {
                        
                return new Promise(function(resolve, reject) {
                
                    let request = new XMLHttpRequest();
                
                    request.open('POST', 'server.php' );
                
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');

                    request.onreadystatechange = function() {
                    if(request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200 ) {
                        resolve();
                    }   else {
                            reject('Оборвалось');
                        }
                    }
                
                    request.send(data);
                });
            }
            
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            
            postData(formData).then(() => {statusMessage.innerHTML = message.loading})
                            .then(() => {statusMessage.innerHTML = message.success})
                            .catch(() => {statusMessage.innerHTML = message.failure})
                            .then(clearInput) 
        });
    }
    sendForm(forms[0]);
    sendForm(forms[1]);
    sendForm(forms[2]);
    sendForm(forms[3]);
    sendForm(forms[4]);
    sendForm(forms[5]);
    sendForm(forms[6]);
    sendForm(forms[7]);
}

popUpSend();