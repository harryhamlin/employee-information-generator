// <====== user input questions prompt ======>
class Questions {

    employee_add = [
        {
            type: 'confirm',
            message: 'would you like to add another employee?',
            name: 'add'
        }
    ]

    employee_type = [
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

    general_info = [
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

    manager_info = [
        {
            type: 'input',
            message: 'office number?',
            name: 'office'
        }
    ]

    engineer_info = [
        {
            type: 'input',
            message: 'github un?',
            name: 'github'
        }
    ]

    intern_info = [
        {
            type: 'input',
            message: 'school name?',
            name: 'school'
        }
    ]
}

module.exports = Questions


