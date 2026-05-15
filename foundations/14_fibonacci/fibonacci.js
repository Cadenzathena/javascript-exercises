const fibonacci = function(num) {
    const fibonacciArr = [1, 1];
    let fibonacciIndexer = 0;
    num = +num;

    switch (num) {
        case 0:
            return 0;

        case 1 || 2:
            return 1;
    }

    switch (Math.sign(num)) {
        case -1:
            return "OOPS"
    }

    for (let i = 2 ; i <= num ; i++) {
        fibonacciArr.push(fibonacciArr[0 + fibonacciIndexer]
                        + fibonacciArr[1 + fibonacciIndexer]);

        fibonacciIndexer++;
    }

    return fibonacciArr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
