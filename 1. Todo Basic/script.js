function AddTodo() {
    const input = document.querySelector("input");
    let inputel = input.value.trim();

    if (inputel === "") {
        alert("Please enter something");
        return;
    }

    const todoList = document.querySelector("#todo-list");

    const li = document.createElement("li");

    // ✅ Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";

    // ✅ On checkbox click, toggle 'done' class
    checkbox.onchange = function () {
        if (checkbox.checked) {
            li.classList.add("done");
        } else {
            li.classList.remove("done");
        }
    };

    // ✅ Task text
    const span = document.createElement("span");
    span.innerText = inputel;

    // ✅ Delete button
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.style.marginLeft = "10px";
    btn.onclick = function () {
        todoList.removeChild(li);
    };

    // ✅ Add elements together
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);

    input.value = "";
}
