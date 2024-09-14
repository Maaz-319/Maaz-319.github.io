function analyzeSentiment() {
    $('.square').show();
    let text = document.getElementById("text").value.trim();
    if (text == "") {
        $('.square').hide();
        return;
    }
    let url = `zz${text}`;
    $.ajax({
        url: url,
        type: "GET",
        headers: { "X-Api-Key": "myapikey" },
        success: function (data) {
            $('.square').hide();
            let sentiment = data.sentiment;
            let confidence = Math.abs((data.score * 100).toFixed(1));
            console.log(data);
            let result = `
            <p class="text-2xl text-purple-700">
                <span class="font-bold text-lg text-slate-950">Sentiment:</span> ${sentiment}
            </p>
            <p class="text-2xl text-purple-700">
                <span class="font-bold text-lg text-slate-950">Confidence:</span> ${confidence}%
            </p>`;
            $('#result').html(result);
        },
        error: function (error) {
            $('.square').hide();
            console.log(error);
        }
    });
}

$(function () {
    $("#text").focus();
    $("#text").on("keydown", function (event) {
        if (event.ctrlKey && event.keyCode === 13) {
            analyzeSentiment();
        }
    });
})