
let expenses = [];
let totalAmount = 0;

// Variable Declaration:
const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const expenseTableBody = document.getElementById("expense-table-body");
const totalAmountSell = document.getElementById("total-amount");

// Add Event Listener for the Add Button:
addBtn.addEventListener("click", function () {
  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  // Validation for inputs:
  if (category === "") {
    alert("Please select a category.");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }
  if (date === "") {
    alert("Please select a date.");
    return;
  }

  // Add expense to the array:
  const expense = { category, amount, date };
  expenses.push(expense);

  // Update total amount
  totalAmount += amount;
  totalAmountSell.textContent = totalAmount;

  // Add a new row to the table
  const newRow = expenseTableBody.insertRow();
  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;

  // Create and append the delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteCell.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    // Remove the expense from the array
    const index = expenses.indexOf(expense);
    if (index !== -1) {
      expenses.splice(index, 1);
    }

    // Update total amount
    totalAmount -= expense.amount;
    totalAmountSell.textContent = totalAmount;

    // Remove the row from the table
    expenseTableBody.removeChild(newRow);
  });

  // Clear input fields
  categorySelect.value = "";
  amountInput.value = "";
  dateInput.value = "";
});
