const toggleBtn = document.querySelector("#toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        toggleBtn.innerText = "Switch to light Mode";
    } else {
        toggleBtn.innerText = "Switch to dark mode";
    }
})
