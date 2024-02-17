// price multiplier for each condition + brand ( rarity )

/* how would you add randomness, I have a list of all the conditions. 
    how do you take that option and add weight to it

*/

const cyberwareOptions = {
  conditions: [
    {
      name: "Broken",
      priceModifier: 0.5,
    },
    {
      name: "Scarred (Breaks on 1)",
      priceModifier: 0.75,
    },
    {
      name: "Stained (-1 Style)",
      priceModifier: 0.75,
    },
    {
      name: "Chipped (-1 when using)",
      priceModifier: 0.9,
    },
    {
      name: "Decent",
      priceModifier: 1,
    },
    {
      name: "Mint (+1 when using)",
      priceModifier: 1.1,
    },
    {
      name: "Antique (+1 Style)",
      priceModifier: 1.5,
    },
    {
      name: "Etched (+1 Style)",
      priceModifier: 1.5,
    },
    {
      name: "Chromed (+1 Style)",
      priceModifier: 2,
    },
    {
      name: "Realskinn ",
      priceModifier: 2,
    },
    {
      name: "Prototype (2x effects, breaks on Crit/Fumble)",
      priceModifier: 3,
    },
    {
      name: "Masterwork (2x effects)",
      priceModifier: 5,
    },
  ],
  brands: [
    // this is a very stupid way of doing rarities in lists
    // rarity 4
    "BLACKHAMMER",
    "BLACKHAMMER",
    "BLACKHAMMER",
    "BLACKHAMMER",
    // rarity 4
    "MILITECHKA",
    "MILITECHKA",
    "MILITECHKA",
    "MILITECHKA",
    // rarity 4
    "GRIMM",
    "GRIMM",
    "GRIMM",
    "GRIMM",
    // rarity 4
    "LOCKHEED",
    "LOCKHEED",
    "LOCKHEED",
    "LOCKHEED",
    // rarity 4
    "U.S.ARMS",
    "U.S.ARMS",
    "U.S.ARMS",
    "U.S.ARMS",
    // rarity 5
    "MANN",
    "MANN",
    "MANN",
    "MANN",
    "MANN",
    // rarity 5
    "REBRIDGE",
    "REBRIDGE",
    "REBRIDGE",
    "REBRIDGE",
    "REBRIDGE",
    // rarity 10
    "KARPATIKA",
    "KARPATIKA",
    "KARPATIKA",
    "KARPATIKA",
    "KARPATIKA",
    "KARPATIKA",
    "KARPATIKA",
    "KARPATIKA",
    "KARPATIKA",
    "KARPATIKA",
    // rarity 5
    "BYZANTIUM",
    "BYZANTIUM",
    "BYZANTIUM",
    "BYZANTIUM",
    "BYZANTIUM",
    // rarity 5
    "WULFHUND",
    "WULFHUND",
    "WULFHUND",
    "WULFHUND",
    "WULFHUND",
    // rarity 10
    "MEGA",
    "MEGA",
    "MEGA",
    "MEGA",
    "MEGA",
    "MEGA",
    "MEGA",
    "MEGA",
    "MEGA",
    "MEGA",
    // rarity 5
    "BUDGETARMS",
    "BUDGETARMS",
    "BUDGETARMS",
    "BUDGETARMS",
    "BUDGETARMS",
    // rarity 5
    "VICEROY",
    "VICEROY",
    "VICEROY",
    "VICEROY",
    "VICEROY",
    // rarity 5
    "SHIZUKU",
    "SHIZUKU",
    "SHIZUKU",
    "SHIZUKU",
    "SHIZUKU",
    // rarity 5
    "KOWLUNG",
    "KOWLUNG",
    "KOWLUNG",
    "KOWLUNG",
    "KOWLUNG",
    // rarity 2
    "ZENTAI",
    "ZENTAI",
    // rarity 2
    "DOSTOEV",
    "DOSTOEV",
    // rarity 2
    "CHASSEUR",
    "CHASSEUR",
    // rarity 5
    "DECHEVEAU",
    "DECHEVEAU",
    "DECHEVEAU",
    "DECHEVEAU",
    "DECHEVEAU",
    // rarity 2
    "ZIDOVKA",
    "ZIDOVKA",
    // rarity 3
    "STREET",
    "STREET",
    "STREET",
    // rarity 1
    "ARMY",
    // rarity 1
    "POLICE",
    // rarity 1
    "BLACK OPS",
    // rarity 1
    "SCAV",
  ],
  types: [
    "Skillchip",
    "Leg",
    "Arm",
    "Eyes",
    "Neuralink",
    "Hand",
    "Foot",
    "Internal",
    "Audio",
    "Skin",
    "Skeleton",
    "Exotic",
  ],
  codenames: [
    "LX",
    "KLF",
    "ARB",
    "IRN",
    "IRQ",
    "ROM",
    "LUX",
    "SXY",
    "SXS",
    "SOR",
    "PRS",
    "GRM",
    "PRM",
    "MDV",
    "RSS",
    "USA",
    "SUA",
    "RSA",
    "XLR",
    "XQP",
    "MSA",
    "KKW",
    "PPQ",
    "PPR",
    "PPW",
    "MAJ",
    "KNG",
    "QNN",
    "JKR",
    "JFK",
    "FDR",
    "DEJ",
    "GDJ",
    "NCL",
    "BUC",
    "IAS",
    "CLJ",
    "SCV",
    "VSL",
    "CRB",
    "CVA",
  ],
};

function generateCyberware() {
  const randomConditionIndex = getRandomIndex(cyberwareOptions.conditions);
  const randomBrandIndex = getRandomIndex(cyberwareOptions.brands);
  const randomTypeIndex = getRandomIndex(cyberwareOptions.types);
  const randomCodenameIndex = getRandomIndex(cyberwareOptions.codenames);
  const randomPriceIndex = getRandomIndex(cyberwareOptions.prices);

  const condition = cyberwareOptions.conditions[randomConditionIndex];
  const brand = cyberwareOptions.brands[randomBrandIndex];
  const type = cyberwareOptions.types[randomTypeIndex];
  const codename = cyberwareOptions.codenames[randomCodenameIndex];
  const price = cyberwareOptions.prices[randomPriceIndex];

  const rarityIndex = getRandomIndex(cyberwareOptions.rarities);
  const rarity = cyberwareOptions.rarities[rarityIndex];

  price = priceCalculator(type, brand, condition);

  const generatedCyberware = new Cyberware(
    brand,
    condition,
    type,
    codename,
    price,
    rarity
  );

  document.getElementById("cyberwareResult").innerHTML =
    "Generated Cyberware: " + generatedCyberware.toString();

  // Enable the download link
  document.getElementById("downloadLink").style.display = "block";
  // Set the download link href to a data URI containing the generated content
  document.getElementById("downloadLink").href =
    "data:text/plain;charset=utf-8," +
    encodeURIComponent(generatedCyberware.toString());
}



function getRandomItemFrom(probabilities) {
  let checkSum = 0;
  Object.keys(probabilities).forEach((key, index) => {
    checkSum += probabilities[key];
  });
  if (checkSum !== 1) {
    console.log("not 1");
    return "Probability items don't sum to 1";
  }

  let s = 0;

  let weights = Object.values(probabilities);
  let results = Object.keys(probabilities).map((key, index) => {
    return index;
  });
  // console.log(weights, results);

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
  console.log(s, num, chosen);

  console.log(Object.keys(probabilities)[chosen]);
}

function generate(){
  
}