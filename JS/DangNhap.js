// ĐĂNG NHẬP
// Lấy form đăng nhập
const loginForm = document.getElementById('login');
const emailInput = loginForm.querySelector('input[type="text"]');
const passwordInput = loginForm.querySelector('input[type="password"]');

// Hàm validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Hàm validate mật khẩu
function validatePassword(password) {
    return password.length >= 6;
}

// Lắng nghe sự kiện submit form
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy giá trị từ input
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Kiểm tra không để trống
    if (!email || !password) {
        alert('⚠️ Vui lòng điền đầy đủ email và mật khẩu!');
        return;
    }

    // Kiểm tra email hợp lệ
    if (!validateEmail(email)) {
        alert('⚠️ Email không hợp lệ! Vui lòng nhập email đúng định dạng.');
        return;
    }

    // Kiểm tra mật khẩu đủ dài
    if (!validatePassword(password)) {
        alert('⚠️ Mật khẩu phải có ít nhất 6 ký tự!');
        return;
    }

    // Lấy danh sách người dùng từ Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Tìm người dùng với email/username và password khớp
    const user = users.find(u => (u.email === email || u.username === email) && u.password === password);

    if (user) {
        // Đăng nhập thành công
        alert('✅ Đăng nhập thành công! Chào mừng ' + user.fullname);
        
        // Lưu thông tin người dùng hiện tại
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Chuyển hướng về trang chủ
        window.location.href = '/index.html';
    } else {
        alert('❌ Email hoặc mật khẩu không đúng!');
    }

    // Xóa dữ liệu form
    loginForm.reset();
});

console.log('✅ DangNhap.js loaded');


