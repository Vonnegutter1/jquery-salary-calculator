$(document).ready(onReady);

function onReady() {
    $('#add-employee-information').on('click', addItem);
}

let salaryInventory = [];

function addItem(employeeInfo){
    let newItem = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        ID: $('#ID').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()

    }// end newItem

    salaryInventory.push(newItem);

    $('.removeAll').val('');

    displayInfo();
}

function displayInfo(Information){
    let annualSalary = 0;
    let monthlySalary = 0;

    for ()
}
