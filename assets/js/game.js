// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("Name your Champion!");
var playerHealth = 100
var playerAttack = 10
var playerMoney = 10

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Robotro", "Amy Android", "Robo Trumble"];
var enemyHealth = 9;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Repeat and Execute as long as the enemy is alive
    while (enemyHealth>0) {

    // Choose to battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Input FIGHT or SKIP below to choose!");

    // If player choosed to fight then we fight
if (promptFight === "fight"  || promptFight === "FIGHT") {
    // Alerts players to a new round
    // window.alert("The Fight Has Begun!!");
    // Subtract the value of 'playerHealth' from the value of 'enemyHealth' and display the resulting value to update the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;
    // log the results to the console to ensure they worked
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " has " + playerHealth + " health remaining."
    );
    // Check Enemy Health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")
    }
    else { 
        window.alert(enemyName +" still has " + enemyHealth + " health left.");
    }
    // Check Player Health
    if (playerHealth <= 0) {
        window.alert(playerName + " has perished on the field of battle!")
    }
    else {window.alert(playerName +" still has " + playerHealth + " health left.")};
}
else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you would like to Skip?")
        // If Yes (true) leave fight
        if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight.")
        // Subtract Player Money
        playerMoney = playerMoney - 2
        console.log (playerMoney);
        }
        // if no, back to fight again!
        else {fight();
        }
    }
else {
    window.alert("Please pick a valid option");
}
}
}

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 10;
    fight(pickedEnemyName);
}