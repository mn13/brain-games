#!/usr/bin/env node

import runEvenGame from '../games/brain-even-logic';
import askName from '../';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = askName();

runEvenGame(name);
