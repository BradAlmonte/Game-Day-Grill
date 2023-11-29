// script.js
document.addEventListener("DOMContentLoaded", function () {
    var dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("show");
        });
    });

    window.addEventListener("click", function (event) {
        if (!event.target.matches(".dropdown-btn")) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
                }
            }
        }
    });
});
