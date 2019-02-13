function rotate() {

    var imgArray = ['imgTutorial1', 'imgTutorial2', 'imgTutorial3', 'imgTutorial4', 'imgTutorial5', 'imgTutorial6', 'imgTutorial7', 'imgTutorial8', 'imgTutorial9'];

    imgArray.forEach(getElements);

    function getElements(value, index, array) {
        var imgId = document.getElementById(value);
        imgId.addEventListener('click', function () {
            if (this.getAttribute("class") == "imgTutorialDiv chg") {
                this.setAttribute("class", "imgTutorialDiv");
            } else {
                this.setAttribute("class", "imgTutorialDiv chg");
            }
        });
    }
};

window.addEventListener('load', function () {
    rotate();
});