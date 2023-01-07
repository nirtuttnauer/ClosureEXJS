import {isCloseByClickOutside} from "./Forms";


const screen = document.getElementById('screenid');
const popDiv = document.getElementById('popDiv');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');


export const PopupService = (popUpBody, str, bool) => {

    popUpBody.setAttribute('class', str);
    document.getElementById('popDiv').appendChild(popUpBody);


    const wrapperFunc = (func) => {
        isCloseByClickOutside(bool);
        func();
    }
    return wrapperFunc;
}

export const popOpen = () => {
    popDiv.style.display = 'flex';
}
export const popClose = () => {
    popDiv.style.display = 'none';
}

