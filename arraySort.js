const array1 = ["a", 10, "b", "hello", 122, 15];

function sortArray(array) {
    const arrayS = [];
    const arrayN = [];

    for (x in array) {
        if (typeof array[x] === 'number') {
            arrayN.push(array[x]);
        } else {
            arrayS.push(array[x]);
        }
    }

    const newArrayN = [...arrayN];
    newArrayN.sort(function (a, b) { return b - a });
    const biggestN = newArrayN[0];
    return [arrayS, arrayN, biggestN];
}

console.log(sortArray(array1)); // [ [ 'a', 'b', 'hello' ], [ 10, 122, 15 ], 122 ]