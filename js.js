const btn = document.getElementById("btn");
const resultContainer = document.getElementById("results");
const resultContainer2 = document.getElementById("results2");
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
  }).then(({ nickname, player_id, games }) => {
    resultContainer.innerHTML = `
Nickname: ${nickname} ||
Elo: ${games.csgo.faceit_elo}`;
    var id = player_id;
  });

  $.ajax({
    url:
      "https://open.faceit.com/data/v4/players/ebe5cc0f-05cd-4f06-b56b-d2539fcf0d62/stats/csgo",
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
<pre> AVG Headshots: ${lifetime["Average Headshots %"]} </pre>
<pre> AVG K/D Ratio: ${lifetime["Average K/D Ratio"]} </pre>
<pre> Matches: ${lifetime.Matches} </pre>
<pre> Winrate: ${lifetime["Win Rate %"]}% </pre>
<br />
Map: ${segments[0].label}
<pre> Winrate: ${segments[0].stats["Win Rate %"]}% </pre>
<pre> AVG K/D Ratio: ${segments[0].stats["Average K/D Ratio"]} </pre>
<pre> AVG K/R Ratio: ${segments[0].stats["Average K/R Ratio"]} </pre>
`;
  });
}
btn.addEventListener("click", (event) => {
  supamarobrodas();
});
