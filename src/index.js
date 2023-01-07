import './style.css'

const screen = document.getElementById('screenid');
const popDiv = document.getElementById('popDiv');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');


const PopupService = (popUpBody, str, bool) => {
    popUpBody.setAttribute('class', str);
    document.getElementById('popDiv').appendChild(popUpBody);
    const wrapperFunc = (func) => {
        isCloseByClickOutside(bool);
        func();
    }
    return wrapperFunc;
}
const FormService = (str) => {
    const OnlyNumber = new RegExp('^[0-9]$')
    const emailValid = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')

    const isValid = () => {
        let bool = true;
        console.log(fname + lname + email +age)
        if (fname.length > 2){

        }
        else bool=false
        if (lname.length > 2){

        }
        else bool = false
        if (emailValid.test(email)){

        }
        else bool = false
        if (OnlyNumber.test(age)){

        }
        else bool = false
        console.log(bool)
        return bool;
    }
    const onSubmit = () => {

    }
    const onResetForm = () => {


    }
    if (isValid()){
        return onSubmit();
    }

}
const FormBody = document.createElement('div');
FormBody.setAttribute('class', 'form');
FormBody.innerHTML = "<form>" +
    "<label for='fname'>First name:</label><br>" +
    "<input type='text' id='fname' name='fname'><br>" +
    "<label for='lname'>Last name:</label><br>" +
    "<input type='text' id='lname' name='lname'><br>" +
    "<label for='fname'>Email:</label><br>" +
    "<input type='text' id='email' name='email'><br>" +
    "<label for='fname'>Age:</label><br>" +
    "<input type='text' id='age' name='age'><br>" +
    "<input type='submit'>" +
    "<input type=\"reset\">" +
    "</form>";

document.getElementById('startPage').appendChild(FormBody);
//form elements
const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const age = document.getElementById('age').value;

const Form = FormService("startPage");

const e1 = document.createElement('div');

e1.innerHTML = "<h1 style='color: aliceblue'>hello from the other side!</h1>" +
    "<img>";

gitPic("nirtuttnauer").then((avatar) => {
    e1.querySelector('img').src = avatar;
});

const pop = PopupService(e1, "juan", true);


startBtn.addEventListener('click', (e) => {
    pop(popOpen);
    e.stopPropagation();
});
stopBtn.addEventListener('click', (e) => {
    pop(popClose);
    e.stopPropagation();
});

async function gitPic(usr) {
    const response = await fetch('https://api.github.com/users/' + usr);
    const data = await response.json();
    console.log(response);
    const usrAvatar = data.avatar_url;
    console.log(usrAvatar);
    return usrAvatar;
}

const popOpen = () => {
    popDiv.style.display = 'flex';
}
const popClose = () => {
    popDiv.style.display = 'none';
}
const isCloseByClickOutside = (bool) => {
    if (bool) {
        popDiv.addEventListener('click', (e) => {
            // console.log(e);
            e.stopPropagation();
        })
        screen.addEventListener('click', (e) => {
            pop(popClose);
        })
    } else {
        screen.removeEventListener('click', (e) => {

        });
    }
}
