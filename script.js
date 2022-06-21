let score
let figure
let gameover
let playgame
let scissorsitem
let rockitem
let paperitem
let useroption
let cpunumber
var min = 0;
var max = 3;
let cpuoption
let userbutton
let cpubutton

userbutton = document.getElementById("user-button")
cpubutton = document.getElementById("cpu-button")

score = document.getElementById("counter").textContent
console.log(score)


function reply_click(clicked_id)
{
console.log(clicked_id)
}

gameover = document.getElementById("game--over")

scissorsitem = document.getElementById("scissors")
rockitem = document.getElementById("rock")
paperitem = document.getElementById("paper")

gameover.style.display = "none";

var rock = document.getElementById("rock--figure");
rock.addEventListener("click", function () {
    console.log("rock")
    gameover.style.removeProperty('display');
    scissorsitem.style.display = "none";
    rockitem.style.display = "none";
    paperitem.style.display = "none";
    figure = "rock";

    useroption = document.getElementById("user--option"); 
    useroption.src = "./images/icon-" + figure + ".svg"

    userbutton.style.borderColor =  "hsl(349, 71%, 52%)";
    userbutton.style.borderRadius =  "75% 75%";

    

    cpunumber = Math.floor(Math.random() *  (max - min)) + min;
    
    cpuoption = document.getElementById("cpu--option"); 
    

    switch(cpunumber) {
        case 0:
            cpuoption = document.getElementById("cpu--option");
            cpuoption.src = "./images/icon-paper.svg"
            score--
            document.getElementById("counter").textContent = score
            document.getElementById("result").textContent = "LOSE"

            cpubutton.style.borderColor =  "hsl(230, 89%, 62%) ";
            cpubutton.style.borderRadius =  "75% 75%";
          break;
        case 1:
            cpuoption = document.getElementById("cpu--option");
            cpuoption.src = "./images/icon-scissors.svg"
            score++
            document.getElementById("counter").textContent = score
            document.getElementById("result").textContent = "WIN"

            cpubutton.style.borderColor =  "hsl(39, 89%, 49%) ";
            cpubutton.style.borderRadius =  "75% 75%";
          break;
          case 2:
            cpuoption = document.getElementById("cpu--option");
            cpuoption.src = "./images/icon-rock.svg"
            document.getElementById("result").textContent = "DRAFT"

            cpubutton.style.borderColor =  "hsl(349, 71%, 52%) ";
            cpubutton.style.borderRadius =  "75% 75%";
              break;
        default:
            
      }
    
});


var scissors = document.getElementById("scissors--figure");
scissors.addEventListener("click", function () {
    console.log("scissors")
    gameover.style.removeProperty('display');
    scissorsitem.style.display = "none";
    rockitem.style.display = "none";
    paperitem.style.display = "none";
    figure = "scissors";

    useroption = document.getElementById("user--option"); 
    useroption.src = "./images/icon-" + figure + ".svg"

    cpunumber = Math.floor(Math.random() *  (max - min)) + min;
    
     
    cpuoption = document.getElementById("cpu--option"); 
    userbutton.style.borderColor =  "hsl(39, 89%, 49%)";
    userbutton.style.borderRadius =  "75% 75%";

    switch(cpunumber) {
        case 0:
            cpuoption = document.getElementById("cpu--option");
            cpuoption.src = "./images/icon-paper.svg"
            score++
            document.getElementById("counter").textContent = score
            document.getElementById("result").textContent = "WIN"

            cpubutton.style.borderColor =  "hsl(230, 89%, 62%) ";
            cpubutton.style.borderRadius =  "75% 75%";
          break;
        case 1:
            cpuoption = document.getElementById("cpu--option");
            cpuoption.src = "./images/icon-scissors.svg"
        
            document.getElementById("result").textContent = "DRAFT"

            cpubutton.style.borderColor =  "hsl(39, 89%, 49%) ";
            cpubutton.style.borderRadius =  "75% 75%";
          break;
          case 2:
            cpuoption = document.getElementById("cpu--option");
            cpuoption.src = "./images/icon-rock.svg"
            score--
            document.getElementById("counter").textContent = score
            document.getElementById("result").textContent = "LOSE"

            cpubutton.style.borderColor =  "hsl(349, 71%, 52%) ";
            cpubutton.style.borderRadius =  "75% 75%";
              break;
        default:
            
      }


});


var paper = document.getElementById("paper--figure");
paper.addEventListener("click", function () {
    console.log("paper")
    gameover.style.removeProperty('display');
    scissorsitem.style.display = "none";
    rockitem.style.display = "none";
    paperitem.style.display = "none";
    figure = "paper";
    useroption = document.getElementById("user--option"); 
    useroption.src = "./images/icon-" + figure + ".svg"

    useroption = document.getElementById("user--option"); 
    useroption.src = "./images/icon-" + figure + ".svg"

    cpunumber = Math.floor(Math.random() *  (max - min)) + min;
    
     
    cpuoption = document.getElementById("cpu--option"); 
    userbutton.style.borderColor =  "hsl(230, 89%, 62%)";
    userbutton.style.borderRadius =  "75% 75%";
    

    switch(cpunumber) {
        case 0:
            cpuoption = document.getElementById("cpu--option");
            cpuoption.src = "./images/icon-paper.svg"
            
            document.getElementById("counter").textContent = score
            document.getElementById("result").textContent = "DRAFT"

            cpubutton.style.borderColor =  "hsl(230, 89%, 62%) ";
            cpubutton.style.borderRadius =  "75% 75%";
          break;
        case 1:
            cpuoption = document.getElementById("cpu--option");
            cpuoption.src = "./images/icon-scissors.svg"
            score--
            document.getElementById("counter").textContent = score
            document.getElementById("result").textContent = "LOSE"

            cpubutton.style.borderColor =  "hsl(39, 89%, 49%) ";
            cpubutton.style.borderRadius =  "75% 75%";
          break;
          case 2:
            cpuoption = document.getElementById("cpu--option");
            cpuoption.src = "./images/icon-rock.svg"
            score++
            document.getElementById("counter").textContent = score
            document.getElementById("result").textContent = "WIN"

            cpubutton.style.borderColor =  "hsl(349, 71%, 52%) ";
            cpubutton.style.borderRadius =  "75% 75%";
              break;
        default:
            
      }

});

var playagain = document.getElementById("play--again");
playagain.addEventListener("click", function () {

    gameover.style.display = "none";
    scissorsitem.style.display = "flex";
    rockitem.style.display = "flex";
    paperitem.style.display = "flex";

})