function DeleteRegMod() {
    /* Get all elements with class="close" */
    var closebtns = document.getElementsByClassName("delete-mod");
    var i;

    /* Loop through the elements, and hide the parent, when clicked on */
    for (i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
        });
    }
}

export default DeleteRegMod;