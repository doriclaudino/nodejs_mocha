/** 
 *  PROBLEM
 * 
 *  Receiving the total spent and the money from a customer 
    calculate the total exchange in coins
    using an array of coins
    [1 dollar, 50 cents, quarter, dime, 5cents, 1cent]
    [3, 1, 1, 1, 1, 1] means (3.91) :   3x1 dollar, 
                                        1x50cents, 
                                        1x25cents,
                                        1x10cents,
                                        1x5cents,
                                        1x1cent


    Return [0, 0, 0, 0, 0, 0] if spent is greater than money
    Return [0, 0, 0, 0, 0, 0] if there's no exchange
    Return [0, 0, 0, 0, 0, 0] if there's no money
*/


/**
 * 
 * @param {*} spent 
 * @param {*} money 
 * @returns {*} Exchange in array of coins
 */

function solution(spent = 0, money = 0) {
    //array of possible coins in cents
    let cents = [100, 50, 25, 10, 5, 1];
    let coins = [0, 0, 0, 0, 0, 0];

    if (!money || spent > money)
        return coins;

    //get initial exchange in cents
    let exchange = money * 100 - spent * 100;

    let len = cents.length;
    let index = 0;

    //save in array the coins while coins and exchange remains
    for (index; (index < len && exchange); index++) {
        let c = Math.floor(exchange / cents[index]);
        coins[index] = c;
        exchange = exchange % cents[index];
    }
    return coins;
}

module.exports = solution;
//solution(6.45, 10.00) //[3, 1, 0, 0, 1, 0]
//solution(10, 10) 
//solution(10000000000, 10000000010) 