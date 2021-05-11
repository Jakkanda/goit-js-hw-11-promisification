import { delay, logger } from './js/task1';
import { randomIntegerFromInterval, makeTransaction, logSuccess, logError } from './js/task3';
// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

(makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError));

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
