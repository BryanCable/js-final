

    // variables
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    let btn = document.getElementById("btn");
    let list = document.getElementById("list");

    

    // event listener for btn
    btn.addEventListener("click", function() {
        if(input.value === "") {
            alert("You must enter a task")
        }
        else {
        let value = input.value
        let newLi =
        `
        <li>
            <input type="checkbox">
            <p>${value}</p>
            <i class="edit-icon"></i>
            <i class="fa-trash-alt"></i>
        </li>
        `
        var li = document.createElement("li");
        li.innerHTML = newLi;
        // li.appendChild(document.createTextNode(newLi));
        list.appendChild(li);
        }
        
        
        })

    // add todo item to list

