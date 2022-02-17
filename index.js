

function calculateIncome(income){
    const totalIncome = document.getElementById(income);
    const incomeValue = totalIncome.value;
    var noIncome = 0;
    if(incomeValue === ""){
        var error = document.getElementById(income+'-error')
        error.innerHTML = "<span style='color: red;'>"+
        "Please enter a valid Income figure</span>"
        setTimeout(()=>{
            error.innerHTML = ""
        },3000)
        return noIncome;
    }else{
        return incomeValue;
    }
    
    
}
function calculateExpenses(costs){
    
    const foodCost = document.getElementById('food').value
    const rentCost = document.getElementById('rent').value
    const clothesCost = document.getElementById('clothes').value
    if(foodCost == ''){
        var error = document.getElementById('errors')
        error.innerHTML = "<span style='color: red;'>"+
        "All expenses field must no empty</span>"
        setTimeout(()=>{
            error.innerHTML = ""
        },3000)
    return expenses =  00;
    }else if(rentCost == ''){
        var error = document.getElementById('errors')
        error.innerHTML = "<span style='color: red;'>"+
        "All expenses field must no empty</span>"
        setTimeout(()=>{
            error.innerHTML = ""
        },3000)
        return expenses =  00;
    }else if(clothesCost == ''){
        var error = document.getElementById('errors')
        error.innerHTML = "<span style='color: red;'>"+
        "All expenses field must no empty</span>"
        setTimeout(()=>{
            error.innerHTML = ""
        },3000)
        return expenses =  00;
    }
    else{
        let expenses = [0];
        for(i = 0; i < costs.length; i++){
            const expense = document.getElementById(costs[i]);
            const singleExpense = parseFloat(expense.value);
            expenses = parseFloat(expenses) + singleExpense  
        }
        return expenses;
    }
  
}


document.getElementById('calculate').addEventListener('click',function(){

        // income calculation
        const totalIncome = calculateIncome('income');
       
        // all expenses calculation
        const costs = ['food','rent','clothes']
        const totalCost = calculateExpenses(costs);
        
        //income left after expenses 
        const calculatedBalance = totalIncome - totalCost;

        //balance and total expenses demonstrate
        if(totalIncome  && totalCost  && totalCost > totalIncome){
            var error = document.getElementById('totalExpenses-error')
            error.innerHTML = "<span style='color: red;'>"+
            "Expense must not exceed Total Income</span>"
            setTimeout(()=>{
                error.innerHTML = ""
            },3000)

            //balance after executing the cost
            const balance = document.getElementById('monthlyBalance');
            balance.innerText = totalIncome;

        }else{
            const totalExepense = document.getElementById('totalExpenses');
            totalExepense.innerText = totalCost;

            //balance after executinv cost
            const balance = document.getElementById('monthlyBalance');
            balance.innerText = calculatedBalance;
        }
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

        if( savingCal > (totalIncome - totalCost)){
            var error = document.getElementById('savings-error')
            error.innerHTML = "<span style='color: red;'>"+
            "Savings must not exceed Total Balance</span>"
            setTimeout(()=>{
                error.innerHTML = ""
            },3000)
            const savingAmount = document.getElementById('savingAmount');
            savingAmount.innerText = 0;

        }else{
            const savingAmount = document.getElementById('savingAmount');
            savingAmount.innerText = savingCal;
        }
       


        //remaining balance calculation
        const remainingBalanceText = document.getElementById('remainingAmount');
        const remainingBalance = totalIncome - (totalCost + parseFloat(savingAmount.innerText));
        remainingBalanceText.innerText = remainingBalance;
});