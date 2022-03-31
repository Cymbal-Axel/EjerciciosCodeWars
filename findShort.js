/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


*/
var string = "bitcoin take over the world maybe who knows perhaps";

function findShort(s) {
    var arr = s.split(" ");
    const orderedArray = arr.sort((a, b) => {
        return a.length - b.length;
     })
     return orderedArray[0].length;
};

console.log(findShort(string));

