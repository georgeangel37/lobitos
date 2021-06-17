document.querySelector("#suform").addEventListener("submit", collectData);

async function collectData(event){
  event.preventDefault();
  const name = document.querySelector("#name");
  const namew = name.value.trim();
  const lastname = document.querySelector("#lastname");
  const lastnamew = lastname.value.trim();
  const email = document.querySelector("#email");
  const emailw = email.value.trim();
  const phonenumber = document.querySelector("#phonenumber");
  const phonenumberw = phonenumber.value.trim();
  const housenumber = document.querySelector("#housenumber");
  const housenumberw = housenumber.value.trim();
  const postcode = document.querySelector("#postcode");
  const postcodew = postcode.value.trim();
  const age = document.querySelector("#age");
  const agew = age.value.trim();
  const date = document.querySelector("#date");
  const datew = date.value.trim();
  const date2 = document.querySelector("#date2");
  const date2w = date2.value.trim();

    var user = {name: namew, lastname: lastnamew, email: emailw, phonenumber: phonenumberw, housenumber: housenumberw, postcode: postcodew, age: agew, date: datew, date2: date2w};
    console.log(user);
    const users = JSON.stringify(user);

    const result = await fetch("/submit-form", {method: "POST", headers: {"Content-Type": "application/json"}, body:users})
    .then(onPass,onFail);
};

async function onPass(res){
  const text = await res.text();
  const results = document.querySelector("#results");
  results.textContent = text;
}

function onFail(err){
  console.log("Error: "+err);
}

function validateForm() {
  var date = document.forms["signup"]["date"].value;
  var date2 = document.forms["signup"]["date2"].value;
  var diffDays = parseInt((date2 - date) / (1000 * 60 * 60 * 24), 10);
  if (diffDays > 7) {
    return false;
  }
}
