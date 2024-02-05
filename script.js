



//form

const data = {
    name: '  ',
    email: '  ',
    message: '  '
}

const name= document.querySelector('#name');
const email= document.querySelector('#email');
const message= document.querySelector('#message');
const form= document.querySelector('.formulario')

name.addEventListener('input',  reedtext);
email.addEventListener('input',  reedtext);
message.addEventListener('input',  reedtext);

//submit event
form.addEventListener('submit' , function( event){
     event.preventDefault();

     //validation

     const  { name, email, message } = data;
     
        if (name === '  ' || email === ' ' || message === '  ')  {
            alert (' Please fill the form')

               return;
        }

// alert send
        sending(' All done!! we will  be in contact with you')

});

function reedtext(e) {
        // console.log(e.target.value)

        data[e.target.id] = e.target.value;

        //console.log(data)
}

//showError
 function alert (mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

   form.appendChild (error);

   setTimeout (() => {
    error.remove();

   }, 5000);
 }

 function sending(mensaje) {
    const send = document.createElement('P');
    send.textContent= mensaje;
    send.classList.add('send');

    form.appendChild(send)

    setTimeout (() =>{
        send.remove();


    }, 5000);

 }


