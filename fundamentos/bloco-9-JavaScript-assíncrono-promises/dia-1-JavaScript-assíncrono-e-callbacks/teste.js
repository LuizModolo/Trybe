let num = 10;

const fun1 = callback => {
  const result = callback;
  setTimeout(() => {
    return result;
  }, 3000);
}

const fun2 = () => {
  setTimeout(() => {
    num -= 3;
  }, 1500);
  return num;
}

console.log(fun1(fun2()))