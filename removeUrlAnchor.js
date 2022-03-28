/*

Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

function removeUrlAnchor(url){

    var arr = url.split('');
    var newString = '';
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != '#'){
            newString += arr[i]
        } else{
            break;
        }
    }
    return newString;
    
    }

console.log(removeUrlAnchor('www.codewars.com#about'))