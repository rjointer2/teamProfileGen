const questionsManager = [
    {
        name: "start",
        type: "confirm",
        message: "Would you like to build a team page?"
    },
    {
        name: "name",
        message: "Who is the manager for this team?",
    },
    {
        name: "id",
        message: "What is the manager's ID?",
    },
    {
        name: "email",
        message: "Enter the manager's email: ",
    },
    {
        name: "another",
        message: "Add employees under this manager? ",
        type: "confirm"
    }
]

const questions = [
    {
        name: "name",
        message: "Enter the employee's name: ",
    },
    {
        name: "role",
        message: "Select type of employee: ",
        type: "list",
        choices: ["Engineer", "Intern"],
    },
    {
        name: "id",
        message: "Enter the employee's id: ",
    },
    {
        name: "email",
        message: "Enter the employee's email: ",
    },
    {
        name: "github",
        message: "Enter the engineer's github link:",
        when: (answers) => answers.role === "Engineer",
    },
    {
        type: "confirm",
        name: "another",
        message: "Add employees under this manager? ",
    }
]

module.exports = { questionsManager, questions }