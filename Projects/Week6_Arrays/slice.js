function first(arr, n) {
    if (arr == null) return [];

    if (n == null) return arr[0];

    if (n < 0) return [];

    return arr.slice(0, n);
}

let array = new Array(7, 9, 0, -2);

console.log(first(array));       // 7
console.log(first(array, 3));    // [7, 9, 0]
console.log(first(array, 6));    // [7, 9, 0, -2]
console.log(first(array, -3));   // []