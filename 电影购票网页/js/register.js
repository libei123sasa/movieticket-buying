const usernameInput = document.getElementById('username');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const maleRadio = document.getElementById('male');
const femaleRadio = document.getElementById('female');
const hobbiesCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const submitBtn = document.getElementById('submit-btn');
const backLoginBtn = document.getElementById('back-login-btn');

function validateUsername() {
    const username = usernameInput.value.trim();
    if (username === '') {
        alert('用户名不能为空');
        return false;
    }
    return true;
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    if (phone === '') {
        alert('电话号码不能为空');
        return false;
    }
   
    return true;
}

function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (password === '') {
        alert('密码不能为空');
        return false;
    }
    if (password.length < 6) {
        alert('密码长度至少为6位');
        return false;
    }
    if (password!== confirmPassword) {
        alert('两次输入的密码不一致');
        return false;
    }
    return true;
}

function validateSex() {
    if (!maleRadio.checked &&!femaleRadio.checked) {
        alert('请选择性别');
        return false;
    }
    return true;
}

function validateHobbies() {
    let hasChecked = false;
    hobbiesCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            hasChecked = true;
        }
    });
    if (!hasChecked) {
        alert('请至少选择一个爱好');
        return false;
    }
    return true;
}

submitBtn.addEventListener('click', function () {
    if (validateUsername() && validatePhone() && validatePassword() && validateSex() && validateHobbies()) {
        alert('提交成功');
        console.log('表单验证通过，可以提交数据了');
        const formData = {
            username: usernameInput.value,
            phone: phoneInput.value,
            password: passwordInput.value,
            sex: maleRadio.checked? '男' : '女',
            hobbies: []
        };
        hobbiesCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                formData.hobbies.push(checkbox.value);
            }
        });
        console.log(formData);
    }
});

backLoginBtn.addEventListener('click', function () {
    window.location.href = 'login.html';
});