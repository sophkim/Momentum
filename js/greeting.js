//안내 문구

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string을 반복해서 사용해야 하는데 그것들이 무조건 같아야 할 때는 변수로 고정하고 복붙(실수를 만들고 싶지 않은 string)
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameThatTheUserWrote = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  paintGreetings(usernameThatTheUserWrote);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
