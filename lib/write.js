// <====== required modules ======>
const Head = require('../lib/head');
const fs = require(`fs`);

// <====== Write class contains process and write ======>
class Write {
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

module.exports = Write