// <====== required packages ======>
const Prompts = require(`../lib/prompts`);
const Write = require(`../lib/write`)

// <====== creates new prompts constructor ======>
const prompts = new Prompts;
const write = new Write;

// <====== class for commandline functions and filesystems functions ======>
class Initialize {

    // <====== declares empty array to store employee html cards ======>
    employeeAggData = []

    // <====== init function starts by asking for manager information, and then prompts whether or not to add another employee, running add() if true and process() if false ======>
    async init() {
        console.log('manager information')
        this.employeeAggData.push(await prompts.manager())
        if (await prompts.again()){
            await this.add()
        } else {
            return write.process(this.employeeAggData)
        }
    }
    
    // <====== asks user which type of employee they want to add ======>
    async branch() {
        switch (await prompts.fork()) {
            case 'engineer':
                this.employeeAggData.push(await prompts.engineer());
                break;
            case 'intern':
                this.employeeAggData.push(await prompts.intern());
                break;
        }
        return await prompts.again()
    }

    // <====== add function checks to see if user wants to add another employee, if true running itself again, if false running process()
    async add() {
        switch (await this.branch()) {
            case (true):
                await this.add();
                break;
            case (false):
                return write.process(this.employeeAggData)
        }
    }

}

module.exports = Initialize;




