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
    var SSC = (parseInt(metric) / parseInt(metric_t)) * parseInt(10);
    var HSSC = (parseInt(fsc) / parseInt(fsc_t)) * parseInt(40);
    var NTS = (parseInt(test)) / 2;
    var r = parseFloat(SSC) + parseFloat(HSSC) + parseFloat(NTS);
    r = r.toFixed(2);
    $('#result').html("Your Aggregate: " + r);
}