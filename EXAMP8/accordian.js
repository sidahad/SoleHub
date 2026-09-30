document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", function() {
            const icon = header.querySelector(".icon");
            const content = header.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 20px 0 20px";
                icon.classList.remove("open");
            } else {
                headers.forEach(h => {
                    const c = h.nextElementSibling;
                    const i = h.querySelector(".icon");
                    c.style.maxHeight = null;
                    c.style.padding = "0 20px 0 20px";
                    i.classList.remove("open");
                });
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "20px";
                icon.classList.add("open");
            }
        });
    });
});