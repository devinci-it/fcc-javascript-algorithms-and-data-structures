function rot13(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        if (char >= 65 && char <= 77) {
            newStr += String.fromCharCode(char + 13);
        }
        else if (char >= 78 && char <= 90) {
            newStr += String.fromCharCode(char - 13);
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
    }

  
  rot13("SERR PBQR PNZC");