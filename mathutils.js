class MathUtils {
  static sum (a, b) {
    // console.log(a + ' + ' + b)
    return a + b
  }

  static sumOfThree (a, b, c) {
    // console.log(a + ' + ' + b + ' + ' + c)
    return a + b + c
  }

  static getOnePercent (a) {
    // console.log('One percent of ' + a + ' is: ' + a / 100)
    return a / 100
  }

  static addVAT (value) {
    // console.log('Price without VAT: ' + value)
    // console.log('Price with VAT: ' + value * 1.24)
    return value * 1.24
  }

  static countValueWithoutVAT (value) {
    // console.log('Price with VAT: ' + value)
    // console.log('Price without VAT: ' + value / 124 * 100)
    return value / 124 * 100
  }

  static subtract (a, b) {
    // console.log(a + ' - ' + b)
    return 'Result is ' + (a - b)
  }

  static divide (a, b) {
    return (a / b)
  }

  static multiply (a, b) {
    console.log(a + ' * ' + b)
    return 'Result is ' + (a * b)
  }

  static abs (a) {
    if (a >= 0) {
      return a
    } else {
      return a * -1
    }
  }

  static hypotenuse (stem, height) {
    return Math.sqrt(Math.pow(stem, 2) + Math.pow(height, 2))
  }

  static stemOrHeight (hypotenuse, side) {
    return Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(side, 2))
  }

  static rightTriagleArea (stem, height) {
    return stem * height / 2
  }

  static circumference (radius) {
    return 2 * radius * Math.PI
  }

  static circleRadius (circumference) {
    return circumference / (2 * Math.PI)
  }

  static circleArea (radius) {
    return Math.PI * Math.pow(radius, 2)
  }

  static poweroftwo (a) {
    console.log('Number 2 to the power of ' + a)
    return 'Result is ' + Math.pow(2, a)
  }

  static sumInner (a) {
    const inner = (b) => a + b
    return inner
  }

  static delayedSum (a, b, c) {
    return a + b + c
  }
}

module.exports = MathUtils
