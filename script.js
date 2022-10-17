let calculate = document.getElementById("calculate");

calculate.addEventListener("click", () => {
  let totalBill = document.getElementById("totalBill");

  let tipPercent = document.getElementById("tipPercent");

  let sharing = document.getElementById("sharing");
  let tip = document.getElementById("tip");

  let tipamount = ((totalBill.value * tipPercent.value) /sharing.value).toFixed(2);
  if(tipamount ==0||tipamount === "NaN"){
alert("You have to fill all the Fields");
  };
    
    tip.innerHTML = tipamount;
});
