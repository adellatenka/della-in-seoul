document.addEventListener('DOMContentLoaded', function () {
    var elements = document.getElementsByClassName("gallery-img");

    for (var i = 0; i < elements.length; i++) {
        // double-click triggers color overlay (simulates like)
        elements[i].addEventListener("dblclick", function () {
            var overlay = this.querySelector(".like-overlay");
            overlay.classList.add("liked");

            setTimeout(function () {
                overlay.classList.remove("liked");
            }, 500);
        });

        elements[i].addEventListener('keydown', function (event) {
            // enter key triggers the same effect for keyboard accessibility
            if (event.key === 'Enter') { 
                var overlay = this.querySelector(".like-overlay");
                overlay.classList.add("liked");
    
                setTimeout(function () {
                    overlay.classList.remove("liked");
                }, 500);
            }
        });

    }
});

