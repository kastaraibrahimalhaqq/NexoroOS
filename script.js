function copyHash() {
    const hash = document.getElementById("hash").innerText;

    navigator.clipboard.writeText(hash);

    alert("SHA-256 berhasil disalin.");
}


const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀";
        document.body.style.background = "#f4f5f7";
        document.body.style.color = "#111";
    } else {
        themeButton.textContent = "☾";
        document.body.style.background = "#07090d";
        document.body.style.color = "#fff";
    }
});