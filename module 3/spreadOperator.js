let top3 = ["Colocium Museam", "Pound", "Vatican City"];

function showTour(place1, place2, place3) {
  console.log("first visit", place1);
  console.log("then you can visit", place2);
  console.log("Your last destiantion is", place3);
}

// showTour(top3[0], top3[1], top3[2]);
showTour(...top3);
