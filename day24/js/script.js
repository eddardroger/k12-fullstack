function submitForm() {
    let textEmail = document.getElementById('text-email').value;
    let textPassword = document.getElementById('text-password').value;
    let txtEmailError = document.getElementsByClassName('text-email-error')[0];
    let txtPasswordError = document.getElementsByClassName('text-password-error')[0];
    let error = false;

    if (textEmail.length === 0) {
        txtEmailError.innerHTML = '*Không được bỏ trống email';
        error = true;
    }
    if (textPassword.length === 0) {
        txtPasswordError.innerHTML = '*Không được bỏ trống password';
        error = true;
    }
    if (! textEmail.includes('@') && textEmail.length > 0) {
        txtEmailError.innerHTML = '*Email sai định dạng';
        error = true
    }
    if (textPassword.length > 0 && textPassword.length < 6) {
        txtPasswordError.innerHTML = '*Password phải lớn hơn 6 ký tự';
        error = true;
    }

    if (error === false) {
        txtEmailError.innerHTML = '';
        txtPasswordError.innerHTML = '';
        
        setTimeout(function() {
            alert('Đăng nhập thành công')
            window.location.assign('/day24/index.html')
        }, 1000); //setTimeout = đợi || 1000 = 1s; param1: function cần thực thi; param2: thời gian đợi
    }
}