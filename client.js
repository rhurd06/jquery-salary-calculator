$(document).ready(onReady);
console.log('Hi jQuery')

function onReady() {
    //setup handlers
    $('#submit-employee').on('click', handleAddEmployee);
}

function handleAddEmployee() {
    console.log('Adding an employee ');
    let newEmployee = {
        firstName: $('#in-first-name').val(),
        lastName: $('#in-last-name').val(),
        employeeID:$('#in-employee-id').val(),
        jobTitle:$('#in-job-title').val(),
        annualSalary:$('#in-annual-salary').val(),
    };
    console.log(newEmployee);
    renderEmployees();
    clearInputParams();   
}

function renderEmployees() {
    //clear inputs
    $('#out-employees').empty();

    //Loop through objects & add row to the table on the DOM
    for( let person of newEmployee ){
        $('#out-employees').append(`
        <tr>
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.employeeID}</td>
            <td>${person.jobTitle}</td>
            <td>${person.annualSalary}</td>
        </tr>
        `)
    }
}

function clearInputParams() {
    $('#in-first-name').val('');
    $('#in-last-name').val('');
    $('#in-employee-id').val('');
    $('#in-job-title').val('');
    $('#in-annual-salary').val('');
}