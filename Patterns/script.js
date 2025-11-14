
for (i = 5; i > 0; i--) {
  let row = "";
  for (j = 0; j < i; j++) {
    row += j + 1 + " ";
  }
  console.log(row);
}

for(i = 5; i > 0; i--) {
  let row = "";
  for(j = 0; j <= 5; j++) {
    if(j >= i) {
      row += "* "
    } else {
      row += "  "
    }
  }
  console.log(row);
}

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    if (j % 2 === 0) {
      row += "1 ";
    } else {
      row += "0 "
    }
  }
  console.log(row);
}

let toggle = "1";

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += toggle + " ";

    toggle = toggle === "1" ? "0" : "1";
  }

  console.log(row);
}