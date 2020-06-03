// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("Name your Champion!");
var playerHealth = 50
var playerAttack = 10
var playerMoney = 10

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Robotro", "Amy Android", "Robo Trumble"];
var enemyHealth = 20
var enemyAttack = 12;

var fight = function(enemyName) {
    // Repeat and Execute as long as the enemy is alive
    while (enemyHealth>0 && playerHealth > 0) {
    // Choose to battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Input FIGHT or SKIP below to choose!");
    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = Math.max(0,  playerMoney - 10);
      console.log("playerMoney", playerMoney)
      break;
    }
    }
    // If player choosed to fight then we fight
    else if (promptFight === "fight"  || promptFight === "FIGHT") {
    // Alerts players to a new round
    window.alert("The Fight Has Begun!!");
   // generate random damage value based on player's attack power
   var damage = randomNumber(playerAttack-3, playerAttack); 
   
   enemyHealth = Math.max(0, enemyHealth - damage);
    // log the results to the console to ensure they worked
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    var damage = randomNumber(enemyAttack-3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " has " + playerHealth + " health remaining."
    );
    // Check Enemy Health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
    }
    else { 
        window.alert(enemyName +" still has " + enemyHealth + " health left.");
    }
    // Check Player Health
    if (playerHealth <= 0) {
        window.alert(playerName + " has perished on the field of battle!");
        break;
    }
    else {window.alert(playerName +" still has " + playerHealth + " health left.")};
}

else {
    window.alert("Please pick a valid option");
}
}
} // End of FIGHT function


var startGame = function() {
    // reset player health
    playerHealth = 20;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i +1));
    }
    else { window.alert(playerName + " has died! Game Over!");
    endGame();
    break;
}
    var pickedEnemyName = enemyNames[i];
    enemyHealth = randomNumber(40,60);
    fight(pickedEnemyName);
    if (playerHealth > 0 && i < enemyNames.length - 1) {
        var shopConfirm = window.confirm("The fight is over, would you like to visit the store?");
        if (shopConfirm){
        shop();
    }}
}};

var endGame = function () {
    if (playerHealth > 0) {
        window.alert("Great Job, You Have survived the game and have " + playerMoney + " money remaining!")
    }
    else 
    window.alert("You've lost your robot in battle");
var playAgainConfirm = window.confirm("Would you like to play again?")
if (playAgainConfirm){
    startGame();
}
else { window.alert("Thank you for playing Robot Gladiators! Come again soon!");
}}

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE you attack, or LEAVE the store?  PLease enter REFILL, UPGRADE, or LEAVE to choose."
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney > 7) {
            window.alert("Refilling player's health by 20 for 7 monies");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney -7;
            break;
        }
        else { window.alert("You don't have enough money!")
    }

        case "UPGRADE":
        case "upgrade":
            if (playerMoney > 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney-7;
            break;
            }
            else {
                window.alert("You don't have enough money!")
            }

        case "LEAVE":
        case "leave":
            window.alert("Leaving the Store");
            break;

        default:
            window.alert("You did not pick a valid option, try again.");
            shop();
            break;
    }
}

var randomNumber = function (max, min) {
    var value = Math.floor(Math.random() * (max-min+1)) + min;
    return value;
}
startGame();





