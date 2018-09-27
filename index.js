function forEachKata(array, callback) {



    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        console.log(callback(value, i, array))
    }
}

const numbers = [3, 10, 18, 20]

forEachKata(numbers, function(number, i, array) {

    const numberValue =
        number === 3 || number === 10 || number === 18 || number === 20
    console.log(`The number '${number}' is at position '${i}' of '${array}'`)
})

function mapKata(array, callbackMap) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        newArray.push(callbackMap(value, i, newArray))
    }

    return newArray

}

let doubleNumbers = mapKata(numbers, function(number, i, array) {
    return (number * 2)
})

console.log(doubleNumbers)

function someKata(array, callbackSome) {

    for (let i = 0; i < array.length; i++) {

        const value = array[i]
        callbackSome(value, i, array)

    }
}

someKata(numbers, function(number, i, array) {
    const numbers = [3, 10, 18, 20]
    const numberThree = 3
    const oddNumber = numberThree ? true : false
    console.log(oddNumber)



})

function findKata(array, callbackFind) {

    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        let find = callbackFind(value, i, array)
        if (find === true) return value

    }

    return undefined
}

let findValue = findKata(numbers, function(number, i, array) {
    return number >= 11
})

console.log(findValue)

function findIndexKata(array, callbackFindIndex) {

    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        callbackFindIndex(value, i, array)
    }
}

findIndexKata(numbers, function(number, i, array) {
    const greaterThanTen = []
    if (number > 10) {
        console.log(`The number ${number} is at position ${i}`)
    }
})

function everyKata(array, callbackFindEvery) {

    for (i = 0; i < array.length; i++) {
        const value = array[i]
        callbackFindEvery(value, i, array)

    }
}
everyKata(numbers, function(number, index, array) {
    const numbersGreaterThan10 = (numbers < 10) ? true : false;
    console.log(numbersGreaterThan10)
})
function filterKata(array, callbackFilter) {

    let matchingNumbers = []

    for (i = 0; i < array.length; i++) {
        const value = array[i]
        let match = matchingNumbers.push(callbackFilter(value, i, matchingNumbers))
    }

    return matchingNumbers
}

let newNumber = filterKata(numbers, function(number, i, array) {

    if (number > 10) {

        return number
    } else { return "" }

})

console.log(newNumber)