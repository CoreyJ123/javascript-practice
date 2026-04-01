// 2026 Season Games Results
const seasonResults = [
    {
        gameDate: "2026-01-12",
        gameLocation: "Vancouver",
        canucksScore: 4,
        opponentTeam: "Calgary Flames",
        opponentScore: 2,
        canucksWin: true,
    },
    {
        gameDate: "2026-01-15",
        gameLocation: "Edmonton",
        canucksScore: 3,
        opponentTeam: "Edmonton Oilers",
        opponentScore: 5,
        canucksWin: false,
    },
    {
        gameDate: "2026-01-18",
        gameLocation: "Vancouver",
        canucksScore: 2,
        opponentTeam: "Toronto Maple Leafs",
        opponentScore: 1,
        canucksWin: true,
    },
    {
        gameDate: "2026-01-21",
        gameLocation: "Seattle",
        canucksScore: 1,
        opponentTeam: "Seattle Kraken",
        opponentScore: 3,
        canucksWin: false,
    },
    {
        gameDate: "2026-01-24",
        gameLocation: "Vancouver",
        canucksScore: 5,
        opponentTeam: "San Jose Sharks",
        opponentScore: 2,
        canucksWin: true,
    },
    {
        gameDate: "2026-01-27",
        gameLocation: "Los Angeles",
        canucksScore: 3,
        opponentTeam: "Los Angeles Kings",
        opponentScore: 3,
        canucksWin: false, // assuming OT/shootout loss not tracked separately
    },
    {
        gameDate: "2026-01-30",
        gameLocation: "Vancouver",
        canucksScore: 6,
        opponentTeam: "Anaheim Ducks",
        opponentScore: 4,
        canucksWin: true,
    }
]

const resultsTable = document.querySelector("#season-results-table");
console.log(resultsTable);

function createResultRow(gameData) {
    const winOrLose = gameData.canucksWin ? "canucks-ftw" : "canucks-lose";

    const resultRow = `
    <tr class ="${winOrLose}">
        <td>${gameData.gameDate}</td>
        <td>${gameData.gameLocation}</td>
        <td>${gameData.canucksScore}</td>
        <td>${gameData.opponentTeam}</td>
        <td>${gameData.opponentScore}</td>
        <td>${gameData.canucksWin}</td>
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