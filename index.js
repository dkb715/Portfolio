var inquirer = require("inquirer");
inquirer
.prompt ([
{
type: "color",
message: "What is your favorite color?",
name: "fav color",

}
])
.then(answers => {

});

