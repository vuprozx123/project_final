
// an vap dang ky
function toggleForm() {
    const registerModel = document.getElementById('register-model');
    const registerModal = document.getElementById('register-modal');

    if (registerModal.style.display === 'none' || registerModal.style.display === '') {
        registerModel.style.display = 'none';
        registerModal.style.display = 'flex';
    }
}


// an vao dang nhap
function toggleForms() {
    const registerModel = document.getElementById('register-model');
    const registerModal = document.getElementById('register-modal');


    if (registerModel.style.display === 'none' || registerModel.style.display === '') {
        registerModel.style.display = 'flex';
        registerModal.style.display = 'none';
    }
}

// an vao tao tai khoan
function toggleFormss() {
    var registerModel = document.getElementById('register-model');
    var registerModal = document.getElementById('register-modal');

    if (registerModel.style.display === 'none' || registerModel.style.display === '') {
        registerModel.style.display = 'flex';
        registerModal.style.display = 'none';
    }
}


function Validator(options) {

    const formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(rule => {
            const inputElement = formElement.querySelector(rule.selector);

            inputElement.onblur = () => {
                const errorMessage = rule.test(inputElement.value);
                if (errorMessage) {
                    inputElement.parentElement.querySelector('.form-message').innerText = errorMessage;
                }
            }
        });
    }
}

Validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value ? undefined : message;
        }
    }

}

Validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (value === '') {
                return 'Email là trường bắt buộc';
            }

            if (regex.test(value)) {
                return undefined;
            }
            return 'Email không hợp lệ';
        }
    }
}

Validator.minLength = (selector, min) => {
    return {
        selector: selector,
        test: (value) => {
            if (value === '') {
                return 'Mật khẩu là trường bắt buộc';
            } else {
                return value.length >= min ? undefined : `Mật khẩu phai it nhat  ${min} ky tu`;
            }
        }
    }
}

function register() {
    var username = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('password-again').value;

    if (password !== confirmPassword) {
        alert('Xác nhận mật khẩu không khớp.');
        return;
    }

    // Lưu thông tin đăng ký vào Local Storage
    localStorage.setItem('fullname', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    if (username === '' || email === '', password === '', confirmPassword === '') {
        alert('Phải nhập đầy đủ thông tin');
    }
    else {
        alert('Đăng kí thành công');
    }
}


function login() {
    var loginUsername = document.getElementById('inputname').value;
    var loginPassword = document.getElementById('inputpassword').value;

    // Lấy thông tin đăng ký từ Local Storage
    var storedUsername = localStorage.getItem('fullname');
    // var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    // Kiểm tra thông tin đăng nhập
    if ((loginUsername === storedUsername) && (loginPassword === storedPassword)) {
        alert('Đăng nhập thành công!');
    } else if (loginUsername === '' && loginPassword === '') {
        alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
    }
    else {
        alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
    }
}


// thay doi ngon ngu
function changeLanguage(lang) {
    const translations = {
        'en': {
            'abc': 'Sign up',
            'abd': 'Login',
            'abe': 'Sign up',
            'abf': 'Login',
            'abg': 'Forgot Password',
            'abh': 'Create account',
            'menu': 'Menu',
            'language': 'Language',
            'money': 'Diary',
            'transaction': 'My wallet',
            'bank': 'Money',
            'recommend': 'Introduce',
            'setting': 'Setting',
            'event': 'Conect-bank',
            'VND': 'VND to USD',
            'USD': 'USD to VND',
            'des': 'Description',
            'pay-money': 'Spend money',
            'day-spend-money': 'Day',
            'save-money': 'Save',
            'monthyear': 'Select month',
            'button-convert': 'Convert',
            'add-expense': 'Add expense',
            'am-money': 'Amount',
            'transaction': 'Chart',
            'placeholders': {
                'fullname': 'Fullname',
                'email': 'Email',
                'password': 'Password',
                'password-again': 'Password again',
                'inputname': 'User name',
                'inputpassword': 'Password',
                'header-search': 'Search',
                'amount': 'Enter amount',
                'a-money': 'Enter-amount',
            }
        },
        'vi': {
            'abc': 'Đăng ký',
            'abd': 'Đăng nhập',
            'abe': 'ĐĂNG KÝ',
            'abf': 'ĐĂNG NHẬP',
            'abg': 'Quên mật khẩu',
            'abh': 'Tạo tài khoản',
            'menu': 'Danh mục',
            'language': 'Ngôn ngữ',
            'money': 'Nhật kí',
            'bank': 'Tiền tệ',
            'recommend': 'Giới thiệu',
            'setting': 'Cài đặt',
            'event': 'Liên kết ngân hàng',
            'VND': 'VND sang USD',
            'USD': 'USD sang VND',
            'des': 'Mô tả',
            'pay-money': 'Số tiền chi tiêu',
            'day-spend-money': 'Ngày chi tiêu',
            'save-money': 'Lưu chi tiêu',
            'monthyear': 'Chọn tháng',
            'button-convert': 'Chuyển thành',
            'add-expense': 'Thêm khoảng chi tiêu',
            'am-money': 'Giá tiền',
            'transaction': 'Biểu đồ tháng',
            'placeholders': {
                'fullname': 'Họ và tên',
                'email': 'Email',
                'password': 'Mật khẩu',
                'password-again': 'Nhập lại mật khẩu',
                'inputname': 'Tên đăng nhập',
                'inputpassword': 'Mật khẩu',
                'header-search': 'Tìm kiếm',
                'amount': 'Nhập số tiền',
                'a-money': 'Nhập giá tiền',
            }


        }
    };

    document.getElementById('abc').innerText = translations[lang]['abc'];
    document.getElementById('abd').innerText = translations[lang]['abd'];
    document.getElementById('abe').innerText = translations[lang]['abe'];
    document.getElementById('abf').innerText = translations[lang]['abf'];
    document.getElementById('abg').innerText = translations[lang]['abg'];
    document.getElementById('abh').innerText = translations[lang]['abh'];
    document.getElementById('menu').innerText = translations[lang]['menu'];
    document.getElementById('money').innerText = translations[lang]['money'];
    document.getElementById('transaction').innerText = translations[lang]['transaction'];
    document.getElementById('bank').innerText = translations[lang]['bank'];
    document.getElementById('event').innerText = translations[lang]['event'];
    document.getElementById('recommend').innerText = translations[lang]['recommend'];
    document.getElementById('setting').innerText = translations[lang]['setting'];
    document.getElementById('language').innerText = translations[lang]['language'];
    document.getElementById('monthyear').innerText = translations[lang]['monthyear'];
    document.getElementById('button-convert').innerText = translations[lang]['button-convert'];
    document.getElementById('VND').innerText = translations[lang]['VND'];
    document.getElementById('USD').innerText = translations[lang]['USD'];
    document.getElementById('des').innerText = translations[lang]['des'];
    document.getElementById('pay-money').innerText = translations[lang]['pay-money'];
    document.getElementById('day-spend-money').innerText = translations[lang]['day-spend-money'];
    document.getElementById('save-money').innerText = translations[lang]['save-money'];
    document.getElementById('am-money').innerText = translations[lang]['am-money'];
    document.getElementById('a-money').innerText = translations[lang]['a-money'];
    document.getElementById('add-expense').innerText = translations[lang]['add-expense'];
    const placeholders = translations[lang]['placeholders'];
    Object.keys(placeholders).forEach(id => {
        document.getElementById(id).placeholder = placeholders[id];
    });

}


let isLanguageVisible = false;

function Language() {
    const formLanguage = document.querySelector('.category-list-item-active');
    isLanguageVisible = true; // Đảo ngược trạng thái
    formLanguage.style.display = isLanguageVisible ? 'block' : 'none';
}


// chuyen doi don vi tien te
function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;
    var resultElement = document.getElementById('result');
    var exchangeRate = 23000
    if (currency === 'vnd') {
        var usdAmount = amount / exchangeRate;
        resultElement.innerHTML = usdAmount.toFixed(2) + ' USD';
    } else {
        var vndAmount = amount * exchangeRate;
        resultElement.innerHTML = vndAmount + ' VND';
    }
}

function openChangeMoney() {
    const Money = document.getElementById('converter');

    if (Money) {
        Money.style.display = 'block';
    }
}




// chi tieu hang ngay(user 5)
function saveExpense() {
    // Lấy giá trị từ các trường nhập liệu
    var amount = document.getElementById('spend-money').value;
    var description = document.getElementById('description').value;
    var date = document.getElementById('date').value;


    if (description === '' || amount === '' || date === '') {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return; // Dừng lại nếu  nhập đầy đủ thông tin
    }


    // Kiểm tra xem local storage có sẵn không
    if (localStorage.getItem('expensess') === null) {
        // Nếu chưa có, tạo một mảng mới để lưu trữ các chi tiêu
        var expensess = [];
    } else {
        // Nếu có, lấy mảng hiện tại từ local storage
        var expensess = JSON.parse(localStorage.getItem('expensess'));
    }

    // Thêm chi tiêu mới vào mảng
    expensess.push({
        amount: amount,
        description: description,
        date: date
    });

    // Lưu mảng mới vào local storage
    localStorage.setItem('expensess', JSON.stringify(expensess));

    //Xóa nội dung của các trường nhập liệu
    document.getElementById('spend-money').value = '';
    document.getElementById('description').value = '';
    document.getElementById('date').value = '';

    alert('Chi tiêu đã được lưu thành công!');


    // Hiển thị danh sách chi tiêu
    displayExpenses();

}

function displayExpenses() {
    var expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    // Lấy mảng chi tiêu từ local storage
    var expenses = JSON.parse(localStorage.getItem('expensess'));

    if (expenses) {
        // Hiển thị danh sách chi tiêu
        for (var i = 0; i < expenses.length; i++) {
            var expenseItem = document.createElement('div');
            expenseItem.innerHTML = '<strong>Mô tả:</strong> ' + expenses[i].description + ', <strong>Số tiền:</strong> ' + expenses[i].amount + ', <strong>Ngày:</strong> ' + expenses[i].date;
            expenseList.appendChild(expenseItem);
        }
    }
}

// xoa du lieu trong local storage
localStorage.removeItem('expenses');

function SpendMoney() {
    const pay = document.getElementById('expenseForm');
    if (pay) {
        pay.style.display = 'block';
    }
}




//bieu do(user 6)
// Lấy dữ liệu từ localStorage nếu có, nếu không, sử dụng một đối tượng trống
var financialData = JSON.parse(localStorage.getItem('financialData')) || {};

function updateChart() {
    var selectedMonth = document.getElementById('month').value;
    var ctx = document.getElementById('myChart').getContext('2d');

    var data = {
        labels: Object.keys(financialData),
        datasets: [{
            label: 'Tổng tiền',
            data: Object.values(financialData),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function addExpense() {
    var selectedMonth = document.getElementById('month').value;
    var amount = document.getElementById('a-money').value;

    if (!financialData[selectedMonth]) {
        financialData[selectedMonth] = parseInt(amount);
    } else {
        financialData[selectedMonth] += parseInt(amount);
    }

    // Lưu dữ liệu vào localStorage
    localStorage.setItem('financialData', JSON.stringify(financialData));

    updateChart();
}

window.onload = updateChart;


function openAmount() {
    const Amount = document.getElementById('expense-form');

    if (Amount) {
        Amount.style.display = 'block';
    }
}


// user8 
function kiemTraChiTieu() {
    var thuNhap = parseFloat(document.getElementById("thu-nhap").value);
    var mucGioiHan = parseFloat(document.getElementById("muc-gioi-han").value);
    var chiTieu = parseFloat(document.getElementById("chi-tieu").value);

    if (thuNhap >= mucGioiHan && chiTieu >= mucGioiHan) {
        hienThiCanhBao("Cảnh báo: Cả thu nhập và chi tiêu đều vượt quá mức giới hạn!");
    } else if (thuNhap >= mucGioiHan) {
        hienThiCanhBao("Cảnh báo: Thu nhập vượt quá mức giới hạn!");
    } else if (chiTieu >= mucGioiHan) {
        hienThiCanhBao("Cảnh báo: Chi tiêu vượt quá mức giới hạn!");
    } else {
        hienThiCanhBao("Chi tiêu trong khoảng cho phép.");
    }
}

function hienThiCanhBao(thongBao) {
    document.getElementById("warning").innerHTML = thongBao;
}

function openKtra() {
    var registerKtra = document.querySelector('.quan-ly');

    if (registerKtra) {
        registerKtra.style.display = 'block';
    }
}





// user 9
document.getElementById('tinhtoan').addEventListener('click', function () {
    // Lấy giá trị từ các trường input
    const tenduan = document.getElementById('tenduan').value;
    const thoigian = parseFloat(document.getElementById('thoigian').value);
    const tienmb = parseFloat(document.getElementById('tienmatbang').value);
    const slnhanvien = parseFloat(document.getElementById('soluongnv').value);
    const tienluong = parseFloat(document.getElementById('tienluong').value);
    const tientrangtb = parseFloat(document.getElementById('tientrangthietbi').value);
    const tiennguyenlieu = parseFloat(document.getElementById('tiennguyenlieu').value);
    const tienquangcao = parseFloat(document.getElementById('tienquangcao').value);
    const tiendoanhthu = parseFloat(document.getElementById('tiendoanhthu').value);

    // Kiểm tra xem có trường nào không được nhập không
    if (
        tenduan === '' || isNaN(tienmb) || isNaN(slnhanvien) ||
        isNaN(tienluong) || isNaN(tientrangtb) || isNaN(tiennguyenlieu) || isNaN(tienquangcao) || isNaN(tiendoanhthu) || isNaN(thoigian)
    ) {
        alert('Vui lòng nhập đầy đủ thông tin và giá trị số hợp lệ');
        return; // Dừng tính toán nếu có trường không được nhập
    } else {
        // Tính toán lợi nhuận hoặc lỗ
        const sovon = tienmb * thoigian + tienluong * slnhanvien + tientrangtb + tiennguyenlieu * thoigian + tienquangcao * thoigian;
        const loinhuan = tiendoanhthu * thoigian; // Bạn cần tính toán lợi nhuận ở đây
        const a = loinhuan - sovon;


        // Hiển thị thông tin đã nhập dưới dạng bảng
        const ketquaData = document.getElementById('ketqua-data');
        ketquaData.innerHTML = `
        <tr><td>Tên dự án</td><td>${tenduan}</td></tr>
        <tr><td>Thời gian kéo dài dự án</td><td>${thoigian} tháng</td></tr>
        <tr><td>Tiền mặt bằng</td><td>${tienmb} VNĐ/1 tháng</td></tr>
        <tr><td>Số lượng nhân viên</td><td>${slnhanvien} người</td></tr>
        <tr><td>Tiền lương</td><td>${tienluong} VNĐ/1 người</td></tr>
        <tr><td>Tiền trang thiết bị</td><td>${tientrangtb} VNĐ</td></tr>
        <tr><td>Tiền nguyên liệu</td><td>${tiennguyenlieu} VNĐ/1 tháng</td></tr>
        <tr><td>Tiền quảng cáo</td><td>${tienquangcao} VNĐ/1 tháng</td></tr>
        <tr><td>Tổng số vốn bỏ ra</td><td>${sovon} VNĐ</td></tr>
        <tr><td>Tiền doanh thu dự kiến</td><td>${tiendoanhthu} VND/1 tháng</td></tr>
        <tr><td>Lợi nhuận | Lỗ | Hòa vốn</td><td>${loinhuan > sovon
                ? `<span style="color:green;">Dự án có lãi ${a} VNĐ</span>`
                : loinhuan < sovon
                    ? `<span style="color:red;">Dự án bị thua lỗ ! ${Math.abs(a)} VNĐ</span>`
                    : `<span style="color:green;">Dự án hòa vốn ${a} VNĐ</span>`
            }</td></tr>
    `;

        // Hiển thị kết quả và ẩn form nhập thông tin
        document.getElementById('project-form').querySelector('form').style.display = 'none';
        document.getElementById('ketqua').style.display = 'block';
    }
});

function openDeadline() {
    var registerDeadline = document.getElementById('project-form');

    if (registerDeadline) {
        registerDeadline.style.display = 'block';
    }
}



// user 10
function openChart() {
    var registerChart = document.getElementById('waterfall-chart');

    if (registerChart) {
        registerChart.style.display = 'block';
    }
}



function openSJ() {
    var registerSJ = document.querySelector('.SIX-Jars');

    if (registerSJ) {
        registerSJ.style.display = 'block';
    }
}


function openS() {
    var registerS = document.querySelector('.soul-mate');

    if (registerS) {
        registerS.style.display = 'block';
    }
}


function openHiw() {
    var registerH = document.querySelector('.the-hiw');

    if (registerH) {
        registerH.style.display = 'block';
    }
}


function openMethod() {
    var registerM = document.querySelector('.category-list-item-active-method');

    if (registerM) {
        registerM.style.display = 'block';
    }
}













