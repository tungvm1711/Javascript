var johnHeight = 150;
var johnAge = 13;
var maryHeight = 150;
var maryAge = 13;
var tungHeight = 160;
var tungAge = 13;

var johnScore = johnHeight + johnAge*5;
var maryScore = maryHeight + maryAge*5;
var tungScore = tungHeight + tungAge*5;

if(johnScore > maryScore && johnScore > tungScore){
    console.log('John wins' + johnScore);
}
else if(maryScore > johnScore && maryScore > tungScore){
    console.log('Mary wins' + maryScore);
}
else if(tungScore > johnScore && tungScore > maryScore){
    console.log('Tung wins' + tungScore);
}
else {
    console.log('It\'s a tie');
}
