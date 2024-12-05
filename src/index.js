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
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML paragraph and seperate each line with a line break via </ br>. Do NOT include ```html at the beginning or ``` at the end. Please sign the poem with - AI Poet and add two line breaks via HTML </ br> after signing. After that, also add an English translation of the poem down below in cursive (italic HTML) and also sign it. Make sure to follow the instructions.";
  let prompt = `Instructions: Generate a french poem about ${instructionsInput.value}`;

  let apiKey = "1f653d7bc9et5d03b45aa0oc41f43bec";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about "${instructionsInput.value}"...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
