function hide(user_id) {
    var user = document.querySelector(user_id);
    user.remove();
}

function rename(id) {
    var element = document.querySelector(id);
    element.innerText = "Jane Monroe";
}
