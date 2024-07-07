const { default: inquirer } = require("inquirer");

class Shape {
    constructor(text, bColor, shapes, sColor) {
        this.text = text;
        this.bColor = bColor;
        this.shapes = shapes;
        this.sColor = sColor;
    }
    getShapes(){
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters',
            },
            {
                type: 'input',
                name: 'bacColor',
                message: 'Enter a color or hexadecimal number?',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Pick a shape',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the color for the shape',
            }
        ]).then(answers => {
            console.log(answers);
        return answers})
    }
}
module.exports = Shape;