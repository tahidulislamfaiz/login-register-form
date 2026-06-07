let loginBtn=document.getElementById('loginbtn');
let registerBtn=document.getElementById('register-form');
let log=document.getElementById('log');
let reg=document.getElementById('reg');
let effect=document.querySelector('.effect-sw')
log.addEventListener('click',function(){
    loginBtn.style.left='50px';
    registerBtn.style.left='450px'
    effect.style.left='0px'
})
reg.addEventListener('click',function(){
    loginBtn.style.left='-400px';
    registerBtn.style.left='50px'
    effect.style.left='110px'
})