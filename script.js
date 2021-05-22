let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");



button.addEventListener("click", function (e) {

    let todoList = document.createElement("li");
    let cancelButton = document.createElement("button");
    cancelButton.innerText = "X";
    cancelButton.classList.add("buttonLi")

    todoList.append(input.value);
    todoList.append(cancelButton)

    ul.appendChild(todoList);



    cancelButton.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.parentElement.remove();

    })


})


ul.addEventListener("click", function (e) {

    let colorOn = "rgb(14, 204, 24)";
    let colorOff = "rgb(130, 216, 219)";

    if (e.target.nodeName == "LI") {
        let li = e.target.style;

        if (li.backgroundColor === colorOn) {
            li.backgroundColor = colorOff;
        }
        else {

            li.backgroundColor = colorOn;
        }
        console.dir(e.target);

    }




})

/*



*/