/*
13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. 
Instead, the number four is written as IV. Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].

*/

function romanToInt(s) {
  // Создание карты для хранения значений римских цифр
  // Create a map to store the values of the Roman numerals
  const romanMap = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
  ]);

  let result = 0;
  let prev = 0;

  // Итерация по строке справа налево
  // Iterate over the string from right to left
  for (let i = s.length - 1; i >= 0; i--) {
      let current = romanMap.get(s[i]);

      // Если текущая римская цифра меньше предыдущей, вычитаем ее значение из результата, вместо того чтобы добавлять его
      // If the current Roman numeral is less than the previous one, subtract its value from the result instead of adding it
      if (current < prev) {
          result -= current;
      } else {
          result += current;
      }

      prev = current;
  }

  // Возвращаем результат
  // Return the result
  return result;
}

/*

This solution ensures that the algorithm runs in O(n) time complexity and uses O(1) space complexity. 
The map lookup operation is constant time, so the overall time complexity is linear in the length of the string.

Это решение гарантирует, что алгоритм работает с временной сложностью O(n) и использует пространственную сложность O(1).
Операция поиска по карте занимает постоянное время, поэтому общая временная сложность линейно зависит от длины строки.

*/
