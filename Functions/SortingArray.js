
function solve(args) {
    var lines = (args[0] + '')
            .split('\n'),
        numbers = lines[1]
            .split(' ')
            .map(Number);

    console.log(sortAscending(numbers).join(' '));


    function getMaxInRange(arr, start, end) {
        var i,
            len = arr.length,
            starter = start || 0,
            ender = end || len,
            max = arr[starter];

        for (i = starter; i < ender - 1; i += 1) {
            if (arr[i] < arr[i + 1]) {
                max = arr[i + 1];
            }
        }
        return max;

    }

    function sortAscending(arr) {
        var sorted = [],
            temp = [].concat(arr);

        for (var element in arr) {
            sorted.unshift(getMaxInRange(temp));
            var index = temp.indexOf(getMaxInRange(temp));
            temp.splice(index, 1);
        }
        return sorted;

    }

    function sortDescending(arr) {
        var sorted = [],
            temp = [].concat(arr);

        for (var element in arr) {
            sorted.push(getMaxInRange(temp));
            var index = temp.indexOf(getMaxInRange(temp));
            temp.splice(index, 1);
        }
        return sorted;

    }

}
//solve(['6\n-2 5 8 33 2 34']);