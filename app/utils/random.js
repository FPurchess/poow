// random integer in range
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// random element of an array
function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}