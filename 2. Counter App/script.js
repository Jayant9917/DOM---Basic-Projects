let count = 0;

const countEl = document.querySelector("#count");
const incrementBtn  = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");

incrementBtn.addEventListener("click", () => {
    count++;
    countEl.innerHTML = count;
    console.log(count);
});

decrementBtn.addEventListener("click", () => {
    count--;
    countEl.innerHTML = count;
    console.log(count);
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countEl.innerHTML = count;
    console.log(count);
});
