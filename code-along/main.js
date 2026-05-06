// 2026 Season Games Results
const seasonResults = [
    {
        gameDate: "2026-01-12",
        gameLocation: "Vancouver",
        canucksScore: 4,
        opponentTeam: "Calgary Flames",
        opponentScore: 2,
    },
    {
        gameDate: "2026-01-15",
        gameLocation: "Edmonton",
        canucksScore: 3,
        opponentTeam: "Edmonton Oilers",
        opponentScore: 5,
    },
    {
        gameDate: "2026-01-18",
        gameLocation: "Vancouver",
        canucksScore: 2,
        opponentTeam: "Toronto Maple Leafs",
        opponentScore: 1,
    },
    {
        gameDate: "2026-01-21",
        gameLocation: "Seattle",
        canucksScore: 1,
        opponentTeam: "Seattle Kraken",
        opponentScore: 3,
    },
    {
        gameDate: "2026-01-24",
        gameLocation: "Vancouver",
        canucksScore: 5,
        opponentTeam: "San Jose Sharks",
        opponentScore: 2,
    },
    {
        gameDate: "2026-01-27",
        gameLocation: "Los Angeles",
        canucksScore: 3,
        opponentTeam: "Los Angeles Kings",
        opponentScore: 3,
    },
    {
        gameDate: "2026-01-30",
        gameLocation: "Vancouver",
        canucksScore: 6,
        opponentTeam: "Anaheim Ducks",
        opponentScore: 4,
    }
]

function matchOutCome(homeScore, opponentScore) {

    let result;
    if(homeScore == opponentScore) {
        result = "home-Draw";
    } else if(homeScore > opponentScore) {
        result = "home-Win";
    } else {
        result = "home-Lose";
    }
    return result;
}

const resultsTable = document.querySelector("#season-results-table");
console.log(resultsTable);

function createResultRow(gameData) {
    const winOrDrawOrLose = matchOutCome(gameData.canucksScore, gameData.opponentScore);
    let gameResult;
    switch(winOrDrawOrLose){
        case "home-Draw":
            gameResult = "Draw"
            break;
        case "home-Win":
            gameResult = "Win"
            break;
        case "home-Lose":
            gameResult = "Lose"
            break;
        default:
            gameResult = "undefined"
            break;
    }
    const resultRow = `
    <tr class ="${winOrDrawOrLose}">
        <td>${gameData.gameDate}</td>
        <td>${gameData.gameLocation}</td>
        <td>${gameData.canucksScore}</td>
        <td>${gameData.opponentTeam}</td>
        <td>${gameData.opponentScore}</td>
        <td>${gameResult}</td>
    </tr>
    `;
    return resultRow;
}

// Loop over all game results, and print each row

function showAllResults(resultsList) {
    for (result of resultsList) {
        const currentRow = createResultRow(result);
        resultsTable.innerHTML += currentRow;
    }
}
showAllResults(seasonResults);