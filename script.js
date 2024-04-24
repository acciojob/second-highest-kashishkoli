//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    // Sort the array in descending order
    arr.sort((a, b) => b - a);

    // Find the second highest element
    let secondHighest = arr[1];

    return secondHighest;
}
