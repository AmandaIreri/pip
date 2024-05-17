// class Authentication{
//     constructor(name,password){
//         this.name = name
//         this.password = password
//     }
//     register(){
//         const nums = [0,1,2,3,4,5,6,7,8,9];
//         let newPassword = this.password.split('')
//         for (let i = 0; i<nums.length;i++){
//             if (nums.includes(newPassword[i])){
//                 console.log("added successfully")
//             }
//         }
//     }
// }

// const person = new Authentication("mikisa", "3this4")
// person.register()
// console.log(person)

// class Authetication{
//     constructor(name,password){

//     }
// }

class Player {
    constructor(name, skill) {
        this.name = name;
        this.skill = skill; // Skill level of the player
        this.score = 0;
    }

    updateScore(points) {
        this.score += points;
    }

    displayScore() {
        console.log(`${this.name}'s score: ${this.score}`);
    }
}

function formTeams(players) {
    // Sort players by skill level
    players.sort((a, b) => a.skill - b.skill);

    // Initialize an empty array to hold teams
    let teams = [];

    // Loop through the sorted players
    for (let i = 0; i < players.length; i += 10) {
        // Check if there are enough players left to form a team
        if (i + 10 <= players.length) {
            // Extract a team of 10 players
            let team = players.slice(i, i + 10);
            // Add the team to the teams array
            teams.push(team);
        } else {
            // If there are less than 10 players left, add the remaining players to the last team
            teams[teams.length - 1].push(...players.slice(i));
        }
    }

    return teams;
}
// Create players with skill levels
const players = [
    new Player("Alice", 5),
    new Player("Bob", 3),
    new Player("Charlie", 7),
    new Player("Dave", 4),
    new Player("Eve", 6),
    new Player("Frank", 8),
    new Player("Grace", 2),
    new Player("Hank", 9),
    new Player("Ivy", 1),
    new Player("Jack", 10),
    // Add more players as needed
];

// Form teams based on their skill levels
const teams = formTeams(players);

// Display the formed teams
teams.forEach((team, index) => {
    console.log(`Team ${index + 1}:`);
    team.forEach(player => player.displayScore());
});

