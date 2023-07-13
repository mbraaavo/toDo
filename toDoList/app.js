const addButton = document.querySelector(".add_button");
const toDoList = document.querySelector(".to_do_list");

addButton.addEventListener("click", function(e){
    var userInputField = document.querySelector(".user_input");
    var userInput = userInputField.value;
    if (userInput === ""){
        userInputField.placeholder = "You'll need to enter something here"
    }
    else{
        toDoList.insertAdjacentHTML("beforeend", ` <li class="to_do">
        ${userInput} <button class="remove_button">X</button> </li>`);
    
        var toDo = document.querySelectorAll(".to_do");
        
        if(toDo.length <= 4){
            userInputField.placeholder = "Did you think of something else?";
        }
        else{
            userInputField.placeholder = "Whoa. You got a lot on your hands today...";
        }

        toDo.forEach(function(e){
            e.addEventListener("click", function(e){
                const item = e.target;
                //delete todo 
                if(item.classList[0] === "remove_button"){
                    const todo = item.parentElement;
                    todo.remove();
                }
            });
        });
    
        userInputField.value = "";
    }
    
});



