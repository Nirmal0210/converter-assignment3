// Conversion rate from CAD to USD (hardcoded for demonstration)
const cadToUsdRate = 0.8;
// Conversion rate from USD to CAD (hardcoded for demonstration)
const usdToCadRate = 1.25;

function convert() {
  var cadInput = null;
  cadInput = document.getElementById("cadInput").value;
  var usdInput = null;
  usdInput = document.getElementById("usdInput").value;
  console.log(cadInput, usdInput);
  if (cadInput && usdInput) {
    alert("One must be empty");
  } else {
    if (cadInput) {
      const cadAmount = parseFloat(cadInput);
      const usdAmount = (cadAmount * cadToUsdRate).toFixed(3);
      document.getElementById("usdInput").setAttribute('value',usdAmount);
    } else {
      const usdAmount = parseFloat(usdInput);
      const cadAmount = (usdAmount * usdToCadRate).toFixed(3);
      document.getElementById("cadInput").setAttribute('value',cadAmount);
    }
  }
}
