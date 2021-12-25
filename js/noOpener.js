const links = document.querySelectorAll("a");
for (let a of links) {
    if (a.hasAttribute("target") && a.getAttribute("target") === "_blank") {
        a.setAttribute("rel", "noopener");
    }
}