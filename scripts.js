/*
    Book Program Discussion.
    Developed by Shrey Tailor.
*/

/**
 * This function is used to locate the modal element, and present it on the viewport.
 * @param {*} event - button click event.
 */
function openModal(event) {
    let modal = document.getElementById("myModal");
    modal.style.display = "flex";

    // Focussing on the first textbox of the form, when it opens.
    modal.querySelector("input").focus();

    // Changing the tabIndex of all background elements to -1.
    let buttons = document.querySelectorAll(".clickable");
    buttons.forEach(function(button) {
        button.tabIndex = -1;
    })
}

/**
 * This function is used to close the modal element.
 * @param {*} event - button click event.
 */
function closeModal(event) {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";

    // Changing the tabIndex of all homepage elements to 0 (default).
    let buttons = document.querySelectorAll(".clickable");
    buttons.forEach(function(button) {
        button.tabIndex = 0;
    })
}

let btnRegisterNow = document.getElementById("trigger-modal");
btnRegisterNow.addEventListener("click", openModal);

let btnCloseModal = document.getElementById("close-modal");
btnCloseModal.addEventListener("click", closeModal);