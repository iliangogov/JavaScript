/**
 * Created by Gogov on 7/2/2016.
 */

function Solve(args) {

    function inRange(pos, range) {
        return 0 <= pos && pos < range;
    }

    var nmkStr = args[0].split(" ");
    var n = parseInt(nmkStr[0]);
    var m = parseInt(nmkStr[1]);
    var d = parseInt(nmkStr[2]);
    var posStr = args[1].split(" ");
    var row = parseInt(posStr[0]);
    var column = parseInt(posStr[1]);
    var dirsArr = args.slice(2);
    var dirs = [dirsArr.length];
    for (var i = 0; i < dirsArr.length; i++) {
        var dir = dirsArr[i].split(" ");
        dirs[i] = {
            row: parseInt(dir[0]),
            column: parseInt(dir[1])
        }
    }

    var used = {};
    var sum = 0;
    var dir = 0;
    var count = 0;
    while (true) {
        if (!inRange(row, n) || !inRange(column, m)) {
            console.log("escaped " + sum);
            break;
        }
        if (used[row * m + column]) {
            console.log("caught " + count);
            break;
        }
        count++;
        used[row * m + column] = true;
        sum += row * m + column + 1;
        row += dirs[dir].row;
        column += dirs[dir].column;
        dir++;
        dir %= dirs.length;
    }
}

/*function solve(lines) {
    var valley = lines[0]
        .split(',')
        .map(Number);

    function isOutside(valley, index) {
        return valley[index] === undefined;
    }

    function coinsForPattern(valley, pattern) {
        var visited = [],
            coins = 0,
            index = 0,
            patternIndex = 0;

        // continue while not visited and inside valley
        while(!visited[index] && !isOutside(valley, index)) {
            coins += valley[index];
            visited[index] = true;

            index += pattern[patternIndex];

            patternIndex = (patternIndex + 1) % pattern.length;
        }

        return coins;
    }

    var results = [];

    for(var i = 2; i < lines.length; i += 1) {
        var pattern = lines[i]
            .split(',')
            .map(Number);

        results.push(coinsForPattern(valley, pattern));
    }

    var maxCoins = Math.max.apply(null, results);

    return maxCoins;

}*/

Solve(['6 7 3','0 0', '2 2', '-2 2', '3 -1']);