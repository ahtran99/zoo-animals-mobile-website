var sName;
var sId;
var sLogin;
var sProgram;
var sHome;
var sImg;

$(document).ready(function() {

    $.getJSON("../data/A1-JSON.json", function(data) {

        sName = data.StudentData.dataName;
        sId = data.StudentData.dataID;
        sLogin = data.StudentData.dataLogin;
        sProgram = data.StudentData.dataProgram;
        sHome = data.StudentData.dataHome;
        sImg = data.StudentData.dataImg;

        $("#biography").html(
            `
            <h1>${sName}</h1>
            <h2>${sId}</h2>
            <h3>${sLogin}</h3>
            <h4>${sProgram}</h4>
            <h5>${sHome}</h5>
            <img src="${sImg}" width="100">
            `
        );

        localStorage.setItem("sName", sName);
        localStorage.setItem("sId", sId);
        localStorage.setItem("sLogin", sLogin);
        localStorage.setItem("sProgram", sProgram);
        localStorage.setItem("sHome", sHome);
        localStorage.setItem("sImg", sImg);

    });

});