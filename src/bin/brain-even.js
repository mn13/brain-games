#!/usr/bin/env node

import askName from '../ask-name';
import evenRun from '../even-logic';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = askName();

const result = evenRun() ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;

console.log(result);
