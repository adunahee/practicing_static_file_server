console.log('Test code should create dummy employee and print them to table along with monthly salary.');

function testCode(){
//creating test employees
const anthony = new Employee('Anthony', 'Dunahee', 4669, 'Aspiring Developer', 12000);
const peter = new Employee('Peter', 'Parker', 2345, 'Delivery Person', 36000);
const wonder = new Employee('Wonder', 'Woman', 1234, 'Superheroine', 48000);

//filling employee array
employees.push(anthony);
employees.push(peter);
employees.push(wonder);

//print monthly and dummy employees
printMonthlySalary();
printEmployeeData();
}