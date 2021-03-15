/**
 * @author Ibekason Alexander Onyebuchi
 * Date: 15/03/2021
 */

const formChessBoard = (gridNumber) => {
    let result ="";
    for (let i = 1; i<=gridNumber; i++){
        let output = "";
        let jValue, jGridNumber;
        if (i%2===0){
            jValue = 1;
            jGridNumber = gridNumber;
        }
        else {
            jValue = 0;
            jGridNumber = gridNumber -1;
        }
        for (let j =jValue; j<=jGridNumber; j++){
            if (j % 2 === 0) {
                output += " ";
            } else {
                output += "#";
            }
        }
        // console.log(output);
        output += "\n"
        result += output;

    }
    return result;


}

console.log(formChessBoard(8))

