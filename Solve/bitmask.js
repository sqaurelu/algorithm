// zero left padding
const n = 5;
let nth_bit = 1 << n;

for (let i = 0; i < Math.pow(2, n); ++i) {
  console.log((i | nth_bit).toString(2).substring(1));
}
