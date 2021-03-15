/**
 * @author Ibekason Alexander Onyebuchi
 * Date: 15/03/2021
 */

// Question: Write a loop that makes seven calls to console.log to output the following
// triangle:


let numOfLoops = 7;
let output = "";
for (let i = 1; i <= numOfLoops; i++){
    for (let j = 0; j<i; j++){
        output += "#";
    }
    console.log(output);
    output = "";

}