const factorial = (num) => {
      if (num == 0) return 1;
      return num * factorial(num-1);
}


module.exports = {
      customfact: factorial,
      print: function () {console.log('custom function!')},
      data: 10
};