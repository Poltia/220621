
btn.onclick = function() {
    let regName = /^[a-zA-Z]{3,8}$/;
    let name = regName.test(_name.value);
    if (name == false) {alert("이름을 확인해주세요.")};

    let regPhone = /^010(?:\d{3}|\d{4})\d{4}$/;
    let phone = regPhone.test(_phone.value);
    if (phone == false) {alert("번호를 확인해주세요.")};

    let regMail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    let mail = regMail.test(_mail.value);
    if (mail == false) {alert("메일주소를 확인해주세요.")};

    if (name == true && phone == true && mail == true) {
        alert("Success")
    }
}