const dummyDB = [
  { uniqueNumber: "A123", units: 120 },
  { uniqueNumber: "B456", units: 80 },
  { uniqueNumber: "C789", units: 250 },
  { uniqueNumber: "D012", units: 600 },
  { uniqueNumber: "E345", units: 900 },
];

let INR = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 2,
  style: "currency",
  currency: "INR",
});

function calculateBill() {
  const uniqueNumber = document.getElementById("uniqueNumber").value;
  const user = dummyDB.find((user) => user.uniqueNumber === uniqueNumber);

  if (user) {
    const units = user.units;
    let charge = 0;
    let breakdown = "";

    if (units <= 100) {
      if (units <= 50) {
        charge = units * 1.45;
        breakdown = `${units} units @ ₹1.45/unit = ₹${(units * 1.45).toFixed(
          2
        )}`;
      } else {
        charge = 50 * 1.45 + (units - 50) * 2.6;
        breakdown = `50 units @ ₹1.45/unit = ₹${(50 * 1.45).toFixed(2)}<br>`;
        breakdown += `${units - 50} units @ ₹2.60/unit = ₹${(
          (units - 50) *
          2.6
        ).toFixed(2)}`;
      }
    } else if (units <= 200) {
      charge = 100 * 3.3 + (units - 100) * 4.3;
      breakdown = `100 units @ ₹3.30/unit = ₹${(100 * 3.3).toFixed(2)}<br>`;
      breakdown += `${units - 100} units @ ₹4.30/unit = ₹${(
        (units - 100) *
        4.3
      ).toFixed(2)}`;
    } else {
      if (units <= 300) {
        charge = 200 * 5.0 + (units - 200) * 7.2;
        breakdown = `200 units @ ₹5.00/unit = ₹${(200 * 5.0).toFixed(2)}<br>`;
        breakdown += `${units - 200} units @ ₹7.20/unit = ₹${(
          (units - 200) *
          7.2
        ).toFixed(2)}`;
      } else if (units <= 400) {
        charge = 200 * 5.0 + 100 * 7.2 + (units - 300) * 8.5;
        breakdown = `200 units @ ₹5.00/unit = ₹${(200 * 5.0).toFixed(2)}<br>`;
        breakdown += `100 units @ ₹7.20/unit = ₹${(100 * 7.2).toFixed(2)}<br>`;
        breakdown += `${units - 300} units @ ₹8.50/unit = ₹${(
          (units - 300) *
          8.5
        ).toFixed(2)}`;
      } else if (units <= 800) {
        charge = 200 * 5.0 + 100 * 7.2 + 100 * 8.5 + (units - 400) * 9.0;
        breakdown = `200 units @ ₹5.00/unit = ₹${(200 * 5.0).toFixed(2)}<br>`;
        breakdown += `100 units @ ₹7.20/unit = ₹${(100 * 7.2).toFixed(2)}<br>`;
        breakdown += `100 units @ ₹8.50/unit = ₹${(100 * 8.5).toFixed(2)}<br>`;
        breakdown += `${units - 400} units @ ₹9.00/unit = ₹${(
          (units - 400) *
          9.0
        ).toFixed(2)}`;
      } else {
        charge =
          200 * 5.0 + 100 * 7.2 + 100 * 8.5 + 400 * 9.0 + (units - 800) * 9.5;
        breakdown = `200 units @ ₹5.00/unit = ₹${(200 * 5.0).toFixed(2)}<br>`;
        breakdown += `100 units @ ₹7.20/unit = ₹${(100 * 7.2).toFixed(2)}<br>`;
        breakdown += `100 units @ ₹8.50/unit = ₹${(100 * 8.5).toFixed(2)}<br>`;
        breakdown += `400 units @ ₹9.00/unit = ₹${(400 * 9.0).toFixed(2)}<br>`;
        breakdown += `${units - 800} units @ ₹9.50/unit = ₹${(
          (units - 800) *
          9.5
        ).toFixed(2)}`;
      }
    }

    document.getElementById(
      "chargeDisplay"
    ).innerText = `Your charge is: ${INR.format(charge.toFixed(2))}`;
    document.getElementById("breakdown").innerHTML = breakdown;
  } else {
    document.getElementById("chargeDisplay").innerText =
      "Unique Number not found!";
    document.getElementById("breakdown").innerHTML = "";
  }
}
