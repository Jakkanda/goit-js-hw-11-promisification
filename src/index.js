import { delay, logger } from './js/task1';
import { users, toggleUserState, logger1 } from './js/task2';
import { randomIntegerFromInterval, makeTransaction, logSuccess, logError } from './js/task3';
// Вызовы функции для проверки
//Task1
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
//Task2
toggleUserState(users, 'Mango').then(logger1);
toggleUserState(users, 'Lux').then(logger1);
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
//Task3
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);

