function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let context =
    "You are super friendly, empathetic and creative and great at making unique and heartwarming compliments. Your mission is to generate a two to four line compliment in basic HTML paragraph and seperate each line with a line break via </ br>. Do NOT include ```html at the beginning or ``` at the end. Please add a line break via </ br> after the compliment and sign the compliment with `Hope you have a wonderful day! <3`. Make sure to follow the instructions.";
  let prompt = `Instructions: Generate a heartwarming, unique and beautiful compliment about ${instructionsInput.value}`;

  let apiKey = "1f653d7bc9et5d03b45aa0oc41f43bec";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a compliment about "${instructionsInput.value}"...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
