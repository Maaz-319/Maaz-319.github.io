function calculateGPA() {
    var marks = [];
    var crs = [];
    for (var i = 1; i < 8; i++) {
        if ($(`#marks-${i}`).val() != "" && $(`#cr-${i}`).val() != "") {
            if (parseInt($(`#marks-${i}`).val()) >= 0 && parseFloat($(`#marks-${i}`).val()) <= 100 && parseFloat($(`#cr-${i}`).val()) >= 0) {
                marks.push(parseFloat($(`#marks-${i}`).val()));
                crs.push(i);
            } else {
                alert("Please enter valid marks and credit hours");
                return;
            }
        } else { console.log("Please enter marks for all subjects"); }
    }

    // for (var i = 0; i < marks.length; i++) {
    //     if (marks[i] >= 85) {
    //         marks[i] = 4.00;
    //     } else if (marks[i] >= 80) {
    //         marks[i] = 3.70;
    //     } else if (marks[i] >= 75) {
    //         marks[i] = 3.30;
    //     } else if (marks[i] >= 70) {
    //         marks[i] = 3.00;
    //     } else if (marks[i] >= 65) {
    //         marks[i] = 2.70;
    //     } else if (marks[i] >= 61) {
    //         marks[i] = 2.30;
    //     } else if (marks[i] >= 58) {
    //         marks[i] = 2.00;
    //     } else if (marks[i] >= 55) {
    //         marks[i] = 1.70;
    //     } else if (marks[i] >= 50) {
    //         marks[i] = 1.00;
    //     } else {
    //         marks[i] = 0.00;
    //     }
    // }

    for (var i = 0; i < marks.length; i++) {
        marks[i] = marks[i] * crs[i];
    }
    console.log(marks);

    var totalMarks = 0.0;
    var crsTotal = 0;

    for (var i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
        crsTotal += crs[i];
    }
    totalMarks /= crsTotal;

    $('.gpa__val').html(totalMarks.toFixed(2));
}

$(function () {
    var elem = `<p class="font-bold underline text-white text-2xl">Marks</p>
    <p class="font-bold underline text-white text-2xl">Credit Hours</p>`;
    for (var i = 1; i < 8; i++) {
        elem = elem + `
                <input type="number" placeholder="Subject ${i} marks %" id="marks-${i}" class="search__gridView__item__input rounded-xl p-2 bg-slate-200 outline-none mt-4 text-center w-3/6">
                <input type="number" id="cr-${i}" class="search__gridView__item__input rounded-xl p-2 bg-slate-200 outline-none mt-4 text-center w-1/12">
            `;
    }
    elem = elem + `<span>
            <button
                class="calculate__button bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-2 px-8 rounded-lg hover:shadow-[0px_0px_20px_2px_black] active:shadow-[0px_0px_20px_8px_black] mt-4" onclick="calculateGPA()">
                Calculate
            </button></span>
            `
    $(".search__gridView").html(elem);
});