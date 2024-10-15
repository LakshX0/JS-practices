function consoleStyler(color, background, fontSize, txt) {
  var message = "%c" + txt;
  var style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;

  console.log(message);
  console.log(style);
}

function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else console.log(message, style);
}

consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
celebrateStyler("birthday");

function styleAndCelebrate() {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

styleAndCelebrate("ef7c8e", "fae8e0", "30px", "You made it!", "champions");
