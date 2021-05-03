superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }

//   function superbowlWin(game) {
//     return game.result === `W`;
//   }

//   console.log(record.find(superbowlWin.));

 