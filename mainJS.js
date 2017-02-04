$(document).ready(function() {
  $( "#cityField" ).keyup(function() {
    var url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q="+$("#cityField").val();
    $.getJSON(url,function(data) {
      var everything;
      everything = "<ul>";
      $.each(data, function(i,item) {
        everything += "<li> "+data[i].city;
      });
      everything += "</ul>";
      $("#txtHint").html(everything);
    })
    .done(function() { console.log('getJSON request succeeded!'); })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log('getJSON request failed! ' + textStatus);
      console.log("incoming "+jqXHR.responseText);
    })
    .always(function() { console.log('getJSON request ended!');
  })
  .complete(function() { console.log("complete"); });

});

$("#weatherButton").click(function(e){
  var value = $("#cityField").val();
  console.log(value);
  e.preventDefault();
  $("#displayCity").text(value);

  var myurl= "https://api.wunderground.com/api/03ecde227a6a4862/geolookup/conditions/q/UT/";
  myurl += value;
  myurl += ".json";
  console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "json",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_string = parsed_json['current_observation']['temperature_string'];
      var current_weather = parsed_json['current_observation']['weather'];
      everything = "<ul>";
      everything += "<li>Location: "+location;
      everything += "<li>Temperature: "+temp_string;
      everything += "<li>Weather: "+current_weather;
      everything += "</ul>";
      $("#weather").html(everything);
    }
  });

});


// $( "#searchStack" ).keyup(function() {
//   let searchThis = ($('#searchStack').val().replace(" ", "_"));
//   var stackURL = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle="+searchThis
//   + "&site=stackoverflow";
// });

$("#searchButton").click(function(e){
  let searchThis = ($('#searchStack').val().replace(" ", "_"));
  var stackURL = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle="+searchThis
  + "&site=stackoverflow";
  console.log(searchThis);
  e.preventDefault();
  // $("#displayCity").text(value);


  $.getJSON(stackURL, function(data) {
    console.log(stackURL);
    $("#searchResults").empty();
    for (item of data.items)
    {
      var suggestion = $(`<li><a href="${item.link}">${item.title}</a></li>`);
      $('#searchResults').append(suggestion);
    };
  });


});
});
