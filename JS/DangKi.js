// --- Đoạn code Đăng Ký cũ của bạn (Giữ nguyên) ---
document.getElementById('dangki').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Chúc mừng bạn đã đăng ký tài khoản thành công!');
    window.location.href = 'DangNhap.html'; 
});

// --- THÊM ĐOẠN CODE NÀY XUỐNG DƯỚI CÙNG ---
// Lắng nghe sự kiện khi người dùng click vào nút Quay Lại
document.getElementById('QuayLai').addEventListener('click', function() {
    // Tự động chuyển hướng về trang đăng nhập
    window.location.href = 'DangNhap.html';
});

