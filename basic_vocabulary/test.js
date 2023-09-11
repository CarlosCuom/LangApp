//Main function
document.addEventListener("DOMContentLoaded", () => {
  const sentenceText = document.getElementById("sentence");
  const sentenceMeanin = document.getElementById("sentenceMeaning");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  const submit = document.getElementById("submit");
  const isRight = document.getElementById("isRight");
  const next = document.getElementById("next");
  let user = "";
  let randomExercise = 0;
  let answerText = "";
  var exeData;

  getData();

  next.addEventListener("click", function () {
    newSession(exeData);
    submit.removeAttribute("disabled");
  });

  async function getData() {
    //const requestURL =
    //  "";

    const requestURL = "./BasVoc_data.json";

    const request = new Request(requestURL);
    const response = await fetch(request);
    exeData = await response.json();
    console.log(exeData.nouns.length);
    newSession(exeData);
  }

  function newSession(obj) {
    //initialize the page elements values
    submit.innerHTML = "Check your answer";
    //isRight.innerHTML = "";
    user = "";
    next.setAttribute("disabled", "disabled");
    /*submit.style.color = "white";*/

    //choose a random exercise
    randomExercise = Math.floor(Math.random() * obj.nouns.length);

    //shuffle possible answers
    let choices = [
      obj.nouns[randomExercise].meaning,
      obj.nouns[randomExercise].option2,
      obj.nouns[randomExercise].option3,
    ];

    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    //Populate buttons
    const buttons = document.querySelectorAll(".button-class");
    buttons.forEach((button, index) => {
      button.innerHTML = choices[index];
    });

    //Populate the sentence and the meaning
    sentenceText.innerHTML = obj.nouns[randomExercise].word;
    //sentenceMeanin.innerHTML = obj.exercises[randomExercise].meaning;

    //buttons behaviour
    button1.addEventListener("click", function () {
      user = this.innerHTML;
      submit.innerHTML = "Check your answer";
      //isRight.innerHTML = user;
    });

    button2.addEventListener("click", function () {
      user = this.innerHTML;
      submit.innerHTML = "Check your answer";
      //isRight.innerHTML = user;
    });

    button3.addEventListener("click", function () {
      user = this.innerHTML;
      submit.innerHTML = "Check your answer";
      //isRight.innerHTML = user;
    });

    //submit button
    submit.addEventListener("click", function () {
      answerText = obj.nouns[randomExercise].meaning;
      if (user == answerText) {
        //isRight.innerHTML = "Correct answer!";
        submit.innerHTML = "Excellent!";
        /*submit.style.color = "green";*/
        submit.setAttribute("disabled", "disabled");
        next.removeAttribute("disabled");
      } else {
        //isRight.innerHTML = "Try again";
        /*submit.style.color = "red";*/
        submit.innerHTML = "Try again";
      }
    });
  }
});
