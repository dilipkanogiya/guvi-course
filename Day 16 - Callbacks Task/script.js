// Countdown function 
const timer = (num, callback) => {
    let result = document.getElementById("result");
    if (num >= 0) {
        setTimeout(() => {
        // console.log(num);
        result.innerText = num;
        timer(num - 1, callback);
        }, 1000);
    } else {
        callback();
    }
};

// Start the timer
timer(10, () => {
    result.innerText = "Happy Independence Day";
    // console.log("Happy Independence Day");
});  