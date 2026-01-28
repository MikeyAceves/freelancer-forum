/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function freelancerIndex() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));
  return { name, occupation, rate };
}
const freelancers = Array.from({ length: NUM_FREELANCERS }, freelancerIndex);
console.log(freelancers);

function getAverageRate() {
  let addedRates = freelancers.reduce(
    (accumulator, currentRate) => accumulator + currentRate.rate,
    0,
  );
  const average = addedRates / freelancers.length;
  return average;
}
const averageRate = getAverageRate();

function SingleFreelancer({ name, occupation, rate }) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>$${rate}</td>
  `;
  return $tr;
}
function MultipleFreelancers() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(SingleFreelancer);
  $tbody.replaceChildren(...$freelancers);
  return $tbody;
}
function AverageRate() {
  const $p = document.createElement("p");
  $p.innerHTML = `
  <p> The average rate is $${averageRate.toFixed(2)}.</p>`;
  return $p;
}
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="MultipleFreelancers"></tbody>
    </table>
  `;
  $app.querySelector("AverageRate").replaceWith(AverageRate());
  $app.querySelector("#MultipleFreelancers").replaceWith(MultipleFreelancers());
}
render();
