/**
 * Created by Gogov on 7/1/2016.
 */

function solve(args) {
    var target = (args[0] + '').toLowerCase(),
        text = (args[1] + '').toLowerCase(),
        counter = 0;

    var index = text.indexOf(target);
    while (index >= 0) {
        counter += 1;
        index = text.indexOf(target, index + 1);
    }

    console.log(counter);
}
//solve(['in','We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'])
