const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',  e=> { 
    e.preventDefault();
    validateInput();
});
const setError =(Element,message) =>{
    const inputControl = Element.parentelement;
    const errorDisplay = inputControl.queryselector('.error');
    errorDisplay.innertext = message;
    inputControl.classlist.add('error');
    inputControl.classlist.remove('success');
}
const setsuccess = Element => {
    const inputControl = Element.parentelement;
    const errorDisplay = inputControl.queryselector('.error');
    errorDisplay = innertext = '';
    inputControl.classlist.add('success');
    inputControl.classlist.remove('error');
};
const validateInput = ()=>{
    const usernamevalue =u sername.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
};
if (usernamevalue === '') {
    setError(username, 'required');
}else{
    setsuccess(username);
}
if (emailvalue === '') {
    setError(email, 'required');
}else if(!isvalidemail(emailvalue)) {
    setError(email, 'provide a valid email address');
}else{
    setsuccess(email);
}

if (password === '') {
    setError(password, 'password is required');
}else if(passwordvalue.length <8) {
    setError(password, 'password word most be atleat 8 character.');
}else{
    setsuccess(password);
}
if (password2 === '') {
    setError(password2,'comfirm your password is required');
}else if(password2value!==passwordvalue) {
    setError(password, "password2 doesnt not match");
}else{
    setsuccess(password2);
}