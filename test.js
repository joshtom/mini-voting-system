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

LeaderBoard.map((value, index) => {
  // if (index === 0) { // Compare the leaderboard index and the user click index
  //     const increaseVoteCount = value.voteCount + 3 // Perform the action here
  //     console.log(increaseVoteCount)
  // }
});

let sortedLeaderBoard = LeaderBoard.sort((firstVoteCount, secondVoteCount) => {
  return firstVoteCount.voteCount < secondVoteCount.voteCount
    ? 1
    : firstVoteCount.voteCount > secondVoteCount.voteCount
    ? -1
    : 0;
});

// let sortedCars = LeaderBoard.sort((c1, c2) => (c1.voteCount < c2.voteCount) ? 1 : (c1.voteCount > c2.voteCount) ? -1 : 0);

console.log(sortedLeaderBoard);
