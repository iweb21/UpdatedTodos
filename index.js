// #! usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
console.log("Welcome to the ToDo List Application");
while (condition) {
    let operation = await inquirer.prompt({
        type: "list",
        message: "What Operations you want to perform?",
        name: "Operator",
        choices: ["Add", "Update", "View", "Delete"],
    });
    if (operation.Operator === "Add") {
        let add = await inquirer.prompt({
            type: "input",
            message: "What would you like to add in your todos?",
            name: "addItems",
        });
        todos.push(add.addItems);
        console.log(todos);
    }
    if (operation.Operator === "Update") {
        let update = await inquirer.prompt({
            type: "list",
            name: "updateItems",
            message: "What would you like to update in your todos?",
            choices: todos
        });
        let update2 = await inquirer.prompt({
            type: "input",
            message: "updateitems",
            name: "updateItems2",
        });
        let newtodos = todos.filter(value => value != update.updateItems);
        todos = [...newtodos, update2.updateItems2];
        // console.log(todos);
    }
    if (operation.Operator === "View") {
        console.log(todos);
    }
    if (operation.Operator === "Delete") {
        let deleteItem = await inquirer.prompt({
            type: "list",
            message: "What would you like to delete in your todos?",
            name: "deleteItems",
            choices: todos.map(item => item)
        });
        let newtodos = todos.filter(value => value != deleteItem.deleteItems);
        todos = [...newtodos];
        console.log(todos);
        break;
    }
}
let task = await inquirer.prompt({
    name: 'moretask',
    type: 'confirm',
    message: 'Would you like to add another task?',
    default: false
});
condition = task.moretask;
console.log("you todos:", todos);
