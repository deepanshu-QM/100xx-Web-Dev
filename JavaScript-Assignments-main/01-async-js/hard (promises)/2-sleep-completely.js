/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let r = new Promise((resolve) => {
        const start = Date.now();
        while(Date.now() - start < milliseconds){
            //Js Thread Busy 
        }
        resolve();
    })
    return r;
}
module.exports = sleep;




/*Second Approch  ----------------------->

function sleep(milliseconds){
    let p = new Promise((resolve) => {
        const Intial = performance.now();
        while(performance.now() - Intial < milliseconds){
            //Busy the Thread
        }
        resolve();
    });
    return p;
}

sleep(9000).then(() => {
    console.log("Program SucessFully Runs");
});

module.exports = sleep;
*/