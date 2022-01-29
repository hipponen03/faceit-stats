const btn = document.getElementById("btn");
const resultContainer = document.getElementById("results");
const resultContainer2 = document.getElementById("results2");
const resultContainer3 = document.getElementById("results3");


function supamarobrodas(bub) {
  var nick = document.getElementById("input").value;
  $.ajax({
    url: "https://open.faceit.com/data/v4/players?nickname=" + nick,
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Bearer ad088ca9-18f2-4c4a-9196-44525b88e2cb"
      );
    },
    success: function (data) {
      return data.json;
    },
    error: function (xhr, ajaxOptions, thrownError) {
      if (xhr.status == 404) {
        alert("User not found!");
      }
    },
  }).then(({ avatar, nickname, player_id, games }) => {
    resultContainer.innerHTML = ` <img  class="profile-picture"  src=${avatar}>
    <h3 class="nickname"> Nickname: ${nickname} </h3><br>
    <h3 class="elo">Elo: ${games.csgo.faceit_elo} </h3>`;
var id = player_id;
  
  $.ajax({
    url: "https://open.faceit.com/data/v4/players/" + id + "/stats/csgo",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Bearer ad088ca9-18f2-4c4a-9196-44525b88e2cb"
      );
    },
    success: function (data) {
      return data.json;
    },
    error: function (xhr, ajaxOptions, thrownError) {
      if (xhr.status == 404) {
        alert("Not found");
      }
    },
  }).then(({ lifetime, segments }) => {
    resultContainer2.innerHTML = `

Lifetime: <br />
<p class="test-one">AVG Headshots: ${lifetime["Average Headshots %"]}% </p>
<p> AVG K/D Ratio: ${lifetime["Average K/D Ratio"]} </p>
<p> Matches: ${lifetime.Matches} </p>
<pre> Winrate: ${lifetime["Win Rate %"]}% </pre>
<br />

`;
  });


  $.ajax({
    url: "https://open.faceit.com/data/v4/players/" + id + "/stats/csgo",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Bearer ad088ca9-18f2-4c4a-9196-44525b88e2cb"
      );
    },
    success: function (data) {
      return data.json;
    },
    error: function (xhr, ajaxOptions, thrownError) {
      if (xhr.status == 404) {
        alert("Not found");
      }
    },
  }).then(({ lifetime, segments }) => {
    resultContainer3.innerHTML = `

    <img  src=${segments[0].img_regular}><br>
    Map: ${segments[0].label}
    <pre> Winrate: ${segments[0].stats["Win Rate %"]}% </pre>
    <pre> AVG K/D Ratio: ${segments[0].stats["Average K/D Ratio"]} </pre>
    <pre> AVG K/R Ratio: ${segments[0].stats["Average K/R Ratio"]} </pre>

`;
  });
})};


btn.addEventListener("click", (e) => {


    document.getElementById('sisend').classList.add('myClass');
    document.getElementById('faceit-title').classList.add('faceit-title-after');
    document.getElementById('input').classList.add('search-after');
    document.getElementById('btn').classList.add('nupp');
    document.getElementById('pepe').classList.add('pepsi');

    supamarobrodas();

});
