function updateInventory(arr1, arr2) {
  for (const newItem of arr2) {
    const index = arr1.findIndex(
      (invItem) => invItem[1].toLowerCase() === newItem[1].toLowerCase()
    );
    index === -1 ? arr1.push(newItem) : (arr1[index][0] += newItem[0]);
  }
  return arr1.sort((a, b) =>
    a[1].toLowerCase() < b[1].toLowerCase() ? -1 : 1
  );
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

let inv = updateInventory(curInv, newInv);
console.log(inv);
