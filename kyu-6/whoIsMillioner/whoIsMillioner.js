const getTotalCashPrize = (prizeFund, correctAnswers, playerActions) => {
  const regExp = /[A-D,X,W]/g;
  let lifeLinesCount = 0;
  let prize = 0;
  const safetyPrices = {
    5: prizeFund.slice(0, 5).reduce((total, price) => total + price, 0),
    10: prizeFund.slice(0, 10).reduce((total, price) => total + price, 0),
  };
  const actions = playerActions.map((action) =>
    action
      .split("")
      .filter((item) => (item.match(regExp) ? true : lifeLinesCount++))
      .join()
      .replace(/[\d,\,]/g, "")
  );
  for (let i = 0; i < actions.length; i++) {
    if (actions.at(i) === "W") break;
    if (actions.at(i + 1) === "X") {
      if (i >= 4 && i < 9) {
        prize = safetyPrices[5];
        break;
      }
      if (i >= 9) {
        prize = safetyPrices[10];
        break;
      }
      prize = 0;
      break;
    }
    if (actions.at(i) === correctAnswers.at(i)) prize += prizeFund.at(i);
    else {
      prize = 0;
      break;
    }
  }
  return [prize, lifeLinesCount];
};
