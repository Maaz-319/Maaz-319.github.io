function calculateGPA() {
    var table = document.getElementById('courses');
    var rows = table.rows;
    var total_credit_hours = 0;
    var total_grade_points = 0;

    for (var i = 0; i < rows.length; i++) {
        var credit_hours = rows[i].cells[1].innerHTML;
        var grade = rows[i].cells[2].innerHTML;

        total_credit_hours += parseInt(credit_hours);
        total_grade_points += parseInt(credit_hours) * parseFloat(grade);
    }

    var gpa = total_grade_points / total_credit_hours;
    document.getElementById('gpa').innerHTML = gpa.toFixed(2);
}