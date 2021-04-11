console.log('Hi jQuery');

$(document).ready(onReady);

const startingEmployee = [
    {
        firstName: 'Jen',
        lastName: 'Barber',
        employeeID: '4521',
        jobTitle: 'Team Lead',
        annualSalary: 80000,
    },
    {
        firstName: 'Maurice',
        lastName: 'Moss',
        employeeID: '8724',
        jobTitle: 'Support Team',
        annualSalary: 58000,
    },
    {
        firstName: 'Roy',
        lastName: 'Smith',
        employeeID: '9623',
        jobTitle: 'Quality Assurance',
        annualSalary: 48000,
    }
 ];

function onReady() {
    //setup handlers
    $('#submit-employee').on('click', handleAddEmployee);
    $('#out-employees').on('click', '.delete', deleteEmployee);
    renderEmployees();
    monthlySalaryTotal();
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
        annualSalary: Number($('#in-annual-salary').val()),
        };
        //Add employee to array
    startingEmployee.push(newEmployee);
    console.log(startingEmployee)
    renderEmployees();
    clearInputParams();
    monthlySalaryTotal();
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
    for(let x=0; x<startingEmployee.length; x++){
        sum += Number(startingEmployee[x].annualSalary / 12);
    }
    $('#total-salary').empty();
    $('#total-salary').append(sum);
    addRed(sum);
    return sum;
}//end monthlySalaryTotal
console.log('The monthly total salary is:', monthlySalaryTotal(startingEmployee));

function addRed(monthlySalaryTotal) {
    if( monthlySalaryTotal> 20000){
        $('#total-salary').css('background-color', 'red');
    }
}//end addRed

