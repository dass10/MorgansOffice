
    src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous">

    $(document).ready(function () {
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        url: 'https://morganoffice.herokuapp.com/api/departments/',
        success: function (data) {
            // location.reload();
            i = 0;
            while (i < data.length){
                department = data[i];
                $("#department_id_input").append("<option value='"+department.department_id+"'>"+department.name+"</option>");
                i = i + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    $("#add_employee_but").click(function () {
    lastname1 = $("#last_name_input").val();
    firstname1 = $("#first_name_input").val();
    street1 = $("#street_address_input").val();
    suburb1 = $("#suburb_input").val();
    phone1 = $("#phone_number_input").val();
    hourly_rate1 = $("#hourly_rate_input").val();
    department1 = $("#department_id_input").val();
    $.ajax({
    type: 'POST',
    dataType: 'JSON',
    url: 'https://morganoffice.herokuapp.com/api/employees/',
    data: {
    lastname: lastname1,
    firstname: firstname1,
    street_address: street1,

    suburb: suburb1,
    phone: phone1,
    hourly_rate: hourly_rate1,
    department: department1
},
    success: function (data) {
    alert('Employee added successfully');
    location.reload();
},
    error: function (err) {
    console.log(err);
    errors = JSON.parse(err.responseText);
    console.log(errors);
    $("#last_name_input_err").text(errors.lastname);
    $("#first_name_input_err").text(errors.firstname);
    $("#street_address_input_err").text(errors.street_address);
    $("#suburb_input_err").text(errors.suburb);
    $("#phone_number_input_err").text(errors.phone);
    $("#hourly_rate_input_err").text(errors.hourly_rate);
    $("#department_id_input").text(errors.department);
}
});
});
});
