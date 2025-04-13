const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const registerBtn = document.getElementById('register-btn');

loginBtn.addEventListener('click', function () {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (username === '' || password === '') {
        alert('请输入用户名和密码');
        return;
    }
    window.location.href = 'index.html';
});

registerBtn.addEventListener('click', function () {
    window.location.href = 'register.html';
});