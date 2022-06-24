submit.onclick = function() {
    let el_name = document.createElement("li");
    el_name.innerHTML = _name.value;
    el_name.className = "list";

    let el_work = document.createElement("li");
    el_work.innerHTML = work.value;
    el_work.className = "list";

    ol_name.appendChild(el_name);
    ol_work.appendChild(el_work);
}

_switch.onclick = function() {
    if(!_box.classList.contains("button_switch")) {
        _box.classList.add("button_switch");
    }
    else{
        _box.classList.remove("button_switch");
    }
}