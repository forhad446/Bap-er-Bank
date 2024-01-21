const withdraw_btn = document.getElementById('withdraw-btn');
const deposit_btn = document.getElementById('deposit-btn');
const error = document.getElementById('error');

// For withdraw
withdraw_btn.addEventListener("click", function () {
    const currentBalance = getTotalAmount('total-balance');
    const amount = getInputValue('withdraw')
    if (currentBalance >= amount) {
        const currentWithdrawBalance = getTotalAmount('total-withdraw');
        const totalWithdraw = amount + currentWithdrawBalance;
        const totalBalance = currentBalance - amount;

        setValue('total-withdraw', totalWithdraw)
        setValue('total-balance', totalBalance)
    } else {
        error.innerText = 'You have not enough money!';
        error.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 5000);
    }

})
// For deposit
deposit_btn.addEventListener("click", function () {
    const amount = getInputValue('deposit')
    if (isNaN(amount)) {
        error.innerText = 'Please Type money!';
        error.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 5000);
        return false;
    }
    const currentWithdrawBalance = getTotalAmount('total-deposit');
    const currentBalance = getTotalAmount('total-balance');
    const totalDeposit = currentWithdrawBalance + amount;
    const totalBalance = currentBalance + amount;

    setValue('total-deposit', totalDeposit)
    setValue('total-balance', totalBalance)
})