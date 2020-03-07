const mysql = require('mysql');
const inquirer = require('inquirer');
const boxen = require('boxen');
const figlet = require('figlet');

const {
    addDepartment,
    AddRole,
    addEmployee,
    viewQuery,
    updateEmployeeRole,
    updateEmployeeManager,
    deleteQuery
  } = require('./lib/queries');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'example',
    database: 'employee_managment_system'
});

connection.connect((err) => {
    if (err) throw err;
    printTitle("Employee Manager")
    start();
});

const printTitle = (title) => {
    console.log(boxen(figlet.textSync(title), {
        borderColor: 'magenta',
        borderStyle: 'classic',
    }))
}

const start = () => {
    inquirer.prompt({
        type: "list",
        name: "action",
        message: "What would you like to do next?",
        choices: [
            "Add Department",
            "Add Role",
            "Add Employee",
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Update Employee Role",
            "Update Employee Manager",
            "Delete Department",
            "Delete Role",
            "Delete Employee",
            // BONUS:
            // "View All Employees by Manager",
            // "View the Total Utilized Budget of a Department",
            "Exit"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "Add Department":
                addDepartment(connection, start);
                break;

            case "Add Role":
                AddRole(connection, start);
                break;

            case "Add Employee":
                addEmployee(connection, start);
                break;

            case "View All Departments":
                viewQuery('department', connection, start)
                break;

            case "View All Roles":
                viewQuery('role', connection, start)
                break;

            case "View All Employees":
                viewQuery('employee', connection, start);
                break;

            case "Update Employee Role":
                updateEmployeeRole(connection, start);
                break;

            case "Update Employee Manager":
                updateEmployeeManager(connection, start);
                break;

            case "Delete Department":
                deleteQuery('department', connection, start);
                break;

            case "Delete Role":
                deleteQuery('role', connection, start);
                break;

            case "Delete Employee":
                deleteQuery('employee', connection, start);
                break;

            case "Exit":
                connection.end()
                break;
        }
    })
};