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
 var store_vote_count = 0;
 
 let VALUE_COUNT = [];




document.addEventListener('DOMContentLoaded', function Ready() {
    // Populate count value
    let getVoteCount = getElement("#vote_count");
    getVoteCount.innerHTML = vote_count;
    let progressBar = getElement("#progressbar");
    const allMinusButton = getAllElement("#minus");
    const allPlusButton = getAllElement("#plus");
    let allInputValue = getAllElement("input");

    

    // Select all plus button
   for (let i = 0; i < allPlusButton.length; i++) {
        let counter = 5;
       allPlusButton[i].addEventListener("click", ()=> {
                if(vote_count > 0) {
                        allInputValue[i].value++;
                        store_vote_count +=1;
                        getVoteCount.innerHTML = --vote_count;
                        let progressPCT  = (store_vote_count / counter) * 100;
                        let remaningProgressPCT = 100 - progressPCT
                        progressBar.style.width = `${remaningProgressPCT}%` 

                        if(allInputValue[i] === store_vote_count || vote_count === 0){
                            getElement("#vote-warning").textContent = 'Vote Exhausted'
                            // Hide The text after 3 seconds
                            setTimeout(() => {
                                getElement("#vote-warning").textContent = ''
                            }, 3000)
                             // console.log('Input value', allInputValue[i].value);
                        // console.log('Vote Count', vote_count);
                        // console.log('Store Vote count', store_vote_count);
                        } 
                }
                else {
                    alert('You are sturborn');
                }
       })
   }

   // Select all minus button
   for (let i = 0; i < allMinusButton.length; i++) {
    let counter = 5;
   allMinusButton[i].addEventListener("click", ()=> {
            if(vote_count < 5) {
                if(allInputValue[i].value <= 0) {
                    alert('Cannot be less than 0');
                }
                else {
                    allInputValue[i].value--;
                    store_vote_count -= 1;
                    getVoteCount.innerHTML = ++vote_count;
                    let progressPCT  = (store_vote_count / counter) * 100;
                    let remaningProgressPCT = 100 - progressPCT
                    progressBar.style.width = `${remaningProgressPCT}%` 
                } 
            }
   })
}


})
