// <====== required packages ======>
const inquirer = require(`inquirer`);
const fs = require('fs');
const { markAsUntransferable } = require('worker_threads');
const { off } = require('process');
const { runInContext } = require('vm');

// <====== menu questions prompt ======>
const employee_add = [
    {
        type: 'confirm',
        message: 'would you like to add another employee?',
        name: 'add'
    }
]

const employee_type = [
    {
        type: 'list',
        message: 'what type of employee would you like to add?',
        name: 'type',
        choices: [
            { name: 'manager' },
            { name: 'engineer' },
            { name: 'intern' },
        ]
    },
]

const general_info = [
    {
        type: 'input',
        message: 'name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'employee id?',
        name: 'id',
    },

]

const manager_info = [
    {
        type: 'input',
        message: 'office number?',
        name: 'office'
    }
]

const engineer_info = [
    {
        type: 'input',
        message: 'github un?',
        name: 'github'
    }
]

const intern_info = [
    {
        type: 'input',
        message: 'school name?',
        name: 'school'
    }
]

function Data(level, name, email, id, other) {
    this.level = level;
    this.name = name;
    this.email = email;
    this.id = id;
    this.other = other;
}

let employeeAggData = [];

async function manager() {
    const generalInfo = await inquirer.prompt(general_info);
    const managerInfo = await inquirer.prompt(manager_info);
    const { name, email, id } = generalInfo;
    const { office } = managerInfo;
    const data = new Data('manager', name, email, id, office);
}

async function fork() {
    const employeeType = await inquirer.prompt(employee_type);
    const { type } = employeeType;
    return type;
}

async function engineer() {
    const generalInfo = await inquirer.prompt(general_info);
    const engineerInfo = await inquirer.prompt(engineer_info);
    const { name, email, id } = generalInfo;
    const { github } = engineerInfo;
    const data = new Data('engineer', name, email, id, github);
}

async function intern() {
    const generalInfo = await inquirer.prompt(general_info);
    const internInfo = await inquirer.prompt(intern_info);
    const { name, email, id } = generalInfo;
    const { school } = internInfo;
    const data = new Data('intern', name, email, id, school);
}

async function again() {
    const employeeAdd = await inquirer.prompt(employee_add);
    const { add } = employeeAdd;
    return add
}

class Execute {
    async initialize() {
        const select = await fork();
        switch (select) {
            case 'manager':
                await manager();
                break;
            case 'engineer':
                await engineer();
                break;
            case 'intern':
                await intern();
                break;
        }
        return await again()
    }

    async run() {
        const select = await this.initialize();
        switch (select) {
            case (true):
                this.run();
                break;
            case (false):
                break;
        }
    }
}

const execute = new Execute()

execute.run()
