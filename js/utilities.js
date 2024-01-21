function getInputValue(id) {
    const amount_str = document.getElementById(id).value;
    const amount = parseInt(amount_str);
    document.getElementById(id).value = '';
    return amount;
}

function getTotalAmount(id) {
    const totalAmount_str = document.getElementById(id).innerText;
    const totalAmount = parseInt(totalAmount_str);
    return totalAmount;
}

function setValue(id, amount) {
    document.getElementById(id).innerText = amount;
}

// number validation 
function validateAndToggleBox(input) {
    // Remove non-numeric characters from the input
    input.value = input.value.replace(/[^0-9]/g, '');

}