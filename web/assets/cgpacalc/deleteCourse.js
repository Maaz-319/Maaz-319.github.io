function deleteCourse(row) {
    var d = row.parentNode.parentNode.rowIndex;
    document.getElementById('courses').deleteRow(d - 1);
}