const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();    //이벤트를 금지시킴
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);  //텍스트를 칠할경우 classList 안보이게 처리
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){   //이름이 없는경우
        askForName();
    }else{  //잇는경우
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}
init();