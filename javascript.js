document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".post");

    posts.forEach((post) => {
        const popup = post.querySelector(".popup");
        let popupTimer;

        post.addEventListener("mouseover", function () {
            clearTimeout(popupTimer);
            popup.style.display = "block";
        });

        post.addEventListener("mouseout", function () {
            popupTimer = setTimeout(function () {
                popup.style.display = "none";
            }, 3000);
        });
    });
});

