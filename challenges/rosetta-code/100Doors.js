function getFinalOpenedDoors(numDoors) {
  const doors = Array.from(Array(numDoors), (el, idx) => [idx + 1, 0]);
  for (let itr = 1; itr <= numDoors; itr++) {
    doors.forEach((el) => {
      if (!(el[0] % itr)) {
        el[1] ? (el[1] = 0) : (el[1] = 1);
      }
    });
  }
  return doors.filter((el) => el[1]).map((el) => el[0]);
}
