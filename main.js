var players = [];
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
var start = () => {
    for(var playerNumber = 1; playerNumber < 9; playerNumber++){
        document.getElementById(`player${playerNumber}`).readOnly = true;
        document.getElementById(`player${playerNumber}`).setAttribute("ondblclick",`setWinner(${playerNumber})`);
        if(document.getElementById(`player${playerNumber}`).value != ""){
            players.push(document.getElementById(`player${playerNumber}`).value);
        } else{
            document.getElementById(`player${playerNumber}`).value = `Player ${playerNumber}`;
            players.push(document.getElementById(`player${playerNumber}`).value);
        }
    }
    shuffleArray(players);
    for(var playerNumber = 1; playerNumber < 9; playerNumber++){
        document.getElementById(`player${playerNumber}`).value = players[playerNumber-1];
    }
    document.getElementById("startButton").disabled = true;
    document.getElementById("resetButton").disabled = false;
    for(let i = 1; i < 9;i++){
        document.getElementById(`player${i}`).setAttribute("style","background-color: #D7D7D7;");
    }
}
var setWinner = (playPlace) => {
    if (playPlace == 1 || playPlace == 2){
        switch(playPlace){
            case 1:
                document.getElementById("player2").setAttribute("ondblclick","console.log('Already lost')");
                document.getElementById("player2").setAttribute("style","background-color: #F44D28;")
                document.getElementById("player1").setAttribute("ondblclick","console.log('Already won')");
                document.getElementById("player1").setAttribute("style","background-color: #6EFD8E;")
                document.getElementById("matchOneWinner").value = document.getElementById("player1").value;
                document.getElementById("matchOneWinner").setAttribute("ondblclick",`semifinals(${playPlace});`);
            break;
            case 2:
                document.getElementById("player1").setAttribute("ondblclick","console.log('Already lost')");
                document.getElementById("player1").setAttribute("style","background-color: #F44D28;")
                document.getElementById("player2").setAttribute("ondblclick","console.log('Already won')");
                document.getElementById("player2").setAttribute("style","background-color: #6EFD8E")
                document.getElementById("matchOneWinner").value = document.getElementById("player2").value;
                document.getElementById("matchOneWinner").setAttribute("ondblclick",`semifinals(${playPlace});`);
            break;
        }
    } else if (playPlace == 3 || playPlace == 4){
        switch(playPlace){
            case 3:
                document.getElementById("player4").setAttribute("ondblclick","console.log('Already lost')");
                document.getElementById("player4").setAttribute("style","background-color: #F44D28;");
                document.getElementById("player3").setAttribute("ondblclick","console.log('Already won')");
                document.getElementById("player3").setAttribute("style","background-color: #6EFD8E;");
                document.getElementById("matchTwoWinner").value = document.getElementById("player3").value;
                document.getElementById("matchTwoWinner").setAttribute("ondblclick",`semifinals(${playPlace});`);
            break;
            case 4:
                document.getElementById("player3").setAttribute("ondblclick","console.log('Already lost')");
                document.getElementById("player3").setAttribute("style","background-color: #F44D28;");
                document.getElementById("player4").setAttribute("ondblclick","console.log('Already won')");
                document.getElementById("player4").setAttribute("style","background-color: #6EFD8E;");
                document.getElementById("matchTwoWinner").value = document.getElementById("player4").value;
                document.getElementById("matchTwoWinner").setAttribute("ondblclick",`semifinals(${playPlace});`);
            break;
        }
    } else if (playPlace == 5 || playPlace == 6){
        switch(playPlace){
            case 5:
                document.getElementById("player6").setAttribute("ondblclick","console.log('Already lost')");
                document.getElementById("player6").setAttribute("style","background-color: #F44D28;");
                document.getElementById("player5").setAttribute("ondblclick","console.log('Already won')");
                document.getElementById("player5").setAttribute("style","background-color: #6EFD8E;");
                document.getElementById("matchThreeWinner").value = document.getElementById("player5").value;
                document.getElementById("matchThreeWinner").setAttribute("ondblclick",`semifinals(${playPlace});`);
            break;
            case 6:
                document.getElementById("player5").setAttribute("ondblclick","console.log('Already lost')");
                document.getElementById("player5").setAttribute("style","background-color: #F44D28;");
                document.getElementById("player6").setAttribute("ondblclick","console.log('Already won')");
                document.getElementById("player6").setAttribute("style","background-color: #6EFD8E;");
                document.getElementById("matchThreeWinner").value = document.getElementById("player6").value;
                document.getElementById("matchThreeWinner").setAttribute("ondblclick",`semifinals(${playPlace});`);
            break;
        }
    } else if (playPlace == 7 || playPlace == 8){
        switch(playPlace){
            case 7:
                document.getElementById("player8").setAttribute("ondblclick","console.log('Already lost')");
                document.getElementById("player8").setAttribute("style","background-color: #F44D28;");
                document.getElementById("player7").setAttribute("ondblclick","console.log('Already won')");
                document.getElementById("player7").setAttribute("style","background-color: #6EFD8E;");
                document.getElementById("matchFourWinner").value = document.getElementById("player7").value;
                document.getElementById("matchFourWinner").setAttribute("ondblclick",`semifinals(${playPlace});`);
            break;
            case 8:
                document.getElementById("player7").setAttribute("ondblclick","console.log('Already lost')");
                document.getElementById("player7").setAttribute("style","background-color: #F44D28;");
                document.getElementById("player8").setAttribute("ondblclick","console.log('Already won')");
                document.getElementById("player8").setAttribute("style","background-color: #6EFD8E;");
                document.getElementById("matchFourWinner").value = document.getElementById("player8").value;
                document.getElementById("matchFourWinner").setAttribute("ondblclick",`semifinals(${playPlace});`);
            break;
        }

    }
}
var semifinals = (playPlace) =>{
    if(playPlace == 1 || playPlace == 2){
    document.getElementById("matchTwoWinner").setAttribute("ondblclick","console.log('Already lost')");
    document.getElementById("matchTwoWinner").setAttribute("style","background-color: #F44D28;");
    document.getElementById("matchOneWinner").setAttribute("ondblclick","console.log('Already won')");
    document.getElementById("matchOneWinner").setAttribute("style","background-color: #6EFD8E;");
    document.getElementById("matchFiveWinner").value = document.getElementById(`player${playPlace}`).value;
    document.getElementById("matchFiveWinner").setAttribute("ondblclick",`finals(${playPlace});`);

    } else if(playPlace == 3 || playPlace == 4){
        document.getElementById("matchOneWinner").setAttribute("ondblclick","console.log('Already lost')");
        document.getElementById("matchOneWinner").setAttribute("style","background-color: #F44D28;");
        document.getElementById("matchTwoWinner").setAttribute("ondblclick","console.log('Already won')");
        document.getElementById("matchTwoWinner").setAttribute("style","background-color: #6EFD8E;");
        document.getElementById("matchFiveWinner").value = document.getElementById(`player${playPlace}`).value;
        document.getElementById("matchFiveWinner").setAttribute("ondblclick",`finals(${playPlace});`);
        } else if(playPlace == 5 || playPlace == 6){
            document.getElementById("matchFourWinner").setAttribute("ondblclick","console.log('Already lost')");
            document.getElementById("matchFourWinner").setAttribute("style","background-color: #F44D28;");
            document.getElementById("matchThreeWinner").setAttribute("ondblclick","console.log('Already won')");
            document.getElementById("matchThreeWinner").setAttribute("style","background-color: #6EFD8E;");
            document.getElementById("matchSixWinner").value = document.getElementById(`player${playPlace}`).value;
            document.getElementById("matchSixWinner").setAttribute("ondblclick",`finals(${playPlace});`);
            } else if(playPlace == 7 || playPlace == 8){
                document.getElementById("matchThreeWinner").setAttribute("ondblclick","console.log('Already lost')");
                document.getElementById("matchThreeWinner").setAttribute("style","background-color: #F44D28;");
                document.getElementById("matchFourWinner").setAttribute("ondblclick","console.log('Already won')");
                document.getElementById("matchFourWinner").setAttribute("style","background-color: #6EFD8E;");
                document.getElementById("matchSixWinner").value = document.getElementById(`player${playPlace}`).value;
                document.getElementById("matchSixWinner").setAttribute("ondblclick",`finals(${playPlace});`);
                }
}
var finals = (playPlace) => {
    if (playPlace == 1 || playPlace == 2 || playPlace == 3 || playPlace == 4){
        document.getElementById("matchSixWinner").setAttribute("ondblclick","console.log('Already lost')");
        document.getElementById("matchSixWinner").setAttribute("style","background-color: #F44D28;");
        document.getElementById("matchFiveWinner").setAttribute("ondblclick","console.log('Already won')");
        document.getElementById("matchFiveWinner").setAttribute("style","background-color: #6EFD8E;");
        document.getElementById("matchSevenWinner").value = document.getElementById(`player${playPlace}`).value;
        document.getElementById("matchSevenWinner").setAttribute("style","background-color: #fff843;");
    } else {
        document.getElementById("matchFiveWinner").setAttribute("ondblclick","console.log('Already lost')");
        document.getElementById("matchFiveWinner").setAttribute("style","background-color: #F44D28;");
        document.getElementById("matchSixWinner").setAttribute("ondblclick","console.log('Already won')");
        document.getElementById("matchSixWinner").setAttribute("style","background-color: #6EFD8E;");
        document.getElementById("matchSevenWinner").value = document.getElementById(`player${playPlace}`).value;
        document.getElementById("matchSevenWinner").setAttribute("style","background-color: #fff843;");
    }
}
var reset = () => {
    window.location.reload();
}