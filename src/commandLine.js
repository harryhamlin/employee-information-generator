// <====== required packages ======>
const Prompts = require(`../lib/prompts`)

const prompts = new Prompts;

// <====== class for commandline functions ======>
class Execute {
    // <====== branch function runs user through all prompts returning boolean as to whether or not user wants to add another employee ======>
    async branch() {
        switch (await prompts.fork()) {
            case 'manager':
                await prompts.manager();
                break;
            case 'engineer':
                await prompts.engineer();
                break;
            case 'intern':
                await prompts.intern();
                break;
        }
        return await prompts.again()
    }

    // <====== init function awaits the above branch function, if user wants to add another employee, then it runs init, otherwise ends the prompts ======>
    async init() {
        switch (await this.branch()) {
            case (true):
                this.init();
                break;
            case (false):
                console.log(prompts.employeeAggData)
                break;
        }
    }
}

module.exports = Execute;