let count = 1;
  // Deleting
  function deleteTodo(index){
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
  }
  // Adding 
  function addToDo(){
    const inputEle = document.querySelector("input");
    // fetching
    const value = inputEle.value;

    const newDivEle = document.createElement("div");
    newDivEle.setAttribute("id",count);
    // Updating
    newDivEle.innerHTML = "<div>" + value + '</div><button onclick = "deleteTodo('+ count +')">Delete</button>';

    document.querySelector("body").appendChild(newDivEle)
    count = count + 1;
  }




  // Add only the read and the button AddToDo functionality
//   function AddTodo(){
//     const value = document.querySelector("input").value;

//     const newDivEle = document.createElement("div");
//     newDivEle.innerHTML = value;
//     document.querySelector("body").appendChild(newDivEle);
//   }