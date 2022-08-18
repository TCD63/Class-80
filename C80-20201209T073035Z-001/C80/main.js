NameOfTheStudentArray = [];
function submit(){
    var display_student_array = [];
    for (var j = 1; j<=4; j++){
        var NameOfTheStudent = document.getElementById("name_of_the_student_"+j).value;
        console.log(NameOfTheStudent);
        NameOfTheStudentArray.push(NameOfTheStudent);
    }

    console.log(NameOfTheStudentArray);

    var length = NameOfTheStudentArray.length;
    console.log(length);

    for (k=0; k<length; k++){
        display_student_array.push("<h4>NAME "+NameOfTheStudentArray[k]+"</h4>");
        console.log(display_student_array);

    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting(){
    NameOfTheStudentArray.sort();
     console.log(NameOfTheStudentArray);
      var display_student_array_sorting = [];
       var lenght_of_name_of_students_array = NameOfTheStudentArray.length; console.log(lenght_of_name_of_students_array);

        for (var k = 0; k < lenght_of_name_of_students_array; k++) { display_student_array_sorting.push("<h4>NAME "+NameOfTheStudentArray[k] + "</h4>");
         console.log(display_student_array_sorting);
         } 
         
         

}