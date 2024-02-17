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

// step 3

let budgetConditions = {
  Broken: 0.1,
  "Scarred (Breaks on 1)": 0.2,
  "Stained (-1 Style)": 0.2,
  "Chipped (-1 when using)": 0.15,
  Decent: 0.1,
  "Mint (+1 when using)": 0.07,
  "Antique (+1 Style)": 0.03,
  "Etched (+1 Style)": 0.03,
  "Chromed (+1 Style)": 0.03,
  Realskinn: 0.05,
  "Prototype (2x effects, breaks on Crit/Fumble)": 0.03,
  "Masterwork (2x effects)": 0.01,
};
let industrialConditions = {
  Broken: 0.05,
  "Scarred (Breaks on 1)": 0.05,
  "Stained (-1 Style)": 0.25,
  "Chipped (-1 when using)": 0.2,
  Decent: 0.3,
  "Mint (+1 when using)": 0.05,
  "Antique (+1 Style)": 0.01,
  "Etched (+1 Style)": 0.01,
  "Chromed (+1 Style)": 0.01,
  Realskinn: 0.01,
  "Prototype (2x effects, breaks on Crit/Fumble)": 0.05,
  "Masterwork (2x effects)": 0.01,
};
let militaryConditions = {
  Broken: 0.01,
  "Scarred (Breaks on 1)": 0.01,
  "Stained (-1 Style)": 0.15,
  "Chipped (-1 when using)": 0.2,
  Decent: 0.2,
  "Mint (+1 when using)": 0.15,
  "Antique (+1 Style)": 0.02,
  "Etched (+1 Style)": 0.06,
  "Chromed (+1 Style)": 0.05,
  Realskinn: 0.02,
  "Prototype (2x effects, breaks on Crit/Fumble)": 0.1,
  "Masterwork (2x effects)": 0.03,
};
let luxuryConditions = {
  Broken: 0.05,
  "Scarred (Breaks on 1)": 0.03,
  "Stained (-1 Style)": 0.02,
  "Chipped (-1 when using)": 0.05,
  Decent: 0.15,
  "Mint (+1 when using)": 0.1,
  "Antique (+1 Style)": 0.15,
  "Etched (+1 Style)": 0.1,
  "Chromed (+1 Style)": 0.1,
  Realskinn: 0.1,
  "Prototype (2x effects, breaks on Crit/Fumble)": 0.05,
  "Masterwork (2x effects)": 0.1,
};
let specialConditions = {
  Broken: 0.1,
  "Scarred (Breaks on 1)": 0.05,
  "Stained (-1 Style)": 0.02,
  "Chipped (-1 when using)": 0.1,
  Decent: 0.1,
  "Mint (+1 when using)": 0.05,
  "Antique (+1 Style)": 0.02,
  "Etched (+1 Style)": 0.02,
  "Chromed (+1 Style)": 0.05,
  Realskinn: 0.04,
  "Prototype (2x effects, breaks on Crit/Fumble)": 0.35,
  "Masterwork (2x effects)": 0.1,
};

function generateCyberware() {
  document.getElementById("cyberwareResult").innerHTML =
    "Generated Cyberware: <ul> ";

  let begin = "<li>";

  let cybernetic = getRandomItemFrom(cybernetics);

  let price = 0;
  if (cybernetic == "Skillchip") price = 20;
  if (cybernetic == "Leg") price = 100;
  if (cybernetic == "Arm") price = 100;
  if (cybernetic == "Eyes") price = 150;
  if (cybernetic == "Neuralink") price = 200;
  if (cybernetic == "Hand") price = 70;
  if (cybernetic == "Foot") price = 50;
  if (cybernetic == "Internal") price = 200;
  if (cybernetic == "Audio") price = 80;
  if (cybernetic == "Skin") price = 50;
  if (cybernetic == "Skeleton") price = 300;
  if (cybernetic == "Exotic") price = 400;

  // step 2
  let brand = getRandomItemFrom(brands);
  let brandColour = "";
  let condition = "";

  if (brand.startsWith("MILITARY")) {
    brandColour = "green";
    price = price * 3;
    condition = getRandomItemFrom(militaryConditions);
  }
  if (brand.startsWith("BUDGET")) {
    brandColour = "beige";
    price = price * 1;
    condition = getRandomItemFrom(budgetConditions);
  }
  if (brand.startsWith("SPECIAL")) {
    brandColour = "darkgray";
    price = price * 10;
    condition = getRandomItemFrom(specialConditions);
  }
  if (brand.startsWith("INDUSTRIAL")) {
    brandColour = "orange";
    price = price * 2;
    condition = getRandomItemFrom(industrialConditions);
  }
  if (brand.startsWith("LUXURY")) {
    brandColour = "purple";
    price = price * 5;
    condition = getRandomItemFrom(luxuryConditions);
  }

  // step 4

  if (condition == "Broken") price = price * 0.5;
  if (condition == "Scarred (Breaks on 1)") price = price * 0.75;
  if (condition == "Stained (-1 Style)") price = price * 0.75;
  if (condition == "Chipped (-1 when using)") price = price * 0.9;
  if (condition == "Decent") price = price * 1;
  if (condition == "Mint (+1 when using)") price = price * 1.1;
  if (condition == "Antique (+1 Style)") price = price * 1.5;
  if (condition == "Etched (+1 Style)") price = price * 1.5;
  if (condition == "Chromed (+1 Style)") price = price * 2;
  if (condition == "Realskinn") price = price * 2;
  if (condition == "Prototype (2x effects, breaks on Crit/Fumble)")
    price = price * 3;
  if (condition == "Masterwork (2x effects)") price = price * 5;

  price = price.toFixed(2);

  cyberwareResult = begin.concat(
    "Cybernetic: ",
    cybernetic,
    '</li><li style="color:',
    brandColour,
    '"> Brand: ',
    brand,
    "</li><li> Condition: ",
    condition,
    '</li><li style="color:gold"> Price: ',
    price,
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
