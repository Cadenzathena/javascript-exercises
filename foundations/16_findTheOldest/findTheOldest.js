const findTheOldest = function(arr) {
    arr.map((item) => {
        if (!item.yearOfDeath) {
            item.yearOfDeath = new Date().getFullYear();
        }
    })

    let ageArr = arr.map((item) => item.yearOfDeath - item.yearOfBirth);

    return arr[ageArr.indexOf(Math.max(...ageArr))];
};

// Do not edit below this line
module.exports = findTheOldest;
