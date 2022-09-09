console.log("snack-2")
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

function splitArray(array, min, max) {
    let newArray = []
    let temp = 0;
    if (min > max) {
        temp = min;
        min = max
        max = temp;
    }

    array.forEach((element, index) => {
        if (index >= min && index <= max) {
            newArray.push(element)
        }
    });


    return newArray;
}


let arrayNumber = [10, 20, 25, 7, 3, 78, 24, 7, 45];

let newNumberArray = splitArray(arrayNumber, 1, 5);


console.log(newNumberArray)
