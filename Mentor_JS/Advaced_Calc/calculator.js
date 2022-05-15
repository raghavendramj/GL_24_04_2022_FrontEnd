window.addEventListener("DOMContentLoaded", () => {
  let displayArea = document.getElementById("displayArea");
  let btns = Array.from(document.getElementsByClassName("buttons"));

  let validateNumber = () => {
    let displayTxt = displayArea.innerText;

    for (let i = 0; i < displayTxt.length; i++) {
      var ch = displayTxt.substring(i, i + 1);
      if (ch < "0" || ch > "9") {
        if (
          ch != "/" &&
          ch != "*" &&
          ch != "*+" &&
          ch != "-" &&
          ch != "." &&
          ch != "(" &&
          ch != ")"
        ) {
          alert("Invalid Entry");
          return false;
        }
      }
    }
    return true;
  };

  console.log("Buttons : ", document.getElementsByClassName("buttons"));
  btns.map((eachBtn) => {
    eachBtn.addEventListener("click", (e) => {
      let currentBtnTxt = e.target.innerText;
      console.log(currentBtnTxt);

      switch (currentBtnTxt) {
        case "C":
          displayArea.innerText = "";
          break;
        case "=":
          try {
            displayArea.innerText = eval(displayArea.innerText);
          } catch {
            displayArea.innerText = "Error Occurred";
          }
          break;
        case "<=":
          var txt = displayArea.innerText;
          if (txt) {
            // 10+233 = 10+23
            displayArea.innerText = txt.substring(0, txt.length - 1);
          }
          break;
        case "SQRT":
          if (validateNumber()) {
            displayArea.innerText = Math.sqrt(displayArea.innerText);
          }
          break;
        case "SQR":
          displayArea.innerText = displayArea.innerText * displayArea.innerText;
          break;
        case "LOG":
          displayArea.innerText = Math.log(displayArea.innerText);
          break;
        case "EXP":
          displayArea.innerText = Math.exp(displayArea.innerText);
          break;
        default:
          displayArea.innerText += currentBtnTxt;
      }
    });
  });
});
