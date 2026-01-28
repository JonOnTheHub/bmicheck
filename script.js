// BMI Calculator Script, by Jon.
// determines BMI and provides health advice based on the result.

// START
// ask user for weight
// ask user for height
// bmi = weight / (height * height)

// IF bmi < 18.5
//     situation = underweight
// ELSE IF bmi < 25
//     situation = healthy
// ELSE IF bmi < 30
//     situation = overweight
// ELSE
//     situation = obese

// display bmi and situation
// END

// const bmiCalc = () => {
//   let weight = parseFloat(prompt("Your weight in kilograms: "));
//   let height = parseFloat(prompt("Your height in meters: "));

//   let bmi = weight / (height * height);
//   let situation;

//   if (isNaN(weight) || isNaN(height) || height <= 0) {
//     alert("enter valid numbers. are you scared to check lmao?");
//     return;
//   }

//   switch (true) {
//     case bmi < 18.5:
//       situation = "underweight. eat real food.";
//       break;

//     case bmi >= 18.5 && bmi < 25:
//       situation = "a healthy weight. keep it up.";
//       break;

//     case bmi >= 25 && bmi < 30:
//       situation = "overweight. eat salads.";
//       break;

//     case bmi >= 30 && bmi < 35:
//       situation = "obese (Class I). eat less, walk more.";
//       break;

//     case bmi >= 35 && bmi < 40:
//       situation = "obese (Class II). eat nothing, walk more.";
//       break;

//     default:
//       situation =
//         "severely obese (Class III). how did you even get to this point?.";
//   }

//   alert(`Your BMI is ${bmi.toFixed(1)}. You are ${situation}`);
// };

// bmiCalc();

const bmiCalc = (event) => {
  event.preventDefault();

  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  let bmiResult = document.querySelector(".bmi-result");

  if (!weight || !height) {
    alert("enter valid numbers. are you scared to check?");
    return;
  }

  bmiResult.className = "bmi-result";

  let bmi = weight / (height * height);
  let situation;
  let stateClass;

  switch (true) {
    case bmi < 18.5:
      situation = "underweight. eat real food.";
      stateClass = "underweight"
      break;

    case bmi >= 18.5 && bmi < 25:
      situation = "a healthy weight. body tea.";
      stateClass = "healthy"
      break;

    case bmi >= 25 && bmi < 30:
      situation = "overweight. salads, now.";
      stateClass = "overweight"
      break;

    case bmi >= 30 && bmi < 35:
      situation = "obese (Class I). eat less, walk more.";
      stateClass = "obese"
      break;

    case bmi >= 35 && bmi < 40:
      situation = "obese (Class II). eat nothing, walk more.";
      stateClass = "obese-v2"
      break;

    default:
      situation =
        "severely obese (Class III). how did you even get to this point?.";
      stateClass = "obese-v3"

  }

  bmiResult.textContent = `your BMI is ${bmi.toFixed(1)}. you are ${situation}`;
  bmiResult.classList.add(stateClass)
};

document.querySelector(".bmi-form").addEventListener("submit", bmiCalc);
