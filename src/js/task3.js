const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const logSuccess = ({ transaction, time }) => {
  console.log(`Transaction ${transaction.id} processed in ${time} ms`);
};

const logError = ({ id }) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ transaction, time: delay });
      }
      reject(transaction);
    }, delay);
  });
};

export { randomIntegerFromInterval, makeTransaction, logSuccess, logError };
