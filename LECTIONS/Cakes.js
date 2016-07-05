/**
 * Created by Gogov on 7/1/2016.
 */
function solve(params) {
    var count1,
        count2,
        count3,
        price,
        s = params[0],
        c1 = params[1],
        c2 = params[2],
        c3 = params[3],
        bestSpent = 0;


    for (count1 = 0; count1 <= (s ) + 1; count1++) {
        for (count2 = 0; count2 <= (s ) + 1; count2++) {
            for (count3 = 0; count3 <= (s ) + 1; count3++) {
                price = (count1 * c1) + (count2 * c2) + (count3 * c3);
                if (price <= s) {
                    // if (price >= answer) console.log(s - price, i1, i2, i3);
                    bestSpent = Math.max(bestSpent, price);
                }
            }
        }
    }


    console.log( answer);
    
}
solve([110,13,15,17]);
