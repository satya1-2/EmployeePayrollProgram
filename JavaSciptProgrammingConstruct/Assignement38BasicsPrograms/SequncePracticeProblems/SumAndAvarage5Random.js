var values=[];
for(var i=0;i<5;i++){
    var randomValue=Math.floor(Math.random()*90)+10;//generate a random 2-digitsnumber
    values.push(randomValue);//adding random value to the array

}
var sum=0;for(var j=0;j<values.length;j++){
    sum +=values[j];
}
var average =sum/values.length;
console.log("Random values : " +values);
console.log("sum  : " + sum);
console.log("Average  : " +average);