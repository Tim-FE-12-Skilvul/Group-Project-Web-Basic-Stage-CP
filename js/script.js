// style navbar
const hamburger = document.querySelector("#hamburger-container");
const menuNav = document.querySelector("#menuNav");
const pencarianNav = document.querySelector("#pencarianNav");

hamburger.addEventListener("click", () => {
  menuNav.classList.toggle("active");
  pencarianNav.classList.toggle("active");
});

// style status persen
window.onload = function () {
  var count1 = 12.3;
  var count2 = 0;
  var count3 = 0;
  var count4 = 25.5;

  var interval1 = setInterval(function () {
    count1 += 0.1;
    document.getElementById("percentage1").innerHTML =
      "<b>" + count1.toFixed(1) + "%</b>";
    if (count1 >= 24.4) {
      clearInterval(interval1);
    }
  }, 25);

  var interval2 = setInterval(function () {
    count2 += 0.1;
    document.getElementById("percentage2").innerHTML =
      "<b>" + count2.toFixed(1) + "%</b>";
    if (count2 >= 7.0) {
      clearInterval(interval2);
    }
  }, 25);

  var interval3 = setInterval(function () {
    count3 += 0.1;
    document.getElementById("percentage3").innerHTML =
      "<b>" + count3.toFixed(1) + "%</b>";
    if (count3 >= 16.9) {
      clearInterval(interval3);
    }
  }, 25);

  var interval4 = setInterval(function () {
    count4 += 0.1;
    document.getElementById("percentage4").innerHTML =
      "<b>" + count4.toFixed(1) + "%</b>";
    if (count4 >= 52.5) {
      clearInterval(interval4);
    }
  }, 25);
};
