var limit = 30;
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
    headers: { 'X-Api-Key': 'YOUR API KEY'},
    contentType: 'application/json',
    success: function(result) {
        var fact = document.getElementById("fact");
        fact.addEventListener("click",function(){
            let x = Math.floor(Math.random() * 30);
            document.getElementById("text").innerHTML=result[x].fact;
        })
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});