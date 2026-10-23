//Temlate literais
let product1 = "pizza";
let price1 = 500;
let product2 = "coca";
let price2 = 50;
let total = price1 + price2;
let html =
  "<ul>" +
  "<li>" +
  product1 +
  ":" +
  " " +
  price1 +
  "</li>" +
  "<li>" +
  product2 +
  ":" +
  " " +
  price2 +
  "</li>" +
  "<li>" +
  "total" +
  ":" +
  " " +
  total +
  "</li>" +
  "</ul>";
let app = document.getElementById("app");
app.innerHTML = html;

//new es6
let html2 = `
<ul>
<li>${product1}: ${price1}</li>
<li>${product2}: ${price2}</li>
<li>total: ${total}</li>
</ul>
`
let app2 = document.getElementById("app2");
app2.innerHTML = html;
