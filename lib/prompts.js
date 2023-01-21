// <====== required packages ======>
const Questions = require('./questions');
const Data = require(`./data`)
const inquirer = require(`inquirer`);

const questions = new Questions

class Prompts {
    // <====== declares empty array to store employee data objects ======>
    employeeAggData = []

    // <====== asks type of employee user wants to add ======>
    async fork() {
        const employeeType = await inquirer.prompt(questions.employee_type);
        const { type } = employeeType;
        return type;
    }

    // <====== asks specific manager questions and pushes to array ======>
    async manager() {
        const generalInfo = await inquirer.prompt(questions.general_info);
        const managerInfo = await inquirer.prompt(questions.manager_info);
        const { name, email, id } = generalInfo;
        const { office } = managerInfo;
        this.employeeAggData.push(new Data('manager', name, email, id, office));
    }

    // <====== asks specific engineer questions and pushes to array ======>
    async engineer() {
        const generalInfo = await inquirer.prompt(questions.general_info);
        const engineerInfo = await inquirer.prompt(questions.engineer_info);
        const { name, email, id } = generalInfo;
        const { github } = engineerInfo;
        this.employeeAggData.push(new Data('engineer', name, email, id, github));
    }

    // <====== asks specific intern questions and pushes to array ======>
    async intern() {
        const generalInfo = await inquirer.prompt(questions.general_info);
        const internInfo = await inquirer.prompt(questions.intern_info);
        const { name, email, id } = generalInfo;
        const { school } = internInfo;
        this.employeeAggData.push(new Data('intern', name, email, id, school));
    }

    // <====== asks whether or not user wants to add more employees ======>
    async again() {
        const employeeAdd = await inquirer.prompt(questions.employee_add);
        const { add } = employeeAdd;
        return add
    }
}

module.exports = Prompts;