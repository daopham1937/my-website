// Lắng nghe sự kiện khi người dùng bấm nút Đăng Nhập (Submit Form)
document.getElementById('login').addEventListener('submit', function(event) {
    
    // Ngăn không cho trang web tự động tải lại (reload)
    event.preventDefault(); 

    // Hiện hộp thoại thông báo đăng nhập thành công
    alert(' Đăng nhập thành công!');
    
    // (Tùy chọn) Sau khi ấn OK trên thông báo, bạn muốn web nhảy đi đâu thì mở dòng dưới ra nhé:
    // window.location.href = '../TrangChu/index.html';
    window.location.href = '../HTML/TrangChu.html';
});

