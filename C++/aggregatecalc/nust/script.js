function calculateCost() {
    if (document.getElementById("metric-perc").value == "" || document.getElementById("fsc-perc").value == "" || document.getElementById("test-perc").value == "") {
        alert("Please fill all the fields");
        return;
    } else if (document.getElementById("metric-perc").value < 0 || document.getElementById("fsc-perc").value < 0 || document.getElementById("test-perc").value < 0) {
        alert("Please enter positive values");
        return;
    }
    var metric = document.getElementById("metric-perc").value;
    var fsc = document.getElementById("fsc-perc").value;
    var test = document.getElementById("test-perc").value;
    var metric_t = $("#metric-tot").val();
    var fsc_t = $("#fsc-tot").val();
    var test_t = $("#test-t").val();
    var r = (metric / metric_t) * 100 * 0.1 + (fsc / fsc_t) * 100 * 0.15 + (test / test_t) * 100 * 0.75;
    r = r.toFixed(2);
    $('#result').html("Your Aggregate: " + r);
}