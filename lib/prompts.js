// <====== required packages ======>
const Questions = require('./questions');
const Card = require(`./card`)
const inquirer = require(`inquirer`);

const questions = new Questions

class Prompts {
    // <====== asks type of employee user wants to add ======>
    async fork() {
        const employeeType = await inquirer.prompt(questions.employeeType);
        const { type } = employeeType;
        return type;
    }

    // <====== asks specific manager questions and pushes html card to array ======>
    async manager() {
        const generalInfo = await inquirer.prompt(questions.generalInfo);
        const managerInfo = await inquirer.prompt(questions.managerInfo);
        const { name, email, id } = generalInfo;
        const { office } = managerInfo;
        const data = new Card('manager', name, email, id, office);
        return data.createCard();
    }

    // <====== asks specific engineer questions and pushes html card to array ======>
    async engineer() {
        const generalInfo = await inquirer.prompt(questions.generalInfo);
        const engineerInfo = await inquirer.prompt(questions.engineerInfo);
        const { name, email, id } = generalInfo;
        const { github } = engineerInfo;
        const data = new Card('engineer', name, email, id, github);
        return data.createCard();
    }

    // <====== asks specific intern questions and pushes html card to array ======>
    async intern() {
        const generalInfo = await inquirer.prompt(questions.generalInfo);
        const internInfo = await inquirer.prompt(questions.internInfo);
        const { name, email, id } = generalInfo;
        const { school } = internInfo;
        const data = new Card('intern', name, email, id, school);
        return data.createCard();
    }

    // <====== asks whether or not user wants to add more employees ======>
    async again() {
        const employeeAdd = await inquirer.prompt(questions.employeeAdd);
        const { add } = employeeAdd;
        return add;
    }

}

module.exports = Prompts;