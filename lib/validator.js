// <====== validator function to ensure inquirer answers aren't left blank ======>
answerValidatorBlank = async (input) => {
    if (input === "") {
        return 'Empty Input - Cannot Be Left Blank';
    }
    return true;
};


module.exports = answerValidatorBlank
