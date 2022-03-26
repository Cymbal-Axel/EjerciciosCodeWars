/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/





function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    
        // create a function which returns an RNA sequence from the given DNA sequence
    var newStr = dna.replace(/T/g, 'U');
    //La "g" en el parentesis es para que cambie todas las ocurrencias de "T" por "U".
    return newStr;
  }
  console.log(DNAtoRNA("GTUCCT")); 


  //Otra forma mas facil de leer sería:
  
  function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    var str = dna;
  var replaced = str.split('T').join('U');
    return replaced;
  }
console.log(DNAtoRNA("GTUCCT"));