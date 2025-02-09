function addCourse() {
    var course_name = document.getElementById('course_name').value;
    var credit_hours = document.getElementById('credit_hours').value;
    var grade = document.getElementById('grade').value;

    if (credit_hours == '' || credit_hours == 0) {
        alert('Please enter credit hours');
        return;
    }

    document.getElementById('course_name').value = '';
    document.getElementById('credit_hours').value = '';

    var table = document.getElementById('courses');
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = course_name;
    cell2.innerHTML = credit_hours;
    cell3.innerHTML = grade;
    cell4.innerHTML = '<button class="bg-red-500 p-2 rounded-lg text-black text-center text-xl my-2 focus:outline-none" onclick="deleteCourse(this)">Delete</button>';
}