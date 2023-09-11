const goButton = document.getElementById("goButton");
const toBe = document.getElementById("tobe");
const presentContinuous = document.getElementById("presentContinuous");
const simplePresent = document.getElementById("simplePresent");
const simplePast = document.getElementById("simplePast");
const presentPerfect = document.getElementById("presentPerfect");
const basicVocabulary = document.getElementById("basicVocabulary");
let userChoice = "";

toBe.addEventListener("click", function () {
  userChoice = "/LangApp/to_be/index.html";
  goButton.href = userChoice;
});
presentContinuous.addEventListener("click", function () {
  userChoice = "/present_continuous/index.html";
  goButton.href = userChoice;
});
simplePresent.addEventListener("click", function () {
  userChoice = "/simple_present/index.html";
  goButton.href = userChoice;
});
simplePast.addEventListener("click", function () {
  userChoice = "/simple_past/index.html";
  goButton.href = userChoice;
});
presentPerfect.addEventListener("click", function () {
  userChoice = "/present_perfect/index.html";
  goButton.href = userChoice;
});
basicVocabulary.addEventListener("click", function () {
  userChoice = "/basic_vocabulary/index.html";
  goButton.href = userChoice;
});
