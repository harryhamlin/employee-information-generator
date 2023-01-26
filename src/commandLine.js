// <====== required packages ======>
const Prompts = require(`../lib/prompts`);
const Card = require('../lib/card');
const Head = require('../lib/head');
const Data = require('../lib/data');
const fs = require(`fs`)

const prompts = new Prompts;

let q

// <====== class for commandline functions ======>
class Execute {

    // <====== declares empty array to store employee data objects ======>
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

    // <====== init function awaits the above branch function, if user wants to add another employee, then it runs init, otherwise ends the prompts ======>
    async init() {
        switch (await this.branch()) {
            case (true):
                this.init();
                break;
            case (false):
                this.process(this.employeeAggData)
        }
    }

    process(data) {
        const head = new Head(data)
        fs.writeFile('../dist/index.html', head.renderHTML(data), 'utf8', function (err) {
            (err) ? console.log(err) : console.log('written to file');
        })
    }
}

const execute = new Execute;


execute.init()


