// <====== required packages ======>
const Prompts = require(`../lib/prompts`);
const Head = require('../lib/head');
const fs = require(`fs`);

// <====== creates new prompts constructor ======>
const prompts = new Prompts;

// <====== class for commandline functions and filesystems functions ======>
class Execute {

    // <====== declares empty array to store employee html cards ======>
    employeeAggData = []

    // <====== init function starts by asking for manager information, and then prompts whether or not to add another employee, running add() if true and process() if false ======>
    async init() {
        console.log('manager information')
        this.employeeAggData.push(await prompts.manager())
        if (await prompts.again()){
            await this.add()
        } else {
            this.process(this.employeeAggData)
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
                this.add();
                break;
            case (false):
                this.process(this.employeeAggData)
        }
    }

    // <====== writes data to index.html file in dist directory ======>
    write(data) {
        fs.writeFile('../dist/index.html', data, 'utf8', function (err) {
            (err) ? console.log(err) : console.log('written to file');
        })
    }

    // <====== process function takes employeeAggData array (with html cards) and utilizes the head constructor and renderHTML function to create webpage, passing this data into the write function ======>
    process(data) {
        const head = new Head(data);
        this.write(head.renderHTML());
    }
}



module.exports = Execute


