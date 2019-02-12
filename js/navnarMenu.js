window.onload = function open() {

    var listItem;

    document.addEventListener('click', function (event) {
        var clickedEl = event.target;

        if (clickedEl.className === 'open') {
            listItem = clickedEl;
            listItem.classList.add('opened');
            event.stopPropagation();
        } else if (clickedEl != listItem) {
            listItem.classList.remove('opened');
            event.stopPropagation();
        }

    });



    // document.addEventListener('click', function (event) {
    //     var clickedEl = event.target;
    //     if (clickedEl.className === 'sub-menu') {
    //         listItem.classList.remove('opened');

    //     }

    // });

    // document.addEventListener('click', function (event) {
    //     var clickedEl = event.target;
    //     if (clickedEl != listItem) {
    //         listItem.classList.remove('opened');
    //         // event.stopPropagation();
    //     }

    // });

    // document.addEventListener('click', function (event) {
    //     var clickedEl = event.target;
    //     if (clickedEl.className === 'cls') {
    //         listItem.classList.remove('opened');
    //         // event.stopPropagation();
    //     }

    // });

}

// jQuery

// $(document).ready(function () {

//     $(document).delegate('.open', 'click', function (event) {

//         $(this).addClass('opened');

//         event.stopPropagation();

//     })

//     $(document).delegate('body', 'click', function (event) {

//         $('.open').removeClass('opened');

//     })

//     $(document).delegate('.cls', 'click', function (event) {

//         $('.open').removeClass('opened');

//         event.stopPropagation();

//     });

// });


