//Question-01 sorting an array wihout using predefined methods
// let arr = [-2, 3, 1, 0, 10, 4, 8, -1, -3, -6, 20, 100, 5, 1, -3, 5];
// let c;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] <= arr[j]) {
//       c = arr[j];
//       arr[j] = arr[i];
//       arr[i] = c;
//     }
//   }
// }
// console.log(arr);

//Question-02 remove duplicate elements in an array
// let duplicateArr = [2, 1, 2, 1, 3, 1, 2, 6, 3, 4, 5, 3, 8, 9, 7, 4, 6];
// let uniqueArr = [];
// for (let i = 0; i < duplicateArr.length; i++) {
//   if (uniqueArr.indexOf(duplicateArr[i]) == -1) {
//     uniqueArr.push(duplicateArr[i]);
//   }
// }
// console.log(uniqueArr);

//Question-03 print how many times each array element exists
// let arrayElement = [2, 1, 2, 2, 1, 3, 1, 2, 6, 3, 4, 5, 3, 8, 7, 4, 6];
// let obj = {};
// for (let i = 0; i < arrayElement.length; i++) {
//   if (obj.hasOwnProperty(arrayElement[i])) {
//     obj[arrayElement[i]] = obj[arrayElement[i]] + 1;
//   } else {
//     obj[arrayElement[i]] = 1;
//   }
// }
// console.log(obj);

//Question-04 how javascript entries methord works
// function entriesMethodWorks() {
//   let newArray = [];
//   let innerArr = [];
//   for (let key in obj) {
//     if (obj[key].hasOwnProperty) {
//       let arr = new Array();
//       arr.push(key, obj[key]);
//       newArray.push(arr);
//     }
//   }
//   return newArray;
// }
// let obj ={
//     "name":"saroj",
//     "age":34
// }
// console.log(entriesMethodWorks(obj));

//Question-05 Flatten array of array without using predefined method
// let unflattenedArr = [
//   1,
//   2,
//   [2, 3, [5, 7], 7, 9],
//   [-1, -3],
//   [-7, -8, [-10, 9, [20]]],
// ];
// function arrayFlat(data) {
//   let newArray = [];
//   flattenArray(data);
//   function flattenArray(arr) {
//     arr.forEach((element) => {
//       if (Array.isArray(element)) {
//         flattenArray(element);
//       } else {
//         newArray = [...newArray, element];
//       }
//     });
//   }
//   return newArray;
// }
// console.log(arrayFlat(unflattenedArr));

//Question-06 Flatten array of array using predefined method
// console.log(unflattenedArr.flat(Infinity));

// //Question-07 reverse an array without using any built in method
// //by using while loop
// function customReverse(originalArray) {
//   let leftIndex = 0;
//   let rightIndex = originalArray.length - 1;
//   while (leftIndex < rightIndex) {
//     let temp = originalArray[leftIndex];
//     originalArray[leftIndex] = originalArray[rightIndex];
//     originalArray[rightIndex] = temp;
//     leftIndex++;
//     rightIndex--;
//   }
// }
// let myArray = [1, 2, 3, 4, 5, 6];
// customReverse(myArray);
// console.log(myArray);

//Question-07 reverse an array without using any built in method
//By using for loop
// function reverse(arr){
//   let leftIndex = 0;
//   let rightIndex = arr.length -1;
//   for(leftIndex; leftIndex < rightIndex; leftIndex++, rightIndex--){
//     let temp = arr[leftIndex];
//     arr[leftIndex] = arr[rightIndex];
//     arr[rightIndex]= temp

//   }
//  // return arr;
// }
// let arrayNew = [1,2,3,4,5];
// reverse(arrayNew);
// console.log(arrayNew)

//Question-08 Find unique array element for multiple array elements
// function arrayFn(...arr){
//   console.log(arr);
//   let newArray=[];
//   let uniqueArr=[];
// for(let i =0 ; i < arr.length; i ++){
//   if(Array.isArray(arr[i])){
//     for(let j = 0 ; j < arr[i].length ; j++){
//       newArray.push(arr[i][j])
//     }
//   }
// }
// let obj = {};
// for(let key of newArray){
//   obj[key] = obj[key] ? obj[key] +1 : 1
// }
// let result = Object.keys(obj).filter((item)=> obj[item] == 1 )
// return result;
// };
// const value = arrayFn([1,2,3], [2,3,4], [3,4,5], [3,4,6], [5,6,7,8]);
// console.log(value)


//Question-09 Write an function to calcualate time in minutes from a string. if i pass '9.30am-12.45pm' it should return 195,
// if I pass '7am-8am' it should return 60.
// if i pass '4.05pm-4.35pm' it should return 30.
// function timeToMinutes (timeStr){
//      const [time, period]=timeStr.split(/(am|pm)/);
//      const [hour, minute]= time.split(".").map((item)=> Number(item));   
//     let totalMinutes =0;  
//      if (period === 'pm' && hour !== 12) {
//         totalMinutes = totalMinutes + 12 * 60;  
//     } else if (period === 'am' && hour === 12) {
//         totalMinutes = totalMinutes - 12 * 60;  
//     }else{
//          totalMinutes = hour * 60 + minute;  
//     }
//      console.log(totalMinutes);
//      return totalMinutes
// }
// function calculateTimeValue(str){
//     const [timer_one, timer_two] = str.split("-");
//     let timeOne=  timeToMinutes(timer_one);
//     let timeTwo =  timeToMinutes(timer_two);
//     return (timeTwo - timeOne )
// }

// console.log(calculateTimeValue('9.30am-12.45pm'))



//find the longest string from a string
// function calcualteLongestStr(str){
//     let arr = str.split("");
//     let newStr = '';
//     let longestStr = '';
//     let maxLenght=0;
//     for(let i = 0; i < arr.length; i++){
//         if(!newStr.includes(arr[i])){
//             newStr = newStr + arr[i]
//         }else{
//             newStr = newStr.slice(newStr.indexOf(arr[i]) + 1) + arr[i]
//         }
//         if(newStr.length > maxLenght){
//             maxLenght = newStr.length;
//             longestStr = newStr;
//         }
//     }
//     return longestStr;
// }

// console.log(calcualteLongestStr("abcabcdabcde"))

// which checking the PR what factors i need to check in git hub

// why we use unit test cases 
//remove all vowels from a string
// let name = "saroj";
// function removeVowel(str){
// 	let arr = str.split("");
// 	let vowel = ['a', 'e','i','o','u'];
// 	let newArr=[];
// 	for(let i =0; i < arr.length; i ++){
// 		if(!vowel.includes(arr[i])){
// 			newArr.push(arr[i]);
// 		}		
// 	}	
// 	return newArr.join("");
// }
// console.log(removeVowel(name))

// function sqRoot(num) {
//   let start = 1;
//   let end = num;
//   let ans = 0;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (mid * mid == num) {
//       return mid;
//     }
//     if (mid * mid < num) {
//       ans = mid;
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return ans;
// }
// console.log(sqRoot(25)); // 5
// console.log(sqRoot(100)); // 10

Question 
==============
var abc = [[{name:'saroj'}], [{name:'lipi'}]];
//output will be [ [ { name: 'saroj' } ] ] or [ [ { name: 'lipi' } ] ];
function nameArray(value){
  return abc.map((item1)=>{
    return item1
  }).filter((item)=>{
    return item[0].name == value
  })
}
console.log(nameArray('saroj'))
