// step 1
let cybernetics = {
  Skillchip: 0.15,
  Leg: 0.15,
  Arm: 0.15,
  Eyes: 0.15,
  Neuralink: 0.1,
  Hand: 0.05,
  Foot: 0.05,
  Internal: 0.05,
  Audio: 0.05,
  Skin: 0.05,
  Skeleton: 0.03,
  Exotic: 0.02,
};

// step 2

let brands = {
  "MILITARY BLACKHAMMER": 0.04,
  "MILITARY MILITECHKA": 0.04,
  "MILITARY GRIMM": 0.04,
  "MILITARY LOCKHEED": 0.04,
  "MILITARY U.S.ARMS": 0.04,
  "BUDGET MEGA": 0.1,
  "BUDGET BUDGETARMS": 0.05,
  "BUDGET VICEROY": 0.05,
  "BUDGET SHIZUKU": 0.05,
  "BUDGET KOWLUNG": 0.05,
  "SPECIAL STREET": 0.03,
  "SPECIAL ARMY": 0.01,
  "SPECIAL POLICE": 0.01,
  "SPECIAL BLACK OPS": 0.01,
  "SPECIAL SCAV": 0.01,
  "INDUSTRIAL MANN": 0.05,
  "INDUSTRIAL REBRIDGE": 0.05,
  "INDUSTRIAL KARPATIKA": 0.1,
  "INDUSTRIAL BYZANTIUM": 0.05,
  "INDUSTRIAL WULFHUND": 0.05,
  "LUXURY ZENTAI": 0.02,
  "LUXURY DOSTOEV": 0.02,
  "LUXURY CHASSEUR": 0.02,
  "LUXURY DECHEVEAU": 0.05,
  "LUXURY ZIDOVKA": 0.02,
};

function generateCyberware() {
  document.getElementById("cyberwareResult").innerHTML =
    "Generated Cyberware: <ul> ";

  let begin = "<li>";

  let cybernetic = getRandomItemFrom(cybernetics);
  // step 2
  let brand = getRandomItemFrom(brands);
  let brandColour = "";
  if (brand.startsWith("MILITARY")) brandColour = "green";
  if (brand.startsWith("BUDGET")) brandColour = "beige";
  if (brand.startsWith("SPECIAL")) brandColour = "darkgray";
  if (brand.startsWith("INDUSTRIAL")) brandColour = "orange";
  if (brand.startsWith("LUXURY")) brandColour = "purple";

  cyberwareResult = begin.concat(
    "Cybernetic: ",
    cybernetic,
    '</li><li style="color:',
    brandColour,
    '">',
    brand,
    "</li></ul>"
  );

  document
    .getElementById("cyberwareResult")
    .insertAdjacentHTML("beforeend", cyberwareResult);

  // Enable the download link
  document.getElementById("downloadLink").style.display = "block";
  // Set the download link href to a data URI containing the generated content
  document.getElementById("downloadLink").href =
    "data:text/plain;charset=utf-8," +
    encodeURIComponent(generateCyberware.toString());
}

function getRandomItemFrom(probabilities) {
  let checkSum = 0;
  Object.keys(probabilities).forEach((key, index) => {
    checkSum += probabilities[key];
  });
  if (checkSum.toFixed(2) != 1) {
    console.log("not 1 but ", checkSum);
    return "Probability items don't sum to 1";
  }

  let s = 0;

  let weights = Object.values(probabilities);

  let num = Math.random();
  let lastIndex = weights.length;

  let chosen = -1;

  for (let i = 0; i < lastIndex; ++i) {
    s += weights[i];
    if (num < s) {
      chosen = i;
      break;
    }
  }

  if (chosen == -1) {
    return "something went wrong";
  }
  console.log(Object.keys(probabilities)[chosen]);
  return Object.keys(probabilities)[chosen];
}
