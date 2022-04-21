/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/ 

    function solution(str, ending){
      /*
      El método endsWith() determina si una cadena de texto termina con los 
      caracteres de una cadena indicada, devolviendo true o false según corresponda.   
       */   
      return str.endsWith(ending);
      };

    console.log(solution("abc", "bc"));






