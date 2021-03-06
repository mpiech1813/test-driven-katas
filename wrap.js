function wrap(string, colNum) {
  //   //   const wordArr = string.split(' ');
  //   //   return wordArr
  //   //     .map(function (word) {
  //   //       if (string.indexOf(word) > colNum) {
  //   //         colNum *= 2;
  //   //         return `\n ${word}`;
  //   //       } else {
  //   //         return word;
  //   //       }
  //   //     })
  //   //     .join(' ');
  let spaceIdx = string.lastIndexOf(' ', 20) + 1;
  let finalString = string.slice(0, spaceIdx);
  return finalString;
}

module.exports = wrap;
