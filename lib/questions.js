// <====== required modules ======>
const answerValidatorBlank = require('./validator')


// <====== user input questions prompt with validator to ensure prompts answers are not left blank ======>
class Questions {

    employeeAdd = [
        {
            type: 'confirm',
            message: 'would you like to add another employee?',
            name: 'add'
        }
    ]

    employeeType = [
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

    generalInfo = [
        {
            type: 'input',
            message: 'name?',
            name: 'name',
            validate: answerValidatorBlank
        },
        {
            type: 'input',
            message: 'email address?',
            name: 'email',
            validate: answerValidatorBlank
        },
        {
            type: 'input',
            message: 'employee id?',
            name: 'id',
            validate: answerValidatorBlank
        },

    ]

    managerInfo = [
        {
            type: 'input',
            message: 'office number?',
            name: 'office',
            validate: answerValidatorBlank
        }
    ]

    engineerInfo = [
        {
            type: 'input',
            message: 'github un?',
            name: 'github',
            validate: answerValidatorBlank
        }
    ]

    internInfo = [
        {
            type: 'input',
            message: 'school name?',
            name: 'school'
        }
    ]

    overwrite = [
        {
            type: 'confirm',
            message: 'index.html exists. Would you like to overwrite?',
            name: 'overwrite',
        }
    ]
}

module.exports = Questions


