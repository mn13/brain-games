#!/usr/bin/env node

import evenRun from '../brain-even-logic';
import askName from '../ask-name';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = askName();

evenRun(name);
