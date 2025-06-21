let quantity = 1200;
let pricePerItem = 15;
let totalExpense;

if (quantity > 1000) {
    totalExpense = quantity * pricePerItem * 0.9; // 10% discount
} else {
    totalExpense = quantity * pricePerItem;
}
console.log("Total Expense:", totalExpense);
