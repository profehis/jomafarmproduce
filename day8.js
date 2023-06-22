console.log("welcome  to today 8")
function onlyNum(arr) {
        let newArr=[]
        for(let i=0; i < arr.length ; i ++){
        if (typeof arr[i]=== 'number' ) {
         newArr. unshift(arr [i])
    }
}
return newArr
}
// console.log(onlyNum(myArr))
//function filterArr (arr){
 // return arr.filter(function (item )=> typeof item ==='number')
//}
//using arrow function 
//const filterArr= arr => {
// return arr.filter((item)=> typeof item==='number')
//}
//console.log(filterArr(myArr))

//sort method of array
const fruit =["banana", "orange", "apple", "mango"];
const sortA =fruits.sort();
const sortReverse = sortA.reverse()
console.log(sortA)

// sort with argument
const sortB= fruits. sort((a,b)=> b-a)
//console.log("sortb",sortB)