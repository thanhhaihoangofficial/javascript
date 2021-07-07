function sum(){
    var a = parseInt(document.getElementById("so_a").value);
    var b = parseInt(document.getElementById("so_b").value);

    var kq = a + b;

    document.getElementById("kq").innerHTML = kq;
}

function displayDate(){
    document.getElementById("date").innerHTML = "Today is: " + Date();
}

function load(){
    document.getElementById("kq_cl").style.fontWeight = "bold";
    document.getElementById("kq").style.fontWeight = "bold";
    displayDate();
    timeUpdate();
}

function timeUpdate(){
    today = new Date();
    document.getElementById("curtime").innerHTML = (today.getHours().toString() + ":" + today.getMinutes() + ":" + today.getSeconds()).toString("hh:mm:ss");
    setTimeout(timeUpdate, 500);
}

function bgcolor_setlightgrey(){    
    if (document.getElementById("chkbpage").checked)
    {
        document.body.style.backgroundColor = "lightgrey";
    }
    document.getElementById("maunen").style.backgroundColor = "lightgrey";
}

function bgcolor_setcoral(){
    if (document.getElementById("chkbpage").checked)
    {
        document.body.style.backgroundColor = "coral";
    }
    document.getElementById("maunen").style.backgroundColor = "coral";
}

function bgcolor_setdefault(){
    document.body.style.backgroundColor = "white";
    document.getElementById("maunen").style.backgroundColor = "white";
}

function is_oddeven(){
    if (parseInt(document.getElementById("so_n").value) % 2 == 1)
    {
        document.getElementById("kq_cl").innerHTML = "lẻ";
    }    
    else
    {
        document.getElementById("kq_cl").innerHTML = "chẵn";
    }    
}

function dangky(){
    if (document.getElementById("mk_dn").value == document.getElementById("mknl_dn").value)
    {
        if (document.getElementById("sel_day").value == "Date"
        || document.getElementById("sel_month").value == "Month"
        || document.getElementById("sel_year").value == "Year")
        {
            document.getElementById("status").innerHTML = "Vui lòng chọn ngày tháng năm sinh";
        }
        else
        {
            document.getElementById("txt_hoten_kh").innerHTML = document.getElementById("hoten_kh").value;
            document.getElementById("txt_ten_dn").innerHTML = document.getElementById("ten_dn").value;
            document.getElementById("txt_mk_dn").innerHTML = document.getElementById("mk_dn").value;
            document.getElementById("txt_ngaysinh_kh").innerHTML = document.getElementById("sel_day").value
                                                                + "/" + document.getElementById("sel_month").value
                                                                + "/" + document.getElementById("sel_year").value;

            if (document.getElementById("gend_male").checked)
            {
                document.getElementById("txt_gioitinh_kh").innerHTML = "Nam";
            }
            else
            {
                document.getElementById("txt_gioitinh_kh").innerHTML = "Nữ";
            }
            
            document.getElementById("txt_email_kh").innerHTML = document.getElementById("email_kh").value;
            document.getElementById("txt_diachi_kh").innerHTML = document.getElementById("diachi_kh").value;
            document.getElementById("txt_sdt_kh").innerHTML = document.getElementById("sdt_kh").value;
        }
    }
    else
    {
        document.getElementById("status").innerHTML = "Mật khẩu nhập không chính xác";
    }
}

function tinhtong(){
    document.getElementById("so_ketqua").value = (parseFloat(document.getElementById("so_x").value) + parseFloat(document.getElementById("so_y").value)).toString();
    document.getElementById("pheptinhchon").innerHTML = "Tổng";
}

function tinhhieu(){
    document.getElementById("so_ketqua").value = (parseFloat(document.getElementById("so_x").value) - parseFloat(document.getElementById("so_y").value)).toString();
    document.getElementById("pheptinhchon").innerHTML = "Hiệu";
}

function tinhtich(){
    document.getElementById("so_ketqua").value = (parseFloat(document.getElementById("so_x").value) * parseFloat(document.getElementById("so_y").value)).toString();
    document.getElementById("pheptinhchon").innerHTML = "Tích";
}

function tinhchialaynguyen(){
    if (parseFloat(document.getElementById("so_y").value) == 0)
    {
        alert("Nhập y khác 0")
    }

    var x = parseInt(document.getElementById("so_x").value);
    var y = parseInt(document.getElementById("so_y").value);
    document.getElementById("so_ketqua").value = ((x - x % y) / y).toString();
    document.getElementById("pheptinhchon").innerHTML = "Chia lấy nguyên";
}

function tinhchialaydu(){
    if (parseFloat(document.getElementById("so_y").value) == 0)
    {
        alert("Nhập y khác 0")
    }
    document.getElementById("so_ketqua").value = (parseInt(document.getElementById("so_x").value) % parseInt(document.getElementById("so_y").value)).toString();
    document.getElementById("pheptinhchon").innerHTML = "Chia lấy dư";
}

function onfocus_txtboxten(){
    document.getElementById("txtboxten").style.backgroundColor = "yellow";
}

function onblur_txtboxten(){
    document.getElementById("txtboxten").style.backgroundColor = "red";
}

function tinhtuoi(){
    var date = new Date(document.getElementById("dateofb").value);
    var age =  new Date().getFullYear() - date.getFullYear();
    
    alert("Bạn đã " + age.toString() + " tuổi rồi.");
}

function onblur_ktrcophailaso(){
    if (isNaN(document.getElementById("txtso").value) || document.getElementById("txtso").value == ""){
        alert("Đây không phải là số");
    }
    else{
        alert("Đây là số");
    }
}

function ktrten(){
    if (document.getElementById("txttenkiemtra").value.toString().trim() == ""){
        alert("Vui lòng nhập tên");
    }
    else{
        alert("Xin chào bạn: " + document.getElementById("txttenkiemtra").value.toString().trim());
    }
}

function ktrso(){
    if (isNaN(document.getElementById("txtsokiemtra").value) || document.getElementById("txtsokiemtra").value == ""){
        alert("Dữ liệu phải là kiểu số");
    }
    else if (parseFloat(document.getElementById("txtsokiemtra").value) < 0 || parseFloat(document.getElementById("txtsokiemtra").value) > 10){
        alert("Số nhập vào phải nằm trong đoạn [0,10]");
    }   
    else{
        alert("Dữ liệu nhập vào hợp lệ");
    }
}

function ktrsdt(){
    if (isNaN(document.getElementById("txtsdtkiemtra").value) || document.getElementById("txtsdtkiemtra").value == ""){
        alert("Số điện thoại phải là kiểu số");
    }
    else if (document.getElementById("txtsdtkiemtra").value.length < 10 || document.getElementById("txtsdtkiemtra").value.length > 11){
        alert("Số điện thoại không hợp lệ");
    }   
    else{
        alert("Số điện thoại hợp lệ");
    }
}

function checkEmail() {
    var email = document.getElementById('emailktr');
    const regularExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regularExp.test(email.value)){
        document.getElementById("kqktremail").innerHTML="Hãy nhập địa chỉ email hợp lệ. Ví dụ: huongnl.bvu@gmail.com";
        email.focus();
    }
    else{
        document.getElementById("kqktremail").innerHTML="Địa chỉ email hợp lệ";
    }
}