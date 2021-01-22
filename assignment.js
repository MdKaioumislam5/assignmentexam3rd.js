//kilometerToMeter function start
function kilometerToMeter(kilometer){
    var meter = kilometer / 1000;
    return meter;
}
var nanaMeter = kilometerToMeter(156);
console.log(nanaMeter);
var naniMeter = kilometerToMeter(288);
console.log(naniMeter);
var dadiMeter = kilometerToMeter(300);
console.log(dadiMeter);
//kilometerToMeter function end


//budgetCalculator start
function budgetCalculator(num){
    var total = num * 2;
    return total;
}
var watch = budgetCalculator(50);
var phone = budgetCalculator(100);
var laptop = budgetCalculator(500);
var total = watch + phone + laptop;
//budgetCalculator end


//hotelCoast start
function hotelCoast(night){
var hotel = 0;
if(night<=10){
    animall = night * 100;
}
else if(night<=20){
    var firstpart = 10 * 100;
    var remaining = night - 10;
    var secondpart = ramaining * 80
    hotel = firstpart + secondpart;

}
else{
    var firstpart = 10 * 100;
    var secondpart = 10 * 50;
    var remaining = night - 20;
    var thirdpart = remaining * 50;
    hotel = firstpart + secondpart + thirdpart;
}
return hotelCoast;
}
var count = hotelCoast(28);
console.log(count);
//hotelCoast end


//megaFriend start
function megaFriend(){
    var friendlist = ["Rofiq", "Sofiq", "Salam","Jovanabrar"]
    return lastfriend;

}
var lastfriend = [3];
console.log(lastfriend);
//megaFriend end
