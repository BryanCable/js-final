
window.onload = function () {
    // variables
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    let btn = document.getElementById("btn");
    let list = document.getElementById("list");

    // event listener for btn
    btn.addEventListener("click", function() {
        let value = ('item').value
        conole.log(value);
        if(input.value === "") {
            alert("You must enter a task")
        }
        
        });

    // add todo item to list
    
}