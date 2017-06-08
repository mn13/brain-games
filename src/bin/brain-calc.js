#!/usr/bin/env node

import runCalcGame from '../games/brain-calc-game';
import askName from '../';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');

const name = askName();

runCalcGame(name);
