const inquirer = require('inquirer');
const fs = require('fs');
class Shape {
    constructor(text, bColor, shapes, sColor) {
        this.text = text;
        this.bColor = bColor;
        this.shapes = shapes;
        this.sColor = sColor;
    }
}
inquirer.prompt([
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

    switch (answers.shape) {
        case 'circle':
            const circle = new Shape(answers.text, answers.bacColor, `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`, answers.shapeColor)
            console.log(circle)
            break;
        case 'triangle':

            const triangle = new Shape(answers.text, answers.bacColor, `<polygon points="150,2 280,180 10,180" fill='${answers.shapeColor}' />`, answers.shapeColor)
            console.log(triangle)
            break;
        case 'square':
            const square = new Shape(answers.text, answers.bacColor, `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg"> <rect width="180" height="150" x="60" y="20" fill="${answers.shapeColor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${answers.text}</text>

</svg>`, answers.shapeColor)
            console.log(square)

            break;
        default:
            break;
    }
    const svgText = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="${answers.bacColor}" />

 <${answers.shape} cx="150" cy="100" r="80" fill="${answers.shapeColor}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${answers.text}</text>

</svg>
`
    fs.writeFile(answers.shape + '.svg', svgText, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
    )
}).catch(error => {
    console.error('An error occurred:', error);
});