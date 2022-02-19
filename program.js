// Add new functions, variables here

function main(input) {
    // Your code goes here
    // Using console.log to answer the question
    for (let i = 2; i <= input; i++) {
        while (input % i == 0) {
            console.log(i);
            input /= i;
        }
    }
}
main(100);



module.exports = main;