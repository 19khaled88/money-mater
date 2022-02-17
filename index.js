function calculateIncome(income){
    const totalIncome = document.getElementById(income);
    const incomeValue = totalIncome.value;
    return incomeValue;
}
function calculateExpenses(costs){
    let expenses = [0]
    for(i = 0; i < costs.length; i++){
         const expense = document.getElementById(costs[i]);
         const singleExpense = parseFloat(expense.value);
         expenses = parseFloat(expenses) + singleExpense  
    }
    return expenses;  
}

document.getElementById('calculate').addEventListener('click',function(){
    
    // income calculation
    const totalIncome = calculateIncome('income');

    // all expenses calculation
    const costs = ['food','rent','clothes']
    const totalCost = calculateExpenses(costs);

    //income left after expenses 
    const calculation = totalIncome - totalCost;

    //total expenses demonstrate
    const totalExepense = document.getElementById('totalExpenses');
    totalExepense.innerText = totalCost;

    //total balance after expenses
    const balance = document.getElementById('monthlyBalance');
    balance.innerText = calculation;
   
});

document.getElementById('savingButton').addEventListener('click',function(){

        // income calculation
        const totalIncome = calculateIncome('income');

        // all expenses calculation
        const costs = ['food','rent','clothes']
        const totalCost = calculateExpenses(costs);

        //savings calculation
        const savings = document.getElementById('savePercentage').value;
        const savingCal = (totalIncome * savings) / 100;
        const savingAmount = document.getElementById('savingAmount');
        savingAmount.innerText = savingCal;


        //remaining balance calculation
        const remainingBalanceText = document.getElementById('remainingAmount');
        const remainingBalance = totalIncome - (totalCost + parseFloat(savingAmount.innerText));
        remainingBalanceText.innerText = remainingBalance;
});