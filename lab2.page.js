var Lab2 = function() {
  var self = this;
  //Make sure that your URL is in the form: xxx.xxx/lab2/weather.html

  self.cityInput = $("#cityField");
  self.suggestionsList = $("#txtHint");
  self.allSuggestions = $$("#txtHint li");
  self.weatherButton = $("#weatherButton");
  self.cityTextArea = $("#displayCity");
  self.weatherText =$("#weather");


  self.stackSearchInput = $("#searchStack");
  self.stackSearchButton = $("#searchButton");
  self.stackSearchResults = $("#searchResults");
}

module.exports = new Lab2();
