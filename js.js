const btn = document.getElementById("btn");
const resultContainer = document.getElementById("results");
function supamarobrodas(bub) {
    var nick = document.getElementById('input').value;
$.ajax({
    url: "https://open.faceit.com/data/v4/players?nickname=" + nick,
    dataType: 'json',
    beforeSend: function(xhr) {
         xhr.setRequestHeader("Authorization", "Bearer ad088ca9-18f2-4c4a-9196-44525b88e2cb")
    }, success: function(data){
        return data.json;
    },
    error: function(xhr, ajaxOptions, thrownError) {
        if(xhr.status==404) {
            alert('User not found!')
                }
    }
}).then(({ nickname, player_id, games }) => {
resultContainer.innerHTML = `
PlayerName: ${nickname} ||
PlayerID: ${player_id} ||
Elo: ${games.csgo.faceit_elo}`;
}) 
};
btn.addEventListener("click", (event) => {
    supamarobrodas();
});
