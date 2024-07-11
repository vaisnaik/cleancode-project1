function encrypt() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);
    let result = "";
  
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      
      if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);
        
        code = ((code - 65 + shift) % 26) + 65;
        
        result += String.fromCharCode(code);
      } else {

        result += char;
      }
    }
  
    document.getElementById('output').value = result;
  }
  
  function decrypt() {
    const message = document.getElementById('output').value;
    const shift = parseInt(document.getElementById('shift').value);
    let result = "";
  
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);
       
        code = ((code - 65 - shift + 26) % 26) + 65;
        result += String.fromCharCode(code);
      } else {
        result += char;
      }
    }
  
    document.getElementById('message').value = result;
  }
  