

let btn = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

let arrows = document.querySelectorAll(".arrow");
for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;

        arrowParent.classList.toggle("show");
    });
}


function iconmr() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');

    if (sidebar.classList.contains('close')) {
        mainContent.classList.remove('mr');
    } else {
        mainContent.classList.add('mr');
    }
}

function Changepassword() {
    var modal = new bootstrap.Modal(document.getElementById('changepassword'));
    modal.show();
}

function UpdatePassWord(password, callback) {
    var userId = sessionStorage.getItem("UserId");
    if (!userId) {
        console.error("UserId không tồn tại trong session.");
        return;
    }
    $.ajax({
        url: `https://localhost:44335/user/changepassword?id=${userId}&password=${password}`,
        method: 'POST',
        contentType: 'application/json',
        success: function (res) {
            if (callback && typeof callback === "function") {
                callback();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
            console.error('Response:', jqXHR.responseText);
        }
    });
}
