

// kilometeToMeter:- 
function kilometerToMeter(meter){
    var kilo = meter*1000;
    return kilo;
}
var distance = kilometerToMeter(50);
console.log(distance);


// Budget Calculator:- 
function budgetCalculator(watch, mobile, leptop){
    var total = watch*50 + mobile*100 + leptop*500;
    return total;
}
var result = budgetCalculator(3,5,2);
console.log(result);


// Hotel Cost:-
function hotelCost(day){
    var staying = 0;
    if(day<=10){
        var first10Days = day*100;
    }
    else if(day<=20){
        var first10Days = 10*100;
        var remainingDays = day - 10;
        var second10Days = remainingDays*80;
        var staying = first10Days + second10Days;
    }
    else{
        var first10Days = 10*100;
        var second10Days = 10*80;
        var remainingDays = day - 20;
        var otherDays = remainingDays*50;
        var staying = first10Days + second10Days + otherDays;
    }
    return staying;

}
var count = hotelCost(17);
console.log(count);


// Mega Friend Name:-
function megaFriend(friendName){
    var longest = friendName[0];
    for (i = 0; i < friendName.length; i++){
        var nextName = friendName[i];
        if (nextName.length > longest.length){
            longest = nextName;
        }
    }
    return longest;
}
var output = megaFriend(["Mehedi", "Ali", "Habibullah", "Sabbir Hossain Hridoy", "Naim", "Joy","r"]);
console.log(output);

