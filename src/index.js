import './style.css'
import {FormService, onResetForm, onSubmit} from "./App/Forms"
import {popClose, PopupService} from "./App/Popup";


const popDiv = document.getElementById('popDiv');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

async function gitPic(usr) {
    const response = await fetch('https://api.github.com/users/' + usr);
    const data = await response.json();
    console.log(response);
    const usrAvatar = data.avatar_url;
    console.log(usrAvatar);
    return usrAvatar;
}

//pop body

gitPic("nirtuttnauer").then((avatar) => {
    e1.querySelector('img').src = avatar;
});
const e1 = document.createElement('div');
e1.innerHTML = "<h1 style='color: aliceblue'>Login Successful</h1><img>";

const pop = PopupService(e1, "juan", true);
const Form = FormService (onSubmit, "startPage");



stopBtn.addEventListener('click', (e) => {
    pop(popClose);
    e.stopPropagation();
});



document.getElementById('form-submit').addEventListener('click', (e) => {
    Form();
});
document.getElementById('form-reset').addEventListener('click', (e) => {
    onResetForm();
});