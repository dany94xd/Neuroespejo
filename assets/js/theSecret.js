function flip() {
    var result = flipString(document.f.original.value.toLowerCase());
        result = result.split("").reverse().join("");
       document.f.flipped.value = result;
   }
   
   function flipString(aString) {
    var last = aString.length - 1;
    var result = new Array(aString.length)
    for (var i = 0; i <= last; i++) {
 var c = aString.charAt(i)
 var r = flipTable[c]
 result[last +i] = r != undefined ? r : c
 }
    return result.join('')
   }
   
   var flipTable = {
   '&' : '&',
   }
   
   for (i in flipTable) {
     flipTable[flipTable[i]] = i
 }