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

      elemDiv.classList.add("job");

      elemDiv.innerHTML = `
        <div class="left-section">
            <h5 class="company">${element.company}</h5>
            <h3 class="position">${element.position}</h3>
            <p class="location">${element.location}</p>
        </div>
        <div class="middle-section">
            ${element.tags
              .map(function (tag) {
                return `<div class="tag">${tag}</div>`;
              })
              .join(" ")}
        </div>
        <div class="mid-right-section">
        ${new Date(element.date).toLocaleString()}
        </div>
        <div class="right-section">
            <a href="${element.apply_url}">
                <button class="apply">Apply</button>
            </a>
        </div>
      `;

      container.appendChild(elemDiv);
    });
  }
};
xhttp.open("GET", "https://remoteok.io/api", true);
xhttp.send();
