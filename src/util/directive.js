import Vue from 'vue'
// Vue.directive('focus', {
//   inserted: function (el) {
//     el.focus()
//   },
//   update: function (el) {
//     el.focus() 
//   }
// })

// 金额格式化
Vue.filter('fmoney', function(value) {
  if (!value) { return ''}
	var f_x = parseFloat(value);
  if (isNaN(f_x)) {
    alert('function:changeTwoDecimal->parameter error');
    return false;
  }
  var f_x = Math.round(value * 100) / 100;
  var s_x = f_x.toString();
  var pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += '.';
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += '0';
  }
  return s_x;
})

Vue.filter('numHandle', function(n) {
  if (!n) { return ''}
  let smallNum = changeTwoDecimal_f(n)
  let numArr = smallNum.split(".")
  return numArr[0]

})

Vue.filter('numHandle2', function(n) {
  if (!n) { return ''}
  let smallNum = changeTwoDecimal_f(n)
  let numArr = smallNum.split(".")
  return numArr[1]

})
function changeTwoDecimal_f(x) {
  var f_x = parseFloat(x);
  if (isNaN(f_x)) {
    alert('function:changeTwoDecimal->parameter error');
    return false;
  }
  var f_x = Math.round(x * 100) / 100;
  var s_x = f_x.toString();
  var pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += '.';
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += '0';
  }
  return s_x;
}