// Send Ajax request
// teest request
// use data to create HTML

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("container").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "https://remoteok.io/api", true);
xhttp.send();
