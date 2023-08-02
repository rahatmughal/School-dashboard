const toggleButton = document.querySelector(".navbar-toggle");
const sidebar = document.querySelector(".sidebar");
const logo = document.querySelector("#logo");
const logoMini = document.querySelector("#logo-mini");
const sidebarHeading = document.querySelector(".sidebar-heading");
const listItemIcons = document.querySelectorAll(".list-item i");

let isSidebarHidden = false;

function toggleSidebar() {
    isSidebarHidden = !isSidebarHidden;
    sidebar.classList.toggle("sidebar-expanded", !isSidebarHidden);
    sidebar.classList.toggle("sidebar-collapsed", isSidebarHidden);
    logo.style.display = isSidebarHidden ? "none" : "block";
    logoMini.style.display = isSidebarHidden ? "block" : "none";

}

let isFrontOfficeOpen = false;

function toggleFrontOffice() {
    isFrontOfficeOpen = !isFrontOfficeOpen;
    const frontOfficeListItem = document.querySelector(".treeview");
    frontOfficeListItem.classList.toggle("front-office-open", isFrontOfficeOpen);
}




// user Profile
const userProfile = document.querySelector(".user-profile");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItems = dropdownMenu.querySelectorAll(".dropdown-item");

userProfile.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".top-box")) {
        dropdownMenu.classList.remove("show");
    }
});

dropdownItems.forEach(item => {
    item.addEventListener("click", function () {
        dropdownMenu.classList.remove("show");
    });
});