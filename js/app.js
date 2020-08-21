// All functions here
/**TODO
 * select plus and minus button ✔
 * select input field ✔
 * assign the input field with progress bar. ✔
 * User must not be able to vote more than the initial value ✔
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

function saveVoteValue(valueObj) {
  let valueObjToSave = JSON.stringify(valueObj);
  return window.localStorage.setItem("values", valueObjToSave);
}

function getVoteValue() {
  return JSON.parse(window.localStorage.getItem(valueObjToGet));
}

function fadeOut(value) {
  setTimeout(() => {
    return (value.textContent = "");
  }, 3000);
}

let vote_count = 5;
let store_vote_count = 0;
// let getAllUserVoteCount = [];
let getAllUserVoteCount = {};

document.addEventListener("DOMContentLoaded", function Ready() {
  // Populate count value
  let getVoteCount = getElement("#vote_count");
  getVoteCount.innerHTML = vote_count;
  let progressBar = getElement("#progressbar");
  const allMinusButton = getAllElement("#minus");
  const allPlusButton = getAllElement("#plus");
  const getVoteLabel = getAllElement("#vote_label");
  const checkLeaderBoard = getElement("#check_leaderboard");
  let allInputValue = getAllElement("input");

  // Select all plus button
  for (let i = 0; i < allPlusButton.length; i++) {
    let counter = 5;
    let obj = {};
    allPlusButton[i].addEventListener("click", () => {
      if (vote_count > 0) {
        allInputValue[i].value++;
        store_vote_count += 1;
        getVoteCount.innerHTML = --vote_count;
        let progressPCT = (store_vote_count / counter) * 100;
        let remaningProgressPCT = 100 - progressPCT;
        progressBar.style.width = `${remaningProgressPCT}%`;

        // Get the total value of each housemate
        // obj.datas = allInputValue[i].value;
        // getAllUserVoteCount.push({ [i]: allInputValue[i].value });

        getAllUserVoteCount[i] = allInputValue[i].value;

        if (allInputValue[i] === store_vote_count || vote_count === 0) {
          getElement("#vote-warning").textContent = "Vote Exhausted";
          // Hide The text after 3 seconds
          fadeOut(getElement("#vote-warning"));
        }
      } else {
        // alert('You are sturborn');
        getElement("#vote-warning").textContent = "Vote Exhausted";
        // Hide The text after 3 seconds
        fadeOut(getElement("#vote-warning"));
      }
    });
  }

  // Select all minus button
  for (let i = 0; i < allMinusButton.length; i++) {
    let counter = 5;
    let obj = {};
    allMinusButton[i].addEventListener("click", () => {
      if (vote_count < 5) {
        if (allInputValue[i].value <= 0) {
          getVoteLabel[i].textContent = "* vote cannot be less than 0*";
          fadeOut(getVoteLabel[i]);
          return;
        } else {
          allInputValue[i].value--;
          store_vote_count -= 1;
          getVoteCount.innerHTML = ++vote_count;
          let progressPCT = (store_vote_count / counter) * 100;
          let remaningProgressPCT = 100 - progressPCT;
          progressBar.style.width = `${remaningProgressPCT}%`;
          // Get the total value of each housemate
        //   obj.datas = allInputValue[i].value;
        //   getAllUserVoteCount.push({ [i]: allInputValue[i].value });
        getAllUserVoteCount[i] = allInputValue[i].value;
        }
      }
    });
  }

  //   Check leaderboard
  checkLeaderBoard.addEventListener("click", function check(e) {
    e.preventDefault();
    if (vote_count !== 0) {
      alert("Please finish the vote");
    } else {
      console.log(getAllUserVoteCount);
      return;
      saveVoteValue(getAllUserVoteCount);
      window.location.href = "/leaderboard.html";
    }
  });
});
