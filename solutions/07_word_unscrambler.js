// For this problem we are tasked with taking a string, and an array of strings.
// From that array we should pull out all strings that our base string could comprise.
//
// The approach I took here was to define a helper function that can sort a word,
// then filter the array of strings, based on weather
// or not our base string could make that word

function wordUnscrambler(word, dictionary) {
  // User our helper function to sort our base word.
  var sortedWord = sortWord(word);

  // Return a filtered array of words that, when sorted,
  // match our sorted base word
  return dictionary.filter(function(word) {
    return sortedWord === sortWord(word);
  });
}

// Split a word into an array, sort that word, then return a string
function sortWord(word) {
  return word.split('').sort().join('');
}
