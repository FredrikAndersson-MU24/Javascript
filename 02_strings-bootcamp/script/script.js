// // repeat
// // Skriv en funktion som tar en sträng och ett number som input och repeterar strängen så många gånger som talet som output.
let result;
function repeat(text, repetitions) {
  result = " ";
  for (i = 0; i < repetitions; i++) {
    result += text;
  }
  return result;
}

const text1 = "Tre-";
const num = 3;

console.log(repeat("Fem-", 5));
console.log(repeat(text1, num));
console.log("-----");

// // Skriv en funktion som tar en sträng och ett tecken som input och ger true eller false som output beroende på om tecknet finns i strängen.

function containsChar(text, character) {
  for (let char of text) {
    if (char == character) {
      return true;
    }
  }
  return false;
}
const str1 = "Vi ska ro hem nu";
const char1 = "o";
console.log(containsChar("hej", "e"));
console.log(containsChar("hej", "b"));
console.log(containsChar(str1, char1));

console.log("-----");

// // indexOfChar
// // Skriv en funktion som tar en sträng och ett tecken som input och ger positionen för det första förekomna tecknet som output och -1 om tecknet inte finns.

function indexOfChar(text, character) {
  for (i = 0; i < text.length; i++) {
    if (text[i] == character) {
      return i;
    }
  }
  return -1;
}
const str2 = "Det Här är en helt annan sträng";
const char2 = "h";
console.log(indexOfChar(str2, char2));
console.log(indexOfChar("hur mår du", "x"));
console.log("-----");

// // startsWith
// // Skriv in funktion som avgör om strängen börjar på tecknet eller inte.
function startsWith(text, character) {
  return text[0] == character;
}
const str3 = "hej du";
const char3 = "h";
console.log(startsWith(str3, char3));
console.log(startsWith("hej på dig", "e"));
console.log("-----");
// // endsWith
// // Skriv in funktion som avgör om strängen slutar på tecknet eller inte.

function endsWith(text, character) {
  return character == text[text.length - 1];
}

console.log(endsWith("hej", "j"));
console.log(endsWith("hej", "h"));
console.log("-----");

// // reverse
// // Skriv en funktion som tar en sträng som input och ger en ny omvänd sträng som output.

function reverse(text) {
  let reverseStr = "";
  for (i = text.length - 1; i >= 0; i--) {
    reverseStr += text[i];
  }
  return reverseStr;
}

console.log(reverse("Det Här Är Så Sabla Jobbigt Att Läsa"));
console.log("-----");

// // removeChar
// // Skriv en funktion som tar en sträng och ett tecken som input och ger en ny sträng som output där tecknet är borttaget från strängen.
// // Notera att du bara ska ta bort alla förekomster av enbart ett tecken.

function removeChar(text, character) {
  let removedCharString = "";
  for (let currentCharacter of text) {
    if (currentCharacter != character) {
      removedCharString += currentCharacter;
    }
  }
  return removedCharString;
}
console.log(removeChar("jag har handlat", "a"));
console.log("-----");

// // replaceChar
// // Skriv en funktion som tar en sträng och två tecken som input och ger en ny sträng som output där det ena tecknet ersätts med det andra i strängen.
// // Notera att du bara ska ta ersätta alla förekomster av enbart ett tecken.

function replaceChar(text, source, dest) {
  let replaceCharString = "";
  for (let currentChar of text) {
    if (currentChar == source) {
      replaceCharString += dest;
    } else {
      replaceCharString += currentChar;
    }
  }
  return replaceCharString;
}

const string4 = "hejsan på dejsan";
const charSource = "j";
const charDest = "s";

console.log(replaceChar("hej hej på dej dej hajen", "e", "a"));
console.log(replaceChar(string4, charSource, charDest));
console.log("-----");

// substring
// Skriv en funktion som tar en sträng och två tal som input, och ger en ny sträng med alla tecken mellan talen.

function substring(text, start, stop) {
  let subString = "";
  for (i = start; i <= stop; i++) {
    subString += text[i];
  }
  return subString;
}
const string5 = "0123456789";
const start = 4;
const stop = 6;
console.log(substring(string5, start, stop));
console.log("-----");

// contains
// Skriv en funktion som tar två strängar som input och ger true eller false som output beroende på om den ena strängen innehåller den andra.

function contains(text, find) {
  for (let i = 0; i < text.length; i++) {
    const sub = substring(text, i, i + find.length - 1);
    if (sub == find) {
      return true;
    }
  }
  return false;
}

const inputString1 = "jag heter jan";
const inputString2 = "heter";
console.log(contains(inputString1, inputString2));
console.log("-----");

// remove
// Skriv en funktion som tar två strängar som input och ger en ny sträng som output där den ena strängen är borttagen från den första strängen.
function remove(text, find) {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    const sub = substring(text, i, i + find.length - 1);
    if (sub != find) {
      output += text[i];
    } else {
      i += find.length - 1;
    }
  }
  return output;
}

const inputStrin1 = "jag heter jan";
const inputStrig2 = "ja";
console.log(remove(inputStrin1, inputStrig2));
console.log("-----");

console.log("-----");
// replace
// Skriv en funktion som tar en sträng och ytterligare två strängar som input och ger en ny sträng som output där det ena tecknet ersätts med det andra i strängen.

function replace(text, find, replace) {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    const sub = substring(text, i, i + find.length - 1);
    if (sub != find) {
      output += text[i];
    } else {
      output += replace;
      i += find.length - 1;
    }
  }
  return output;
}

let str100 = "Hello world";
let char100 = "ello";
let char200 = "ail";
console.log(replace(str100, char100, char200)); // => "Hail world"
console.log(replace(str100, "world", "Sponge-Bob")); // =>  "Hello Sponge-Bob"

console.log("-----");

// encrypt
// Skriv en funktion som gör om en sträng till rövarspråket

function encrypt(text) {
  const consonants = "bcdfghjklmnpqrstvwxz";
  const consonantsUpperCase = "BCDFGHJKLMNPQRSTVWXZ";
  let newerString = "";
  for (const char of text) {
    if (containsChar(consonants, char)) {
      newerString += char + "o" + char;
    } else if (containsChar(consonantsUpperCase, char)) {
      newerString += char + "O" + char;
    } else {
      newerString += char;
    }
  }
  return newerString;
}

let str1000 = "hej på dig";
console.log(encrypt(str1000)); // => "hohejoj popå dodigog"
console.log("-----");

// decrypt
// Skriv en funktion som gör om en sträng från rövarspråket till vanligt
//Funktionen kollar om varje tecken finns med bland konsonantern. Finns tecknet med så läggs 2 till på index-variabeln för att hoppa över o:et och den extra konsonanten.

function decrypt(text) {
  const consonants = "bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ";
  let newerString = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (containsChar(consonants, char)) {
      /*om tecknet är en konsonant...*/ i += 2; //...lägg till två på i för att hoppa över o:et och den extra konsonanten.
    }
    newerString += char;
  }
  return newerString;
}
let text = "totitottota";
console.log(decrypt(text)); // => "hej på dig"
