function initializeModal(modalID, buttonID, youtubeID) {
    // Get the modal element
    var modal = document.getElementById(modalID);

    // Get the button that opens the modal
    var btn = document.getElementById(buttonID);

    // Get the <span> element that closes the modal
    var span = modal.querySelector('.close');

    // Get the iframe element
    var iframe = document.getElementById(youtubeID);
    var iframeAttr = iframe.getAttribute("src");


    // When the user clicks on the button, open the modal
    btn.addEventListener('click', function () {
        modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', function () {
        modal.style.display = "none";
        iframe.removeAttribute("src");
        iframe.setAttribute("src", iframeAttr);
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

window.addEventListener('load', function () {
    initializeModal('danceModal1', 'linkDance1', 'youtube1');
    initializeModal('danceModal2', 'linkDance2', 'youtube2');
    initializeModal('danceModal3', 'linkDance3', 'youtube3');
    initializeModal('danceModal4', 'linkDance4', 'youtube4');
    initializeModal('danceModal5', 'linkDance5', 'youtube5');
    initializeModal('danceModal6', 'linkDance6', 'youtube6');
    initializeModal('danceModal7', 'linkDance7', 'youtube7');
    initializeModal('danceModal8', 'linkDance8', 'youtube8');
    initializeModal('danceModal9', 'linkDance9', 'youtube9');
    // initializeModal('danceModal10', 'linkDance10');
});