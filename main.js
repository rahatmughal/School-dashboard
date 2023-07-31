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
