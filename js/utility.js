// Update Phone Price
function updatePhonePrice(newItemValue){
    const priceElement = document.getElementById('phone-price');
    const newPrice = newItemValue * 1219;
    priceElement.innerText = newPrice;
    return newPrice;
}

// Update Case Price
function updateCasePrice(newItemValue){
    const priceElement = document.getElementById('case-price');
    const newPrice = parseInt(newItemValue * 59);
    priceElement.innerText = newPrice;
    return newPrice;
}

// Update Phone and case Item number
function updateItemNumber(element, isTrue){
    const itemElement = document.getElementById(element);
    let previousItemValue = parseInt(itemElement.value);
    if(isTrue === true){
        previousItemValue++;
    }
    else{
        if(previousItemValue <= 0){
            previousItemValue = 0;
        }
        else{
            previousItemValue--;
        }
    }
    itemElement.value = previousItemValue;
    return previousItemValue;
}