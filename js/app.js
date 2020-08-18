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

 var vote_count = 5;
 
 let VALUE_COUNT = [];




document.addEventListener('DOMContentLoaded', function Ready() {
    // Populate count value
    let getVoteCount = getElement("#vote_count");
    getVoteCount.innerHTML = vote_count;
    let progressBar = getElement("#progressbar");
    const allMinusButton = getAllElement("#minus");
    const allPlusButton = getAllElement("#plus");
    let allInputValue = getAllElement("input");

    

    // Select all minus button
   for (let i = 0; i < allPlusButton.length; i++) {
        let counter = 5;
       allPlusButton[i].addEventListener("click", ()=> {
                allInputValue[i].value++;
                getVoteCount.innerHTML = --vote_count;
                progressBar.style.width = `${--counter}%`
                if(vote_count < 0) {
                    return
                }
       })
   }
})
