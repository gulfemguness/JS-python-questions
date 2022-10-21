// Question 4
// Write a function to return if the given year is a leap year. A leap year is divisible by 4, but not divisible by 100, unless it is also divisible by 400. The return should be boolean Type (true/false).

//     def is_leap_year(a_year):
//         .....

let leap = false

function is_leap_year(a_year){
    return a_year % 4 == 0 && a_year % 100 != 0 ? true : a_year % 100 == 0 && year % 400 != 0 ? false : a_year % 400 == 0 ? true : false
}

console.log(is_leap_year(a_year=2020))



// def is_leap(year):
//   leap = False

//   if (year % 4 == 0) and (year % 100 != 0): 
//       leap = True
//   elif (year % 100 == 0) and (year % 400 != 0):
//       leap = False
//   elif (year % 400 == 0):
//       leap = True
//   else:
//       leap = False
//   return leap

// year = int() 
// print(is_leap(year))