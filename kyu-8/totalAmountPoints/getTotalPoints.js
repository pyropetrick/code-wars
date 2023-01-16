const getTotalPoints = (games) =>
  games
    .map((game) =>
      game
        .split(":")
        .map((point) => +point)
        .reduce((x, y) => {
          if (x === y) return 1;
          if (x > y) return 3;
          return 0;
        })
    )
    .reduce((total, point) => total + point, 0);

module.exports = getTotalPoints;
