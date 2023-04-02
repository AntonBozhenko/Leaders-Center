const homeLink = document.getElementById('home');
const signinLink = document.getElementById('signin');
const signupLink = document.getElementById('signup');
const sugnupBtn = document.getElementById('btn_signup');

homeLink.addEventListener('click', goHome);

signinLink.addEventListener('click', signIn);

signupLink.addEventListener('click', signUp);
sugnupBtn.addEventListener('click', signUp);

window.addEventListener('submit', enter);
window.addEventListener('submit', register);
