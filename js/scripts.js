var name;
var address;



$(document).ready(function() {

  $("button#buy").click(function(event) {
  event.preventDefault();
  alert("it works");

  name = $("#nam1");
  address = $("#add1");/*
  sessionStorage.setItem(gname, name); broken
  sessionStorage.setItem(gaddress, address);*/
  window.open("receipt.html");/*
  $("body").append("<p>a" + sessionStorage.getItem(gname) + "</p>"; broken
    $("body").append(sessionStorage.getItem(gaddress);
    sessionStorage.clear();*/

  });
});
