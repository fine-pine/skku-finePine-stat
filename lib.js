function sum(numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
  return sum(numbers) / numbers.length;
}

function max(numbers) {
  return numbers.reduce((max, curr) => (max > curr ? max : curr), 0);
}

function med(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  if (numbers.length % 2 === 0)
    return avg([numbers[numbers.length / 2 - 1], numbers[numbers.length / 2]]);
  else return numbers[(numbers.length - 1) / 2];
}

function iqr(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });

  if (numbers.length % 2 === 0) {
    q1 = med(numbers.slice(0, numbers.length / 2));
    q3 = med(numbers.slice(numbers.length / 2, numbers.length));
  } else {
    q1 = med(numbers.slice(0, (numbers.length - 1) / 2));
    q3 = med(numbers.slice((numbers.length + 1) / 2, numbers.length));
  }
  return Math.abs(q3 - q1);
}

function outlier(numbers) {
  origin = numbers.map((item) => item);

  numbers.sort(function (a, b) {
    return a - b;
  });

  if (numbers.length % 2 === 0) {
    q1 = med(numbers.slice(0, numbers.length / 2));
    q3 = med(numbers.slice(numbers.length / 2, numbers.length));
  } else {
    q1 = med(numbers.slice(0, (numbers.length - 1) / 2));
    q3 = med(numbers.slice((numbers.length + 1) / 2, numbers.length));
  }
  iqr = Math.abs(q3 - q1);

  outlier = origin.filter(
    (num) => num < q1 - 1.5 * iqr || num > q3 + 1.5 * iqr
  );

  if (outlier.length > 0) return outlier;
}

module.exports = {
  sum,
  avg,
  max,
  med,
  iqr,
  outlier,
};
