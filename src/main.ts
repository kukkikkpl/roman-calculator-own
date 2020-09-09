export function romanToInt(roman: string) {
  const romanNumerals: {[key: string]: number} = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0, current = 0, previous = 0;
  for (const char of roman.split("").reverse()) {
    current = romanNumerals[char] || 0;
    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }
    previous = current;
  }
  return result;
}

export function intToRoman(num: number) {
  const romanNumerals: {[key: string]: number} = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  if (num > 3999)
    throw 'The number input must be less than 3999.'

  let romanStr = '';

  for (let roman in romanNumerals) {
    let value = romanNumerals[roman]
    const times = Math.floor(num / value)
    num -= (times * value);
    romanStr += Array(times+1).join(roman)
  }
  
  return romanStr
}

export function calculateRomanNumbers(firstNumber: string, secondNumber: string) {
  const firstNumberInt = romanToInt(firstNumber);
  const secondNumberInt = romanToInt(secondNumber);
  return intToRoman(firstNumberInt + secondNumberInt)
}
