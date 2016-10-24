// // function driveCar() {
// //
// // }
//
// var driveCar = function(doStuff, secretMessage) {
//     // console.log(doStuff)
//     // console.log(doStuff())
//
//     var stuffMessage = doStuff()
//     alert(stuffMessage)
//
//     return function() {
//         return 'Hello from your car ' + stuffMessage
//     }
// }
//
// var greeting = driveCar(() => 'zoom')
//
// console.log(greeting())
//
// function makeFood() {
//     var lettuce = true
//     function makeTacos() {
//         var cheese = true
//         console.log(lettuce)
//     }
// }

(function() {
    'use strict'

    var one = function(selector) {
        return document.querySelector(selector)
    }

    var capitalizeFirst = function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1)
    }

    var capitalizeAll = function(words) {
        return words.split(' ').map(capitalizeFirst).join(' ')
    }

    var padLeft = function(word, char = '0', length = 2) {
        // char = char || '0'
        // length = length || 2

        //padLeft(1, '0', 2) => 01
        //padLeft(1, '0', 3) => 001
        // if (word.split('').length < length) {
            // for (let i = 1; i <= length - word.length; i++)
            //     word = char + word
            // word = char.repeat(length - word.length) + word
        // }

        return char.repeat(length - word.length) + word
    }

    window.dog = {
        capitalizeAll: capitalizeAll,
        capitalizeFirst: capitalizeFirst,
        pad: padLeft,
        one: one
    }
}())
