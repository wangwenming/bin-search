module.exports = function(arr, search, comparator, low, high) {
    comparator = comparator || function(a, b) {return a == b ? 0 : (a > b ? 1 : -1)};
    low = low || 0;
    high = high || arr.length;

    // should work even on empty arrays
    var middle = 0;
    var compareResult = -1;

    while (low < high) {
        middle = (low + high) >> 1;
        console.log(middle);
        compareResult = comparator(search, arr[middle]);

        if (compareResult === 0) {
            return middle;
        } else if (compareResult < 0) {
            high = middle;
        } else {
            low = middle + 1;
        }
    }

    return -(middle + (compareResult < 0 ? 1 : 2));
}
