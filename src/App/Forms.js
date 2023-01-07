import {popClose, popOpen,} from "./Popup";


const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const age = document.getElementById('age');
const screen = document.getElementById('screenid');
const popDiv = document.getElementById('popDiv');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

export const FormService = (submit,str) => {




    const OnlyNumber = new RegExp(/^\d+$/)
    const emailValid = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')

    const isValid = () => {
        let bool = true;
        console.log(fname.value + lname.value + email.value + age.value)
        if (fname.value.length > 2) {
            fname.setAttribute('class','');

        } else {
            fname.setAttribute('class','error');
            bool = false
            // alert("first name problem")
        }
        if (lname.value.length > 2) {
            lname.setAttribute('class','');

        } else {
            lname.setAttribute('class','error');
            bool = false
            // alert("last name problem")
        }
        if (emailValid.test(email.value)) {
            email.setAttribute('class','');

        } else {
            email.setAttribute('class','error');
            bool = false
            // alert("email problem")
        }
        // console.log(age.value);
        if (OnlyNumber.test(age.value)) {
            age.setAttribute('class','');
        } else {
            age.setAttribute('class','error');
            bool = false
            // alert("age problem")
        }
        // console.log(bool)
        return bool;
    }

    // alert("hello from form")

    // if (isValid()) {
    const action = () => {
        if (isValid()){
            submit();
        }
        // else alert("try again")

    }
    return action
    // }

}
export const onSubmit = () => {
    alert("success")
    popOpen();
}
export const onResetForm = () => {
// alert("reset")
    fname.value = "";
    lname.value = "";
    age.value = "";
    email.value = "";
    fname.setAttribute('class','');
    lname.setAttribute('class','');
    age.setAttribute('class','');
    email.setAttribute('class','');
}
export const isCloseByClickOutside = (bool) => {
    const screen = document.getElementById('screenid');
    if (bool) {
        popDiv.addEventListener('click', (e) => {
            // console.log(e);
            e.stopPropagation();
        })
        screen.addEventListener('click', (e) => {
            popClose();
        })
    } else {
        screen.removeEventListener('click', (e) => {

        });
    }
}