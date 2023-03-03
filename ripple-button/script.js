const elBtn = document.querySelector(".btn");

elBtn.addEventListener("mouseover", (e) => {
    const x = e.pageX - elBtn.offsetLeft;
    const y = e.pageY - elBtn.offsetTop;

    elBtn.style.setProperty("--xPos", x + "px");
    elBtn.style.setProperty("--yPos", y + "px");
});
