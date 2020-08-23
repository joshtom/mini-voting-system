var LeaderBoard = [
  {
    id: 1,
    name: "Nengi",
    img: "Image here",
    voteCount: 0,
  },
  {
    id: 2,
    name: "Dorathy",
    img: "Image here",
    voteCount: 0,
  },
  {
    id: 3,
    name: "Ozo",
    img: "Image here",
    voteCount: 0,
  },
  {
    id: 4,
    name: "Laycon",
    img: "Image here",
    voteCount: 0,
  },
  {
    id: 5,
    name: "Erica",
    img: "Image here",
    voteCount: 0,
  },
  {
    id: 6,
    name: "Kiddwaya",
    img: "Image here",
    voteCount: 0,
  },
];

let vote_count = 5;

const getVoteCount = document.querySelector("#vote_count");
getVoteCount.innerHTML = vote_count;
const progressBar = document.querySelector("#progressbar");
const allMinusButton = document.querySelectorAll("#minus");
const allPlusButton = document.querySelectorAll("#plus");
const getVoteLabel = document.querySelectorAll("#vote_label");
const checkLeaderBoard = document.querySelector("#check_leaderboard");
const allInputValue = document.querySelectorAll("input");

function getTotalVote() {
  let totalVote = 0;
  allInputValue.forEach((input) => {
    totalVote += +input.value;
  });
  return totalVote;
}

function updateProgress() {
  let totalVote = getTotalVote();
  let progressPCT = (totalVote / vote_count) * 100;
  let remaningProgressPCT = vote_count - progressPCT;
  progressBar.style.width = `${remaningProgressPCT}%`;
  getVoteCount.innerHTML = `${vote_count - totalVote}`;
}

function voteError(errMsg) {
  setTimeout(() => {
    document.querySelector("#vote-warning").textContent = `${errMsg}`;
  }, 3000);
}

// Select all plus button
for (let i = 0; i < allPlusButton.length; i++) {
  allPlusButton[i].addEventListener("click", () => {
    let initialVote = allInputValue[i].value;
    let totalVote = getTotalVote();

    if (allInputValue[i].value > vote_count) {
      getVoteLabel[i].innerHTML = "Excess vote";
    }
    if (totalVote !== vote_count) {
      // Map through leaderboard object and and assign values to vote count
      LeaderBoard.map((value, index) => {
        if (index == i) {
          // Get the values of different input
          allInputValue[i].value = Number(initialVote) + 1;
          value.voteCount = Number(initialVote) + 1;
        }
      });
      updateProgress();
    }
  });
}

// Select all minus button
for (let i = 0; i < allMinusButton.length; i++) {
  allMinusButton[i].addEventListener("click", () => {
    let initialVote = allInputValue[i].value;

    if (!(initialVote < 1)) {
      // Map through leaderboard object and and assign values to vote count
      LeaderBoard.map((value, index) => {
        if (index == i) {
          // Get the values of different input
          allInputValue[i].value = Number(initialVote) - 1;
          value.voteCount = Number(initialVote) - 1;
        }
      });
      updateProgress();
    }
  });
}

// Select all input field
for (let i = 0; i < allInputValue.length; i++) {
  allInputValue[i].addEventListener("input", () => {
    let totalVote = getTotalVote();
    if (totalVote > vote_count) {
      getVoteLabel[i].innerHTML = "Excess vote";
    }
    if (allInputValue[i].value < 0) {
      getVoteLabel[i].innerHTML = "Invalid input";
    }
    else {
      getVoteLabel[i].innerHTML = "";
      LeaderBoard.map((value, index) => {
        if (index == i) {
          // Get the values of different input
          value.voteCount = allInputValue[i].value;
        }
      });
      updateProgress();
    }
  });
  allInputValue[i].addEventListener("focusout", () => {
    allInputValue[i].value == "" ? (allInputValue[i].value = 0) : null;
    if (allInputValue[i].value < 0) {
      allInputValue[i].value = 0;
      getVoteLabel[i].innerHTML = "";
    }
  });
}

checkLeaderBoard.addEventListener("click", function check(e) {
  e.preventDefault();
  //   Check leaderboard
  var originalLeaderBoard = [...LeaderBoard];
  let sortedLeaderBoard = originalLeaderBoard.sort((a, b) => {
    return a.voteCount < b.voteCount ? 1 : a.voteCount > b.voteCount ? -1 : 0;
  });
  const getLastContestant = sortedLeaderBoard[sortedLeaderBoard.length - 1];

  if (getTotalVote() !== vote_count) {
    document.querySelector("#vote_error").innerHTML = "*Finish the vote*";
  } else {
    const getLeaderBoard = JSON.stringify(sortedLeaderBoard);
    const getLastLeader = JSON.stringify(getLastContestant);
    window.localStorage.setItem('leader', getLeaderBoard)
    window.localStorage.setItem('last', getLastLeader)
  }
});
