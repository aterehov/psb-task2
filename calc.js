let exp = "";
const nums = "0123456789";
const signs = "+-*/.";

function refresh_exp() {
  document.getElementById("exp").innerText = exp;
}

function check_add_exp(char) {
  return (
    (nums + "-").includes((exp + char)[0]) &&
    (!signs.includes(char) || !signs.includes(exp[exp.length - 1]))
  );
}

function add_to_exp(char) {
  if (exp == "Ошибка") {
    exp = "";
  }
  if (check_add_exp(char)) {
    exp += char;
  } else if (signs.includes(exp[exp.length - 1])) {
    exp = exp.slice(0, exp.length - 1) + char;
  }
  refresh_exp();
}

function exp_eval() {
  exp = eval(exp);
  if (exp == undefined || exp == NaN || exp == Infinity) {
    exp = "Ошибка";
  }
  refresh_exp();
}

function clear_exp() {
  exp = "";
  refresh_exp();
}

function backspace() {
  if (exp == "Ошибка") {
    exp = "";
  } else {
    exp = exp.slice(0, exp.length - 1);
  }
  refresh_exp();
}

refresh_exp();
