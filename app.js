// else if condition
let number = 9;

// if (number >= 18 && number <= 20) {
//   console.log("Good job");
// } else if (number >= 15 && number <= 18) {
//   console.log("Good");
// } else if (number >= 12 && number <= 15) {
//   console.log("Need for effort");
// } else if (number >= 0 && number <= 12) {
//   console.log("Bad");
// } else {
//   console.log("Invalid Number");
// }

//switch
switch (true) {
  case (number > 18 && number <= 20):
      console.log('Excellent');
      break;
      
  case (number >= 15 && number <= 18):
      console.log('Great');
      break;
      
  case (number >= 12 && number < 15):
      console.log('Good');
      break;
      case (number >= 10 && number <= 12) :
        console.log('Not Bad')
        break
        case (number >= 0 && number <= 10) :
          console.log('Bad')
          break
  default:
      console.log('Invalid Number');
      break;
}