window.addEventListener("DOMContentLoaded", () => {
  let displayArea = document.getElementById("displayArea");
  let btns = Array.from(document.getElementsByClassName("buttons"));

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
        default:
          displayArea.innerText += currentBtnTxt;
      }
    });
  });
});
