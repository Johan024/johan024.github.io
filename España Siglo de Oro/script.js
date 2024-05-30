document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.ver-biografia');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var target = document.querySelector(button.getAttribute('data-target'));
            if (target.classList.contains('show')) {
                target.classList.remove('show');
            } else {
                document.querySelectorAll('.collapse.show').forEach(function (el) {
                    el.classList.remove('show');
                });
                target.classList.add('show');
            }
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById("horizontalMenu");
    menu.classList.toggle("active");
}