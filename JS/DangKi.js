// Lấy form đăng ký
const registerForm = document.getElementById('dangki');
const fullnameInput = registerForm.querySelector('input[type="text"]');
const emailInput = registerForm.querySelector('input[type="email"]');
const passwordInput = registerForm.querySelectorAll('input[type="password"]')[0];
const confirmPasswordInput = registerForm.querySelectorAll('input[type="password"]')[1];
const backBtn = document.getElementById('QuayLai');

// Hàm validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Hàm validate tên
function validateFullname(name) {
    return name.length >= 3;
}

// Hàm validate mật khẩu
function validatePassword(password) {
    return password.length >= 6;
}

// Nút quay lại
backBtn.addEventListener('click', function() {
    if (confirm('Bạn có chắc muốn quay lại? Dữ liệu chưa lưu sẽ bị mất.')) {
        window.location.href = 'DangNhap.html';
    }
});

// Lắng nghe sự kiện submit form đăng ký
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy giá trị từ input
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Kiểm tra không để trống
    if (!fullname || !email || !password || !confirmPassword) {
        alert('⚠️ Vui lòng điền đầy đủ tất cả thông tin!');
        return;
    }

    // Kiểm tra tên đủ dài
    if (!validateFullname(fullname)) {
        alert('⚠️ Tên phải có ít nhất 3 ký tự!');
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

    // Kiểm tra confirm password khớp
    if (password !== confirmPassword) {
        alert('❌ Mật khẩu xác nhận không khớp!');
        return;
    }

    // Lấy danh sách người dùng từ Local Storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra email đã tồn tại chưa
    const userExists = users.find(u => u.email === email);
    if (userExists) {
        alert('❌ Email này đã được đăng ký! Vui lòng sử dụng email khác.');
        return;
    }

    // Tạo object người dùng mới
    const newUser = {
        id: Date.now(), 
        fullname: fullname,
        email: email,
        username: email.split('@')[0], 
        password: password,
        registerDate: new Date().toLocaleString()
    };

    // Thêm người dùng mới vào mảng
    users.push(newUser);

    // Lưu danh sách người dùng vào Local Storage
    localStorage.setItem('users', JSON.stringify(users));

    // Hiển thị thông báo thành công
    alert('✅ Đăng ký tài khoản thành công!\n\nBạn có thể đăng nhập ngay bây giờ.');

    // Xóa dữ liệu form
    registerForm.reset();

    // Chuyển hướng về trang đăng nhập
    window.location.href = 'DangNhap.html';
});

console.log('✅ DangKi.js loaded');


