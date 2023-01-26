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

    // <====== branch function runs user through all prompts returning boolean as to whether or not user wants to add another employee ======>
    async branch() {
        switch (await prompts.fork()) {
            case 'manager':
                this.employeeAggData.push(await prompts.manager());
                break;
            case 'engineer':
                this.employeeAggData.push(await prompts.engineer());
                break;
            case 'intern':
                this.employeeAggData.push(await prompts.intern());
                break;
        }
        return await prompts.again()
    }

    // <====== init function awaits the above branch function, if user wants to add another employee, then it runs init, executes the process function ======>
    async init() {
        switch (await this.branch()) {
            case (true):
                this.init();
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


