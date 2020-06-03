// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var fight = function(enemy) {
    // Repeat and Execute as long as the enemy is alive
    while (enemy.ealth>0 && playerInfo.health > 0) {
    // Choose to battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Input FIGHT or SKIP below to choose!");
    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerInfo.money for skipping
      playerInfo.money = Math.max(0,  playerInfo.money - 10);
      console.log("playerInfo.money", playerInfo.money)
      break;
    }
    }
    // If player choosed to fight then we fight
    else if (promptFight === "fight"  || promptFight === "FIGHT") {
    // Alerts players to a new round
    window.alert("The Fight Has Begun!!");
   // generate random damage value based on player's attack power
   var damage = randomNumber(playerInfo.attack-3, playerInfo.attack); 
   
   enemy.health = Math.max(0, enemy.health - damage);
    // log the results to the console to ensure they worked
    console.log(
    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
    // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
    var damage = randomNumber(enemy.attack-3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerInfo.name + " has " + playerInfo.health + " health remaining."
    );
    // Check Enemy Health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        break;
    }
    else { 
        window.alert(enemy.name +" still has " + enemy.health + " health left.");
    }
    // Check Player Health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has perished on the field of battle!");
        break;
    }
    else {window.alert(playerInfo.name +" still has " + playerInfo.health + " health left.")};
}

else {
    window.alert("Please pick a valid option");
}
}
} // End of FIGHT function


var startGame = function() {
    // reset player stats
    playerInfo.reset();
 
    for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i +1));
    }
    else { window.alert(playerInfo.name + " has died! Game Over!");
    endGame();
    break;
}
    var pickedEnemyObj = enemyInfo[i];
    pickedEnemyObj.health = randomNumber(40,60);
    fight(pickedEnemyObj);
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var shopConfirm = window.confirm("The fight is over, would you like to visit the store?");
        if (shopConfirm){
        shop();
    }}
}};

var endGame = function () {
    if (playerInfo.health > 0) {
        window.alert("Great Job, You Have survived the game and have " + playerInfo.money + " money remaining!")
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
            playerInfo.refillHealth();
            break;
    
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;

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

var playerInfo =  {
    name: window.prompt("Name your Champion!"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack - 10;
    }, 
    refillHealth: function() {
        if (this.money >=7) {
            window.alert("Refilling " + playerInfo.name + "'s health by 20 for 7 monies.")
            this.health += 20;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!")
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert ("Upgrading player's attack by 6 for 7 monies!");
            this.attack +=6;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }

    }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
{
    name:"Robotro", 
    attack: randomNumber(10,14)
},
{
    name:"Amy Android",
    attack: randomNumber(10,14)
},
{
    name:"Robo Trumble",
    attack: randomNumber (10,14)
},
];

startGame();





