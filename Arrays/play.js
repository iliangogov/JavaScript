// var myCallback = function(err, data) {
//     if (err) throw err; // Check for the error and throw if it exists.
//     console.log('got data: '+data); // Otherwise proceed as usual.
//   };

//   var usingItNow = function(callback) {
//     callback(new Error('buug'), 'get it?'); // I dont want to throw an error, so I pass null for the error argument
//   };

//   usingItNow(myCallback);
function findbyid(id, callback) {
    if (callback) {
        console.log('ima kolbek')
        if (id !== 1) {
            return callback('greshka', null)
        } else {
            return callback(null, 'danni')
        }
    } else {
        return new Promise((resolve, reject) => {
            if (!id) {
                reject('greshka')
            }
            if (id !== 1) {
                resolve('obekt s danni')
            } else {
                resolve('nqma danni')
            }
        })
    }

}

findbyid(2, function (greshka, danni) {
    console.log(greshka, danni)
})

// findbyid(2).then((result) => {
//     console.log(result)
// }).catch(console.log)