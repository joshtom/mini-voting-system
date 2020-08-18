// All functions here
/**TODO
 * select plus and minus button
 * select input field
 * assign the input field with progress bar.
 * User must not be able to vote more than the initial value
 * Leader board should be displayed based on the value of each vote
 */

 function getElement(e) {
    return document.querySelector(e);
 }

 function getAllElementValue(value) {
    return document.querySelectorAll(value).value;
 }

 function getAllElement(e) {
     return document.querySelectorAll(e);
 }

 function getElementValue(value) {
    return document.querySelectorAll(value).value;
 }

 let VOTE_COUNT = 100;
 let VALUE_COUNT = [];




document.addEventListener('DOMContentLoaded', function Ready() {
    // Populate count value
    getElement("#vote_count").innerHTML = VOTE_COUNT;
    const allMinusButton = getAllElement("#minus");
    const allPlusButton = getAllElement("#plus");
    let allInputValue = getAllElement("input");

    

    // Select all minus button
    for (let minusButton of allMinusButton) {
        minusButton.addEventListener('click', () => {  })
    }

    // Select All plus button
    for (let plusButton of allPlusButton) {
        plusButton.addEventListener('click', function increaseInputValue() {
            for(let inputValue of allInputValue) {
                console.log(inputValue.id);
            }
        })
    }

})
