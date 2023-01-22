const podium = (scores) => {
  if (Object.keys(scores) == 0) return {};
  const peopleInfo = Object.keys(scores).map((key) => ({
    player: key,
    score:
      scores[key].length > 0
        ? scores[key].reduce((total, num) => total + num, 0)
        : undefined,
  }));

  const sortedChampions = peopleInfo
    .filter(({ score }) => score !== undefined)
    .sort((a, b) => b.score - a.score);
  if (sortedChampions == 0) return {};

  const gold = sortedChampions
    .filter(({ score }) => score === sortedChampions.at(0).score)
    .sort((a, b) => a.player.localeCompare(b.player));
  const silverCandidate = sortedChampions
    .filter(({ score }) => score !== sortedChampions.at(0).score)
    .at(0);
  const silver = sortedChampions
    .filter(({ score }) => score === silverCandidate?.score)
    .sort((a, b) => a.player.localeCompare(b.player));
  const bronzeCandidate = sortedChampions
    .filter(({ score }) => score < silverCandidate?.score)
    .at(0);
  const bronze = sortedChampions
    .filter(({ score }) => score === bronzeCandidate?.score)
    .sort((a, b) => a.player.localeCompare(b.player));

  if (gold.length === 1 && silverCandidate) {
    if (silver.length === 1 && bronzeCandidate) {
      return {
        gold: {
          score: sortedChampions.at(0).score,
          players: [sortedChampions.at(0).player],
        },
        silver: {
          score: silverCandidate.score,
          players: [silverCandidate.player],
        },
        bronze: {
          score: bronzeCandidate.score,
          players: [...bronze.map((p) => p.player)],
        },
      };
    }
    return {
      gold: {
        score: sortedChampions.at(0).score,
        players: [sortedChampions.at(0).player],
      },
      silver: {
        score: silverCandidate.score,
        players: [...silver.map((p) => p.player)],
      },
    };
  }
  if (gold.length === 2) {
    return {
      gold: {
        score: sortedChampions.at(0).score,
        players: [...gold.map((p) => p.player)],
      },
      bronze: {
        score: silverCandidate.score,
        players: [...silver.map((p) => p.player)],
      },
    };
  }
  return {
    gold: {
      score: sortedChampions.at(0).score,
      players: [...gold.map((p) => p.player)],
    },
  };
};

module.exports = podium;
