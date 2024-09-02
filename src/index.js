const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   let words = expr.split('**********');
   let res ='';
   for(let i = 0; i < words.length; i++){
    for(let j = 0; j< words[i].length; j=j+10){
        let str = words[i].slice(j, j + 10).replaceAll('11', '-').replaceAll('10', '.').replaceAll('0', '');
        res += MORSE_TABLE[str];    
    }
    res += ' '; 
   }
  return res.substring(0, res.length - 1);
}

module.exports = {
    decode
}