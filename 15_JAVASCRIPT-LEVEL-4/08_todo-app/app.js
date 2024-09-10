let todoTasks = [];

let req = prompt("Enter your request");

while(true) {
    if(req === "quit") {
        console.log("Quitting App");
        break;
    };

    if(req === "list") {
        console.log("---------------");
        for(let i = 0; i < todoTasks.length; i++) {
            console.log(i, todoTasks[i]);
        }
        console.log("---------------");
    }
    else if(req === "add") {
        let task = prompt("Please enter the task you want to add");
        todoTasks.push(task);
        console.log("Task Added");
    }

    else if(req === "delete") {
        let idx = Number(prompt("Enter the task index you want to delete"));
        todoTasks.splice(idx, 1);
        console.log("Task Deleted");
    }

    else {
        console.log("Wrong Request");
    }

    req = prompt("Enter your request");
}