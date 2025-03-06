//your JS code here. If required.
// script.js

// Function to create a promise that resolves after a random delay between 1 and 3 seconds
function createPromise(name) {
  const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name, time }), time * 1000);
  });
}

// Function to display the result in the table
function displayResult(results) {
  const tbody = document.getElementById("output");
  tbody.innerHTML = ""; // Clear the table

  let maxTime = 0;

  results.forEach((result, index) => {
    const row = `<tr>
                  <td>Promise ${index + 1}</td>
                  <td>${result.time}</td>
                </tr>`;
    tbody.innerHTML += row;
    maxTime = Math.max(maxTime, parseFloat(result.time));
  });

  const totalRow = `<tr>
                      <td>Total</td>
                      <td>${maxTime.toFixed(3)}</td>
                    </tr>`;
  tbody.innerHTML += totalRow;
}

// Initially display loading row
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("output");
  tbody.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

  const promises = [createPromise("Promise 1"), createPromise("Promise 2"), createPromise("Promise 3")];

  Promise.all(promises).then((results) => {
    displayResult(results);
  });
});
