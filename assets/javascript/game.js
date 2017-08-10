 $( document ).ready(function(){
 var targetNumber = Math.floor(Math.random() * 120) + 19;

  $("#targetScore").text("Target Score: " + targetNumber);

  console.log(targetNumber)

  var score = 0;
  var wins = 0;
  var losses = 0;

  var numberOption1 = Math.floor(Math.random() * 12) + 1;
  var numberOption2 = Math.floor(Math.random() * 12) + 1;
  var numberOption3 = Math.floor(Math.random() * 12) + 1;
  var numberOption4 = Math.floor(Math.random() * 12) + 1;

    $("#blue").text(numberOption1);
    console.log(numberOption1);

    $("#green").text(numberOption2);
    console.log(numberOption2);

    $("#red").text(numberOption3);
    console.log(numberOption3);

    $("#yellow").text(numberOption4);
    console.log(numberOption4);

    function reset(){
      targetNumber=Math.floor(Math.random()*120) +19;
      console.log(targetNumber)
      $("#targetScore").text(targetNumber);
      numberOption1= Math.floor(Math.random()*12)+1;
      numberOption2= Math.floor(Math.random()*12)+1;
      numberOption3= Math.floor(Math.random()*12)+1;
      numberOption4= Math.floor(Math.random()*12)+1;
      score= 0;
      $("#currentScore").text(score);
      };

    function win(){
      alert("You won!");
      wins++; 
      $('#wins').text("Wins: " + wins);
      reset();
    };
     
    function lose(){
    alert("You lost!");
    losses++; 
    $('#losses').text("Losses: " + losses);
    reset();
    };

      $('#blue').on ('click', function(){
    score = score + numberOption1;
    console.log("New userTotal= " + score);
    $('#currentScore').text(score); 
          //sets win/lose conditions
        if (score == targetNumber){
          win();
        }
        else if ( score > targetNumber){
          lose();
        }   
  });

          $('#green').on ('click', function(){
        score = score + numberOption2;
        console.log("New userTotal= " + score);
        $('#currentScore').text(score); 
              //sets win/lose conditions
            if (score == targetNumber){
              win();
            }
            else if ( score > targetNumber){
              lose();
            }   
      });

              $('#red').on ('click', function(){
            score = score + numberOption3;
            console.log("New userTotal= " + score);
            $('#currentScore').text(score); 
                  //sets win/lose conditions
                if (score == targetNumber){
                  win();
                }
                else if ( score > targetNumber){
                  lose();
                }   
          });

            $('#yellow').on ('click', function(){
          score = score + numberOption4;
          console.log("New userTotal= " + score);
          $('#currentScore').text(score); 
                //sets win/lose conditions
              if (score == targetNumber){
                win();
              }
              else if ( score > targetNumber){
                lose();
              }   
        });

});