/** 
 *  PROBLEM
 * 
 *  Receiving the time in hour and minutes, return de degree between two pointers
 *  Example:
 *  hour = 0
 *  minutes = 30
 *  degree = 180 
 * 
 *  hour = 00
 *  minutes = 45
 *  degree = 270
*/


function solution(hour, minutes) {
    //base degree for every minute and hour
    let minuteDegree = 360 / 60;
    let hourDegree = 360 / 12;

    //set hours and minutes to degree
    let hh = hour * hourDegree;
    let mm = minutes * minuteDegree;

    let diff = 0;

    //hour is bigger than minute means we need add the degree between the zero-point (360)
    //and then add again the minutes
    if (hh > mm)
        diff = Math.abs(hh - mm - 360)
    else
        diff = Math.abs(hh - mm)
    return diff
}

module.exports = solution;
