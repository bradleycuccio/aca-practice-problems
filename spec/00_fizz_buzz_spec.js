var fizzBuzz = require ('../src/00_fizz_buzz');

describe("Fizz Buzz", function() {
  it("outputs Fizz for numbers divisable by 3", function() {
    var result = fizzBuzz(3, 3);
    expect(result).toEqual(['Fizz']);
  });

  it("outputs Fizz for numbers divisable by 3", function() {
    var result = fizzBuzz(5, 5);
    expect(result).toEqual(['Buzz']);
  });

  it("outputs FizzBuzz for numbers divisable by 3 and 5", function() {
    var result = fizzBuzz(15, 15);
    expect(result).toEqual(['FizzBuzz']);
  });

  it("outputs an array of responses for a range of numbers", function() {
    var result = fizzBuzz(1, 100);
    expect(result.length).toEqual(47);
    expect(wordCount('FizzBuzz', result)).toEqual(6);
  });

});


// Test helper to count number of occurances of a word in an array
function wordCount(word, arr) {
  return arr.filter(function(item) {
    return item === word;
  }).length;
}
