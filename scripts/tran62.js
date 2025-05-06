var sName;
var sId;
var sLogin;
var sProgram;
var sHome;
var sImg;
var zArray = new Array(6);

class Zoo {
    constructor (id, name, classification, image) {
        this.id=id; this.name=name; 
        this.classification=classification;
        this.image=image;
    }
}

$(document).ready(function() {
  
  // Header
  $(".header").html(`<h3>SYST24444 Assignment #1 for <a href="pages/alexandertran.html">Alexander Tran</a> from Canada</h3>`);


  // Data
  zArray[0] = new Zoo("11", "Bear", "Mammal", "bear.jpg");
  zArray[1] = new Zoo("22", "Panda", "Mammal", "panda.jpg");
  zArray[2] = new Zoo("33", "Eagle", "Bird", "eagle.jpg");
  zArray[3] = new Zoo("44", "Hawk", "Bird", "hawk.jpg");
  zArray[4] = new Zoo("55", "Python", "Reptile", "python.jpg");
  zArray[5] = new Zoo("66", "Alligator", "Reptile", "alligator.jpg");

  for (let x = 0; x < zArray.length; x++) {
    $("#animal-classification").append(
      `
      <p>${zArray[x].id} / ${zArray[x].name} / ${zArray[x].classification} / <img src='images/${zArray[x].image}' width='25'></p>
      `
    );
  }


  // Buttons
  $(".button").html(
    `
    <button id="first">Toggle formatting of left panel to<br>italic and underlined</button><hr>
    <button id="second">Click to toggle a border to all paragraphs that contain<br>"Mammal"</button><hr>
    <button id="third">Click to change the background colour on all paragraphs<br>whose class attribute is 'Bird'</button>
    `
  );

  // toggle formatting to italic and underlined
  $("#first").click(function() {
    $("#animal-classification").css("font-style", "italic");
    $("#animal-classification").css("text-decoration", "underline");
  });

  // toggle a border to all paragraphs that contain "mammal"
  $("#second").click(function() {
      $("p:nth(1)").css("border", "1px solid red");
      $("p:nth(2)").css("border", "1px solid red");
  });

  // change the background colour on all paragraphs whose class attribute is "bird"
  $("#third").click(function() {
    $("p:nth(3)").css("background-color", "yellow");
    $("p:nth(4)").css("background-color", "yellow");
  });


  // Footers
  $.getJSON("data/A1-JSON.json", function(data) {

    sName = data.StudentData.dataName;
    sId = data.StudentData.dataID;
    sLogin = data.StudentData.dataLogin;
    sProgram = data.StudentData.dataProgram;
    sHome = data.StudentData.dataHome;
    sImg = data.StudentData.dataImg;

    $("#footer").html(
      `
      Login: ${sLogin} / ID: ${sId} / Program: ${sProgram} - <a href="pages/cite.html">CITE</a>
      `
    );

    localStorage.setItem("sName", sName);
    localStorage.setItem("sId", sId);
    localStorage.setItem("sLogin", sLogin);
    localStorage.setItem("sProgram", sProgram);
    localStorage.setItem("sHome", sHome);
    localStorage.setItem("sImg", sImg);

  }); // end of getJSON
  
}); // end of doc ready