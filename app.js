function getWeatherWarnings() {
    // Get the RSS feed data.
    var rssFeedData = fetch("http://www.bom.gov.au/fwo/IDZ00060.warnings_wa.xml").then(response => response.text());
  
    // Parse the RSS feed data into an object.
    var weatherWarnings = rssFeedData.parseXML();
  
    // Display the weather warnings.
    for (var i = 0; i < weatherWarnings.length; i++) {
      var warning = weatherWarnings[i];
      var warningDiv = document.createElement("div");
      warningDiv.className = "warning";
      var warningH2 = document.createElement("h2");
      warningH2.innerText = warning.title;
      var warningP = document.createElement("p");
      warningP.innerText = warning.description;
      warningDiv.appendChild(warningH2);
      warningDiv.appendChild(warningP);
      document.getElementById("weather-warnings").appendChild(warningDiv);
    }
  }
  
  window.onload = getWeatherWarnings;
  