const calculate = document.querySelector("#calculate");
calculate.addEventListener("click", function() {
  const amount = document.querySelector("#amount").value;
  const percentage = document.querySelector("#percentage").value;
  const people = document.querySelector("#people").value;
  const tip = (amount * percentage / 100) / people;
  document.querySelector("#tip").innerHTML = `Tip per person: $${tip.toFixed(2)}`;
});
