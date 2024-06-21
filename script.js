//Syntax
// function functionName(parameter) {
//     //code block
// }


/////             0        1         2
const people = ['Mary', 'Joseph', 'Michael'];


const greeting = (people) => {
    for(let i=0; i<people.length; i++){
        console.log(`Hello my name is ${people[i]}`)
    }
};


greeting(people);


