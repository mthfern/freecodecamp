function pairwise(arr, arg) {
  const findSum = (arr, arrIdx, arg) => {
    const pairs = [];
    const remainder = arr.slice();
    const firstItem = remainder.splice(0, 1)[0];
    const firstIndex = arrIdx.splice(0, 1)[0];

    for (const item of remainder) {
      if (firstItem + item === arg) {
        const fIndex = remainder.indexOf(item);
        pairs.push([firstIndex, arrIdx[fIndex]]);
        remainder.splice(fIndex, 1);
        arrIdx.splice(fIndex, 1);
        break;
      }
    }

    //console.log(arr, firstItem, remainder, arrIdx, pairs);

    if (remainder.length > 1) {
      return pairs.concat(findSum(remainder, arrIdx, arg));
    } else {
      return pairs;
    }
  };
  const arrIdx = arr.map((el, idx) => idx);
  const arrPairs = findSum(arr, arrIdx, arg);

  console.log(arr, arrPairs);

  return arrPairs.length > 0 ? arrPairs.flat().reduce((a, c) => a + c) : 0;
}

pairwise([1, 4, 2, 3, 0, 5], 7);
pairwise([1, 4, 2, 3, 1, 0], 3);
pairwise([5, 5, 5, 5, 5, 5], 10);
