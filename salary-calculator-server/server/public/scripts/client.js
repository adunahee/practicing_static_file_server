// console.log('JS sourced.');
$(readyNow)

//declaring vars and arrays
let employees = [];

//employee class
class Employee{
    constructor(firstName, lastName, ID, title, salary){
        this.name = firstName + ' ' + lastName;
        this.ID = ID;
        this.title = title;
        this.salary = salary;
        this.monthlySalary = this.salary/12;
    };
}//end employee class

//currency formatter
const formatterUSD = new Intl.NumberFormat ('en-US' , {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})// end currency formatter

function readyNow() {
    $('#addEmployeeButton').on('click', addEmployee );
    $('tbody').on('click', 'tr', removeEmployee);
    // to run test code ensure client.test.js is NOT commented out
    testCode();
}

//function that prints monthly salary in table
function printMonthlySalary () {
    let totMonSal = 0;
    for(employee of employees){
        totMonSal += employee.monthlySalary;
    }
    $('#totMonSalCell').html(formatterUSD.format(totMonSal));
    if (totMonSal >= 20000 ) {
        $('tfoot').css('background-color', 'rgba(255, 0, 0, 0.685');
        $('input').prop('disabled', true);
        $('button').prop('disabled', true);
    }
    else {
        $('tfoot').css('background-color', '');
        $('input').prop('disabled', false);
        $('button').prop('disabled', false);
    }
}//end printing monthly salary

//adds table row with employee data
function printEmployeeData() {
    $('tbody').empty();
    for(employee of employees)
    $('tbody').append('<tr id="' + employee.ID + '"><td>' + employee.name + '</td><td>' + employee.ID + '</td><td>' + employee.title + '</td><td>' + formatterUSD.format(employee.salary) + '</td></tr>');
}//end printing employees to table

//grabs employee data from input fields for contsructor, clears inputs, updates table
function addEmployee() {
    employees.push(new Employee($('#fName').val(), $('#lName').val(), $('#empNum').val(), $('#title').val(), $('#annSal').val()));
    $('input').val('');
    printEmployeeData();
    printMonthlySalary();
}//end addEmployee

function removeEmployee() {
    let currID = Number($(this).attr('id'));
    employees = employees.filter(function(employee) { 
        return Number(employee.ID) !== currID;
    });
    $(this).remove();
    printMonthlySalary();
}