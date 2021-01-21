function leader(username,score){
  console.log(chalk.bgBlue.bold("\nCurrent Leaderboard:\n"));
  console.log(chalk.bgYellow.bold("Name                    Points"));
  console.log(chalk.bgBlue("Viven                   12"));
  console.log(chalk.bgBlue("Deepak                  12"));
  if(score<8){
  console.log(chalk.bgBlue("Surya                   8"));}
  else{
        var len=username.length;
        for(i=0;i<24-len;i++){username+=" ";}
        console.log(chalk.bgBlue(username+score));
    }
}
function play(arr){
  for(var i=1;i<arr.length;i++){
    var q=arr[i];
    console.log(chalk.bgCyan("\n"+i+". "+q.qst));
    console.log(chalk.cyan(q.op1));
    console.log(chalk.cyan(q.op2));
    console.log(chalk.cyan(q.op3));
    console.log(chalk.cyan(q.op4));
    var ans=readlineSync.question("\nYour answer:");
    if(ans==q.sol){
        score+=3;
        console.log(chalk.bgGreen("woohoooo!!!! Right answer!"));
      }
    else{
      score--;
      console.log(chalk.bgRed("Sorry Incorrect:( Try Again!"));
      }
    console.log("\n\t\t\t************************************************");
  }
}
function category(choice){
  pro=[1,{
    qst:"Inside which HTML element do we put the JavaScript?",
    sol:"b",
    op1:"a.<link>",op2:"b.<script>",op3:"c.<javascript>",op4:"d.<scripting>"
  },
  {
    qst:"In the JavaScript, which one of the following is not considered as an error?",
    sol:"c",
    op1:"a.Syntax error",op2:"b.Missing of semicolons",op3:"c.Division by zero",op4:"d.Missing of Bracket"
  },
  {
    qst:"Which one of the following is not a keyword?",
    sol:"d",
    op1:"a.with",op2:"b.if",op3:"c.debugger",op4:"d.use strict"
  },
  {
    qst:"A collection of elements of the same data type which may either in order or not, is called _____?",
    sol:"c",
    op1:"a.String",op2:"b.Serialized Object",op3:"c.Array",op4:"d.Object"
  }];
  math=[2,{
    qst:"What is the value of x if x^2 = 169?",
    sol:"d",
    op1:"a.17",op2:"b.19",op3:"c.1",op4:"d.13"
  },
  {
    qst:"The binary equivalent of the decimal number 125 is?",
    sol:"b",
    op1:"a.1100100",op2:"b.1111101",op3:"c.1101100",op4:"d.1111111"
  },
{
    qst:"The value of 81+(9*9)+(18*9)?",
    sol:"c",
    op1:"a.251",op2:"b.387",op3:"c.324",op4:"d.224"
  },
{
    qst:"In a century how many months are there?",
    sol:"b",
    op1:"a.12000",op2:"b.1200",op3:"c.120",op4:"d.12"
  }];
  mov=[3,{
    qst:"Guess the movie by this dialogue:-Don't underestimate the power of a common man",
    sol:"b",
    op1:"a.Housefull 3",op2:"b.Chennai Express",op3:"c.PK",op4:"d.Bharat"
  },
  {
    qst:"Which Bollywood star's Birthday is on 27 December?",
    sol:"d",
    op1:"a.Sharukh Khan",op2:"b.Akshay Kumar",op3:"c.Aamir Khan",op4:"d.Salman Khan"
  },
{
    qst:"Movie in which Amitab Bachan,Sharukh Khan and Hrithik Roshan acted together?",
    sol:"a",
    op1:"a.Kabhi Kushi Kabhi Gham",op2:"b.Dilwale Dulhaniya",op3:"c.Kahona pyar hii",op4:"d.None"
  },
  {
    qst:"Which song is most famous for Friendship?",
    sol:"c",
    op1:"a.Baby Doll",op2:"b.Daaru Desi",op3:"c.Yeh Dosti",op4:"d.Tera Yaar hoon main"
  }];
  cric=[4,{
    qst:"Which Indian Cricket player is called Master Blaster?",
    sol:"c",
    op1:"a.Dhoni",op2:"b.Virat Kohli",op3:"c.Sachin Tendulkar",op4:"d.Dravid"
  },
{
    qst:"Who hit 36 runs in an over vs England?",
    sol:"a",
    op1:"a.Yuvraj Singh",op2:"b.Mohammed Kaif",op3:"c.Harbajan Singh",op4:"d.None"
  },
{
    qst:"Which cicket player is famous for Memes?",
    sol:"b",
    op1:"a.Virat Kohli",op2:"b.Ravi Shastri",op3:"c.Dhoni",op4:"d.Bumrah"
  },
{
    qst:"IPL Team that never played finals?",
    sol:"c",
    op1:"a.KKR",op2:"b.SRH",op3:"c.DC",op4:"d.RCB"
  }];
  if(choice==pro[0]){play(pro);}
  else if(choice==math[0]){play(math);}
  else if(choice==mov[0]){play(mov);}
  else{play(cric);}
}
function Quiz(username){
  console.log(chalk.bgBlue('\n1.Programming 2.Math 3.Movies 4.Cricket'));
  var choice=readlineSync.question('Select your Choice:');
  category(choice);
}
var readlineSync=require('readline-sync');
const chalk = require('chalk');
var username=readlineSync.question('Please provide us your name:');
var score=0;
 console.log(chalk.bgBlue('\n\t\t\t\t\t\tWelcome to the Quiz '+username+'!!!\n'));
console.log(chalk.bgBlue.bold("\nRules: "));
console.log(chalk.bgBlue("1. There are total of 4 questions. All are compulsory."));
console.log(chalk.bgBlue("2. Each right answer will give you 3 points."));
console.log(chalk.bgBlue("3. 1 point will be deducted for each wrong answers."));
leader(username,score);
Quiz(username);

if(score>=10 && score<=12){
  console.log(chalk.bgCyan("YOUR SCORE IS:"+score+"\n"));
  leader(username,score);
  console.log(chalk.bgBlue("\nYOU ARE UNSTOPPABLE,"+username+" SEE YOU NEXT TIME BUHBYE..."));
}
else if(score>=6 && score<10){
  console.log(chalk.bgCyan("YOUR SCORE IS:"+score+"\n"));
  leader(username,score);
  console.log(chalk.bgBlue("\nWELL,KEEP IT UP,"+username+" SEE YOU NEXT TIME BUHBYE..."));
}
else{
  console.log(chalk.bgCyan("YOUR SCORE IS:"+score+"\n"));
  leader(username,score);
  console.log(chalk.bgBlue("\nHMMMMM,NICE TRY,"+username+" SEE YOU NEXT TIME BUHBYE..."));
}
 console.log("\n\t\t\t************************************************");
