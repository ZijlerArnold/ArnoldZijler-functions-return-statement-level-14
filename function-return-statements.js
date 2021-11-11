const log = console.log;
log('==========================');


//============opdracht A=========Checking if a number is big===========
let numberToCheck = 20;

const checkIfNumberIsBiggerThanHundred = function(number) {
    if (number > 100) {
        return true;     
    } 
     return false;     
};
const biggerOrNot = checkIfNumberIsBiggerThanHundred(numberToCheck);
log(biggerOrNot);
log('');








//============opdracht B==========Bouncer at a club===========
//max ages = 18
//max people in club = 75

let currentPeopleInClub = 50;
let agesPerson = 10;

const checkAmountPeopleAndAge = function (current, age) {
    if (current > 75) {
        return "it's too busy now, come back later";
    } else if (age < 18) {
        return "this is a club for adults";     
    } else {
        return "come in";
    }
};
const BrendaSpeak = checkAmountPeopleAndAge(currentPeopleInClub, agesPerson);
log(BrendaSpeak);
log('');








//==============Opdracht C========Calculating the average===========
const calculatAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    const totalAverage = Math.round(average);
    return totalAverage;
};

const numbersTotal = [45, 25, 55, 12, 10];
//calculatAverage(numbersTotal);
log(calculatAverage(numbersTotal))


