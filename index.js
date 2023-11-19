function encrypt() {
  const plainText = document.getElementById("plainText").value;
  const key = parseInt(document.getElementById("encryptionKey").value);
  const encryptedText = caesarCipher(plainText, key);
  document.getElementById("encryptedText").textContent = encryptedText;
}

function decrypt() {
  const encryptedText = document.getElementById("encryptedTextToDecrypt").value;
  const key = parseInt(document.getElementById("decryptionKey").value);
  const decryptedText = caesarCipher(encryptedText, -key);
  document.getElementById("decryptedText").textContent = decryptedText;
}

function caesarCipher(str, key) {
  key = key % 33;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char.match(/[a-я]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + key + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + key + 26) % 26) + 97);
      } else if (code >= 1040 && code <= 1071) {
        char = String.fromCharCode(((code - 1040 + key + 33) % 33) + 1040);
      } else if (code >= 1072 && code <= 1103) {
        char = String.fromCharCode(((code - 1072 + key + 33) % 33) + 1072);
      }
    }
    result += char;
  }

  return result;
}
