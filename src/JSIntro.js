
exports.Sum = function(num1, num2){
return (num1+num2);
}

exports.SumOfArray = function(arrayOfNums){
var val=0;
for(var i=0;i<arrayOfNums.length;i++)
val=val+arrayOfNums[i];
return val;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
var sum=0;
for(var i=0;i<arrayOfNums.length;i++)
{
for(var j=0;j<i;j++)
{
if(arrayOfNums[i]==arrayOfNums[j])
break;
}
if(j==i)
sum=sum+arrayOfNums[i];
}
return sum;
}


exports.ReverseString = function(str){
var res='';
for(var i=str.length-1;i>=0;i--)
res+=str[i];
return res;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
arrayOfStrings.reverse();
return arrayOfStrings;
}