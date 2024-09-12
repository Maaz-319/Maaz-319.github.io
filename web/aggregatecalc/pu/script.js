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
    var obtained_marks = (metric / 4) + (fsc/1);
    var total_marks = (metric_t / 4) + (fsc_t/1);
    var academic_percentage = (obtained_marks / total_marks) * 75;
    var usat_total = parseInt(test) * 0.25;
    var r = (academic_percentage + usat_total);
    r = r.toFixed(2);
    $('#result').html("Your Aggregate: " + r);
}