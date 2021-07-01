var deleteDuplicates = function (S, K) {
  for (let i = 1, count = 1; i < S.length; i++) {
    S.charAt(i) === S.charAt(i - 1) ? count++ : (count = 1);
    if (count === K)
    //recursively make K removals until we can't
      S = deleteDuplicates(S.slice(0, i - K + 1) + S.slice(i + 1), K);
  }
  return S;
};

var string1 = "abbaca";
var string2 = "xyaaya";
const removals = 2;
console.log(deleteDuplicates(string1, removals));
console.log(deleteDuplicates(string2, removals));
