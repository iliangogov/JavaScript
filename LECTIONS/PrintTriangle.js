/**
 * Created by Gogov on 6/22/2016.
 */
function printTriangle(n) {
    var line;
    n = +n;

    for (line = 1; line <= n; line += 1) {
        printLine(1, line);
    }

    for (line = n - 1; line >= 1; line -= 1) {
        printLine(1, line);
    }

    function printLine(start, end) {
        var line = "",
            i;
        start = +start;
        end = +end;
        for (i = start; i <= end; i += 1) {
            line += " " + i;
        }
        console.log(line);
    }
}
printTriangle(5);