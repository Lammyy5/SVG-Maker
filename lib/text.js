const Shape = require("./shape")


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