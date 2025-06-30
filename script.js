const payments = [
  { customer: "Alice", amount: 120, status: "Paid" },
  { customer: "Bob", amount: 90, status: "Pending" },
  { customer: "Charlie", amount: 200, status: "Paid" },
  { customer: "Diana", amount: 150, status: "Failed" },
];

let totalRevenue = 0;
let totalPayments = payments.length;

const tableBody = document.getElementById("table-body");
payments.forEach(payment => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${payment.customer}</td>
    <td>$${payment.amount}</td>
    <td>${payment.status}</td>
  `;
  tableBody.appendChild(row);

  if (payment.status === "Paid") {
    totalRevenue += payment.amount;
  }
});

document.getElementById("revenue").textContent = `$${totalRevenue}`;
document.getElementById("payments").textContent = totalPayments;
