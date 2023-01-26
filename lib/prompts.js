// <====== required packages ======>
const Questions = require('./questions');
const Data = require(`./data`);
const Card = require(`./card`)
const inquirer = require(`inquirer`);

const questions = new Questions

class Prompts {


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
        const data = new Card('manager', name, email, id, office);
        return data.createCard('manager', name, email, id, office);
    }

    // <====== asks specific engineer questions and pushes to array ======>
    async engineer() {
        const generalInfo = await inquirer.prompt(questions.general_info);
        const engineerInfo = await inquirer.prompt(questions.engineer_info);
        const { name, email, id } = generalInfo;
        const { github } = engineerInfo;
        const data = new Card('engineer', name, email, id, github);
        return data.createCard('engineer', name, email, id, github);
    }

    // <====== asks specific intern questions and pushes to array ======>
    async intern() {
        const generalInfo = await inquirer.prompt(questions.general_info);
        const internInfo = await inquirer.prompt(questions.intern_info);
        const { name, email, id } = generalInfo;
        const { school } = internInfo;
        const data = new Card('intern', name, email, id, school);
        return data.createCard('intern', name, email, id, school);
    }

    // <====== asks whether or not user wants to add more employees ======>
    async again() {
        const employeeAdd = await inquirer.prompt(questions.employee_add);
        const { add } = employeeAdd;
        return add
    }
}

module.exports = Prompts;