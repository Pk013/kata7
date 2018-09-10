const array1 = ["pie", "apples", "cherries", "lime"]
const copy = []
const array2 = ["2", "4", "9", "16"]

array1.forEach(function(pie){
    copy.push(pie)
    console.log(pie)
})
let roots = array2.map(Math.sqrt)
console.log(roots)

let even = function(element){
    return element % 2 === 0
}
console.log(array2.some(even))

let find = array2.find(function(element){
    return element > 5
})
console.log(find)
function findFirstNumber(element){
    return element > 10
}
console.log(array2.findIndex(findFirstNumber))

function belowTwenty(element){
    element < 20
}
console.log(array2.every(belowTwenty))

const filterOut = array1.filter(word => word.length > 4)
console.log(filterOut)