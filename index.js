const arr = [1, 2, 3];
const obj = {
  arr: [5, 6, 7],
  lastNo: function () {
    return this.arr[arr.length - 1];
  },
  first: () => {
    return this.arr[0];
  },
};

console.log(obj.lastNo());
console.log(obj.first());