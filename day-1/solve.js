const fs = require('node:fs');
const txt = fs.readFileSync('./input.txt');

async function main () {
  const lines = txt.toString().split('\n');
  const totals = [];
  let current = 0;
  lines.forEach((line) => {
    if (line === '') {
      totals.push(current);
      current = 0;
    } else {
      current += +line;
    }
  });
  totals.sort((a, b) => (a > b ? -1 : 1))
  console.log('Answer part 1:', totals[0]);
  const top3 = totals.slice(0, 3);
  const top3Total = top3.reduce((accum, a) => accum + a, 0);
  console.log('Answer part 2:', top3Total);
}

main().then((answer) => {
  console.log('All done');
}).catch(console.error)
