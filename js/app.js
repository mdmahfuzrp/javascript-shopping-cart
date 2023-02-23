// Sub Total Calculate
function subTotal(){
    const phonePriceElement = document.getElementById('phone-price');
    const phonePriceAmount = parseInt(phonePriceElement.innerText);

    const casePriceElement = document.getElementById('case-price');
    const casePriceAmount = parseInt(casePriceElement.innerText);

    const subTotalElement = document.getElementById('subtotal');
    const newSubTotal = phonePriceAmount + casePriceAmount;
    subTotalElement.innerText = newSubTotal;

    const taxElement = document.getElementById('tax');
    const newTaxAmount = newSubTotal * 0.1;
    const updateTax = newTaxAmount.toFixed(1);
    const taxAmount = parseFloat(updateTax);
    taxElement.innerText = taxAmount;

    const totalElement = document.getElementById('total');
    const newTotalAmount = newSubTotal + taxAmount;
    totalElement.innerText = newTotalAmount;
}

// Phone Plus Button
document.getElementById('phone-plus').addEventListener('click', function(){
    const newItemValue = updateItemNumber('phone-item', true);
    const newPrice = updatePhonePrice(newItemValue);
    subTotal();
})
// Phone Minus Button
document.getElementById('phone-minus').addEventListener('click', function(){
    const newItemValue = updateItemNumber('phone-item', false);
    const newPrice = updatePhonePrice(newItemValue);
    subTotal();
})
// Case Plus Button
document.getElementById('case-plus').addEventListener('click', function(){
    const newItemValue = updateItemNumber('case-item', true);
    const newPrice = updateCasePrice(newItemValue);
    subTotal();
})
// Case Minus Button
document.getElementById('case-minus').addEventListener('click', function(){
    const newItemValue = updateItemNumber('case-item', false);
    const newPrice = updateCasePrice(newItemValue);
    subTotal();
})

// Remove Item
document.getElementById('phone-remove').addEventListener('click', function(){
    const phoneCartItem = document.getElementById('phone-cart-item');
    phoneCartItem.style.display = 'none';
})
document.getElementById('case-remove').addEventListener('click', function(){
    const phoneCartItem = document.getElementById('case-cart-item');
    phoneCartItem.style.display = 'none';
})