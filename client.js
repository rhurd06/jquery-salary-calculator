console.log('Hi jQuery');

const startingEmployee = [ ];

$(document).ready(onReady);

function onReady() {
    //setup handlers
    $('#submit-employee').on('click', handleAddEmployee);
    $('#out-employees').on('click', '.delete', deleteEmployee);
    renderEmployees();
}//end onReady
function deleteEmployee() {
    console.log('Deleting employee...');
    $(this).closest('tr').remove();
}//end deleteEmployee

function renderEmployees() {
    //clear inputs
    $('#out-employees').empty();
    //Loop array and add table row to DOM
    for( let person of startingEmployee){
        $('#out-employees').append(`
        <tr>
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.employeeID}</td>
            <td>${person.jobTitle}</td>
            <td>${'$'+ person.annualSalary}</td>
            <td>
                <button class="delete">Delete</button>
            </td>
        </tr>
        `)
    }
}//end renderEmployees

function handleAddEmployee() {
    console.log('Adding an employee: ');
        //Get inputs from browser
        let newEmployee = {
        firstName: $('#in-first-name').val(),
        lastName: $('#in-last-name').val(),
        employeeID: $('#in-employee-id').val(),
        jobTitle: $('#in-job-title').val(),
        annualSalary: $('#in-annual-salary').val(),
        };
        //Add employee to array
    startingEmployee.push(newEmployee);
    console.log(startingEmployee)
    renderEmployees();
    clearInputParams();  
}//end handleAddEmployee


function clearInputParams() {
    $('#in-first-name').val('');
    $('#in-last-name').val('');
    $('#in-employee-id').val('');
    $('#in-job-title').val('');
    $('#in-annual-salary').val('');
}//end clearInputParams

function monthlySalaryTotal() {
    let sum = 0;
    for(let x=0; x<startingEmployee[x].length; x++){
        sum += startingEmployee[x].annualSalary / 12;
    }
    return sum;
}//end monthlySalaryTotal
console.log('The monthly total salary is:', monthlySalaryTotal(startingEmployee));

