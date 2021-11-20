
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
 const username = loginInput.value;
console.log(username); 
};
/*click event -> loginButton*/ 
loginButton.addEventListener("click", onLoginBtnClick  );

