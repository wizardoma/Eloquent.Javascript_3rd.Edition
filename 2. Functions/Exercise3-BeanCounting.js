/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
    Write a function countBs that takes a string as its only argument and returns
    a number that indicates how many uppercase “B” characters there are in the
    string.
    Next, write a function called countChar that behaves like countBs, except
    it takes a second argument that indicates the character that is to be counted
    (rather than counting only uppercase “B” characters).
 */

const countBs = (word) => {
    let count = 0;
    for (let i = 0; i<word.length; i++){
        if (word[i] === "B") count++
    }
    return count
}

const countChar = (word, char)=> {
    let count = 0;
    for (let i = 0; i<word.length; i++){
        if (word[i] === char) count++
    }
    return count
}

console.log(countBs("Babara"))
// 1

console.log(countChar("Alexander", "e"))
// 2

