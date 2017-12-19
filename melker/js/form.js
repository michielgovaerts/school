/*var form = document.getElementById("form");
form.addEventListener('submit', contact, false);

function contact() {
    var subject = encodeURIComponent(document.getElementById("subject").value);
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var content = "name:" + name + "\nemail:" + email + "\nmessage:" + message + "\n";

    var contactByTel = document.getElementById("contacttel").checked;
    if (contactByTel == true) {
        content += '\nPlease contact by telephone';
    }
    var contactByMail = document.getElementById("contactmail").checked;
    if (contactByMail == true) {
        content += "\nPlease contact by email";
    }

    var typeOfSubject = document.getElementById("typeofsubject").value;
    content += "\n\nType of subject: " + typeOfSubject;

    form.action = "mailto:ohprofit@gmail.com?subject=" + subject + "&body=" + encodeURIComponent(content);
}
*/


function setField() {
    document.getElementById('anderOnderwerp').style.backgroundColor = "#FFF";
    document.getElementById('anderOnderwerp').readOnly = false;
}

function resetField() {
    document.getElementById('anderOnderwerp').style.backgroundColor = "#808080";
    document.getElementById('anderOnderwerp').readOnly = true;
    document.getElementById('anderOnderwerp').value = '';
}
