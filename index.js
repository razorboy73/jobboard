// Send Ajax request
// teest request
// use data to create HTML

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhttp.responseText);
    var container = document.getElementById("container");
    data.slice(1).forEach(function (element, i) {
      console.log(element, i);
      let elemDiv = document.createElement("div");
      elemDiv.innerHTML = `
        <h5 class="company">${element.company}</h5>
        <h3 class="position">${element.position}</h3>
        <p class="location">${element.location}</p>
      `;
      elemDiv.classList.add("job");
      container.appendChild(elemDiv);
    });
  }
};
xhttp.open("GET", "https://remoteok.io/api", true);
xhttp.send();
