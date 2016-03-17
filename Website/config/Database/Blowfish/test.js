
var Encryption = require('./encryption.js');
var e = new Encryption();
var key = "not_e4rbud5/!key";
var text = "123";

var encrypted = e.encrypt(text, key);
console.log("Encrypted text: "+encrypted);

var decrypted = e.decrypt(encrypted, key);
console.log("Decrypted text: "+decrypted);