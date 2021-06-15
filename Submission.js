const findSum = function(array) {
  let total = 0
  for (let i = 0; i < array.length; i++)
    total += array[i];
    return total;
};

const findFrequency = function(array) {
  let counts = {};
  let mostCount = 1;
  let most;
  let leastCount = array.length;
  let least;
  for (let i = 0; i < array.length; i++)
    counts[array[i]] = (counts[array[i]] || 0) + 1;
  for (let j = 0; j < array.length; j++) {
    if (counts[array[j]] > mostCount) {
      mostCount = counts[array[j]];
      most = array[j];
    }
    if (counts[array[j]] <= leastCount) {
      leastCount = counts[array[j]];
      least = array[j];
    }
  }
  const mostAndLeast = {
    most: most,
    least: least
  };
  return mostAndLeast;
};

const isPalindrome = function(str) {
  const string = str.toLowerCase();
  const reverseString = string.split('').reverse().join('');
  return string === reverseString; 
};

const largestPair = function(array) {
  let largest = 0;
  for (let i = 0; i < array.length - 1; i++)
    if (array[i] * array[i+1] > largest)
      largest = array[i] * array[i+1];
  return largest;    
};

const removeParenth = function(str) {
  let array = str.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '(' || array[i] === ')')
      array.splice(i, 1);
  }
  array = array.join('');
  return array;
}

const scoreScrabble = function(str) {
  let score = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'l':
      case 'n':
      case 'r':
      case 's':
      case 't':
        score += 1;
        break;
      case 'd':
      case 'g':
        score += 2;
        break;
      case 'b':
      case 'c':
      case 'm':
      case 'p':
        score += 3;
        break;
      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
        score += 4;
        break;
      case 'k':
        score += 5;
        break;
      case 'j':
      case 'x':
        score += 8;
        break;
      case 'q':
      case 'z':
        score += 10;
        break;
    }
  }
  return score;
};
