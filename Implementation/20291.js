let [_, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let dict = {};

input.map(file => {
  const extension = file.split('.')[1];

  if (dict[extension] !== undefined) dict[extension] += 1;
  else dict[extension] = 1;
});

Object.keys(dict).sort().forEach((extension) => console.log(`${extension} ${dict[extension]}`));