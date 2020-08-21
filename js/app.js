// All functions here
/**TODO
 * select plus and minus button ✔
 * select input field ✔
 * assign the input field with progress bar. ✔
 * User must not be able to vote more than the initial value ✔
 * Leader board should be displayed based on the value of each vote ✔
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
  return JSON.parse(window.localStorage.getItem("values"));
}

function removeVoteValue() {
  return window.localStorage.removeItem('values')
}

function fadeOut(value) {
  setTimeout(() => {
    return (value.textContent = "");
  }, 3000);
}

var LeaderBoard = [
  {
    id: 0,
    name: "Nengi",
    img: "./assets/nengi.png",
    voteCount: 0,
  },
  {
    id: 1,
    name: "Dorathy",
    img: "./assets/dorathy.png",
    voteCount: 0,
  },
  {
    id: 2,
    name: "Ozo",
    img: "./assets/ozo.png",
    voteCount: 0,
  },
  {
    id: 3,
    name: "Laycon",
    img: "./assets/laycon.jpg",
    voteCount: 0,
  },
  {
    id: 4,
    name: "Erica",
    img: "./assets/erica.jpg",
    voteCount: 0,
  },
  {
    id: 5,
    name: "Kiddwaya",
    img: "./assets/kiddwaya.jpg",
    voteCount: 0,
  },
];

let vote_count = 150;
let store_vote_count = 0;


document.addEventListener("DOMContentLoaded", function Ready() {
  // Populate count value
  let getVoteCount = getElement("#vote_count");
  getVoteCount.innerHTML = vote_count;
  let progressBar = getElement("#progressbar");
  const allMinusButton = getAllElement("#minus");
  const allPlusButton = getAllElement("#plus");
  const getVoteLabel = getAllElement("#vote_label");
  let checkLeaderBoard = getElement("#check_leaderboard");

  // get dom elements of modal to be populated
  const getLeaderImg = getAllElement(".Leader__card img");
  const getLeaderName = getAllElement(".Leader__card h4");
  const getLeaderBtn = getAllElement(".Leader__card button");

  // End of getting elements of modal

  const backToVoteButton = getAllElement("#back-to-vote");
  let allInputValue = getAllElement("input");

  for(let i = 0; i < allInputValue.length; i++) {
    allInputValue[i].disabled = true;
  }

  // Select all plus button
  for (let i = 0; i < allPlusButton.length; i++) {
    let counter = 150;
    allPlusButton[i].addEventListener("click", () => {
      if (vote_count > 0) {
        LeaderBoard.map((value, index) => {
          if (index == i) {
            allInputValue[i].value++;
            store_vote_count += 1;
            getVoteCount.innerHTML = --vote_count;
            let progressPCT = (store_vote_count / counter) * 100;
            let remaningProgressPCT = 100 - progressPCT;
            progressBar.style.width = `${remaningProgressPCT}%`;
            value.voteCount = Number(allInputValue[i].value);
          }
        });

        // console.log(LeaderBoard)

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
    let counter = 150;
    allMinusButton[i].addEventListener("click", () => {
      if (vote_count < 150) {
        if (allInputValue[i].value <= 0) {
          getVoteLabel[i].textContent = "* vote cannot be less than 0*";
          fadeOut(getVoteLabel[i]);
          return;
        } else {
          LeaderBoard.map((value, index) => {
            if (index == i) {
              allInputValue[i].value--;
              store_vote_count -= 1;
              getVoteCount.innerHTML = ++vote_count;
              let progressPCT = (store_vote_count / counter) * 100;
              let remaningProgressPCT = 100 - progressPCT;
              progressBar.style.width = `${remaningProgressPCT}%`;
                  // Compare the leaderboard index and the user click index
                  value.voteCount = Number(allInputValue[i].value);
              // console.log(value.voteCount);
            }
          });
          // console.log(LeaderBoard);
        }
      }
    });
  }

  // Select all inpuut value
  // Work on this later
  // for (let i = 0; i < allInputValue.length; i++) {
  //   let counter = 150;
  //   allInputValue[i].addEventListener("input", () => {
  //     if (vote_count < 150) {
  //       if (allInputValue[i].value <= 0) {
  //         getVoteLabel[i].textContent = "* vote cannot be less than 0*";
  //         fadeOut(getVoteLabel[i]);
  //         return;
  //       } 
  //       else if(vote_count > 150)
  //       else {
  //         allInputValue[i].value--;
  //         store_vote_count -= 1;
  //         getVoteCount.innerHTML = ++vote_count;
  //         let progressPCT = (store_vote_count / counter) * 100;
  //         let remaningProgressPCT = 100 - progressPCT;
  //         progressBar.style.width = `${remaningProgressPCT}%`;

  //         LeaderBoard.map((value, index) => {
  //           if (index == i) {
  //             // Compare the leaderboard index and the user click index
  //             value.voteCount = Number(allInputValue[i].value);
  //             // console.log(value.voteCount);
  //           }
  //         });
  //         // console.log(LeaderBoard);
  //       }
  //     }
  //   });
  // }



 

  checkLeaderBoard.addEventListener("click", function check(e) {
    e.preventDefault();
    //   Get copy of leaderboard and and Sort it based on the highest number of votes
    let getCopyOfLeaderBoard = [...LeaderBoard]
    
    getCopyOfLeaderBoard.sort(
    (firstVoteCount, secondVoteCount) => {
      return (firstVoteCount.voteCount < secondVoteCount.voteCount)
        ? 1
        : (firstVoteCount.voteCount > secondVoteCount.voteCount)
        ? -1
        : 0;
    }
  );
    
    if (vote_count !== 0) {
      getElement("#vote-error-text").textContent = '*finish the vote*'
      fadeOut(getElement("#vote-error-text"));
    } else {
      saveVoteValue(LeaderBoard);
      const getLastVote = getCopyOfLeaderBoard[getCopyOfLeaderBoard.length - 1];

      // Populate the LeaderBoard modal with sorted content
      // Get the leaderboard DOM element and push the sortedLeaderBoard in it
      getCopyOfLeaderBoard.forEach((lv, i) => {
        getLeaderImg[i].src = lv.img;
        getLeaderName[i].innerHTML = lv.name
        getLeaderBtn[i].innerHTML = i + 1;
      })      

      getElement("#evicted").innerHTML = `${getLastVote.name} was evicted`;
      // Set the modal attribute
      this.setAttribute("data-toggle","modal");
      this.setAttribute("data-target",".leaderBoardModal");
    }
  });

});
