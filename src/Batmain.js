
let T = parseInt(gets());

function foiCapturado(s) {
  const target = "batmain";
  const map = new Map();
  
  for (let char of target) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 3);
    } else {
      map.set(char, 3);
    }
  }
  
  for (let char of s) {
    if (map.has(char.toLowerCase())) {
      map.set(char.toLowerCase(), map.get(char.toLowerCase()) - 1);
      
      if (map.get(char.toLowerCase()) < 0) {
        return false;
      }
    }
  }
  
  return true;
}

for (let i = 0; i < T; i++) {
  let string = gets();
  let capturado = foiCapturado(string);
  console.log(capturado ? "Y" : "N");
}
