let isSelfNum = new Array(10000).fill(0);
for (let num = 1; num <= 10000; num++) {
  let nextNum = num + String(num).split('').map(Number).reduce((acc, cur) => acc + cur);

  isSelfNum[nextNum - 1] = 1;
}

isSelfNum.map((num, idx) => {
  if (num !== 1) console.log(idx + 1);
});