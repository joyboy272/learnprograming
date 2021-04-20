window.addEventListener("scroll", function() {
    let header = document.getElementById("header");
    
    if (window.pageYOffset > 0) {
    header.classList.add("is-sticky");
    } else {
    header.classList.remove("is-sticky");
    }
    });
    