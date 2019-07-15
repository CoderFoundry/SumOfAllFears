//For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//Brute Force obvious way using 2 loops
function FindSumA(numbers, answer) {

    //Loop through the array and add the adjacent number and check for the answer
    let checkValue = 0;
    let found = false;
    //[15,3,10,7] startIndex = 0, end Index = 3
    for (let i = 0; i <= numbers.length - 2; i++) {
        //Loop over the array in the after the current value
        for (let y = (i + 1); y <= numbers.length - 1; y++) {
            if (answer == numbers[i] + numbers[y]) {
                found = true;
                return found;
            }
        }
    }
    return found;
}


//Sorted Array Method
function FindSumB(numbers, answer) {
    let found = false;
    let checkValue = 0;
    //Sort the array
    numbers.sort(function (a, b) {
        return a - b
    });
    let startIndex = 0;
    let endIndex = numbers.length - 1;

    //Loop through the array and add the smallest and largest 
    //number to see if they equal the answer    
    do {
        checkValue = numbers[startIndex] + numbers[endIndex];
        if (answer == checkValue) {
            found = true;
            break;
        } else if (answer > checkValue) {
            startIndex++;
        } else if (answer < checkValue) {
            endIndex--;
        }
    } while (found == false && startIndex < endIndex);

    return found;

}

//Better or more elegant way. Subtract the current number from the answer.
//Then look for the checkvalue in the array
function FindSumC(numbers, answer) {
    let checkValue = 0;
    let found = false;
    for (let i = 0; i <= numbers.length - 1; i++) {
        checkValue = answer - numbers[i];
        if (numbers.includes(checkValue, i + 1)) {
            found = true;
            break;
        }
    }
    return found;
}

//return all possible combos of numbers that equal the answer
function FindSumD(numbers, answer) {
    let checkValue = 0;
    let checkIndex = -1;
    let ansArray = [];

    for (let i = 0; i <= numbers.length - 1; i++) {
        checkValue = answer - numbers[i];
        checkIndex = numbers.indexOf(checkValue);

        if (checkIndex != -1 && checkIndex != i) {
            //add the 2 numbers to the array
            ansArray.push(numbers[i] + " + " + checkValue);
            //remove the 2nd number from array
            numbers.splice(checkIndex, 1);
        }
    }
    return ansArray;
}

//look for the numbers and display true or false
function DisplaySum() {
    let answer = document.getElementById("sumValue").value;
    let numArray = [10, 15, 3, 7];

    //Show the array on the screen
    document.getElementById("numList").innerHTML = numArray.toString();
    let found = FindSumC(numArray, answer);
    document.getElementById("results").innerHTML = found.toString();

}

//Display all possible combos
function DisplayAllSums() {
    let answer = document.getElementById("sumValue").value;
    //let numArray = [10, 15, 3, 7, 2, 16];

    let numArray = GenerateNumbers(20);

    //Show the array on the screen
    document.getElementById("numList").innerHTML = numArray.toString();
    let found = FindSumD(numArray, answer).join("<br>");
    document.getElementById("results").innerHTML = found.toString();
}

//Generate Random Numbers
function GenerateNumbers(max) {
    var arr = [];
    while (arr.length < max) {
        var r = Math.floor(Math.random() * 100) + 1;
        if (arr.indexOf(r) == -1) {
            arr.push(r);
        }
    }
    return arr;
}