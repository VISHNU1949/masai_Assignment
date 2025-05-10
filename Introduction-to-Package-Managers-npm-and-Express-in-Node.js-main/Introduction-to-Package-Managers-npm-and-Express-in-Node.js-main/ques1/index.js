
import boxen from 'boxen';

const message = 'I am using my first external module!';
const title = 'Hurray!!!';

const classicBox = boxen(message, { title, padding: 1, margin: 1, borderStyle: 'classic' });
console.log(classicBox);


const singleDoubleBox = boxen(message, { title, padding: 1, margin: 1, borderStyle: 'singleDouble' });
console.log(singleDoubleBox);

const roundBox = boxen(message, {
  title,
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  backgroundColor: 'blue',
  borderColor: 'yellow',
});
console.log(roundBox);
