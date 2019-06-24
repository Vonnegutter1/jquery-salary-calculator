console.log( 'script loaded!' );

$(document).ready(onReady);

function onReady() {
    $('#add-employee-information').on('click', addItem);
    $('#employeeInfoOut').on('click', '.delete', deleteButton);
}

let salaryInventory = [];

function addItem(employeeInfo){
    let newItem = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        ID: $('#ID').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val()

    }// end newItem

    salaryInventory.push(newItem);

    $('.removeAll').val('');

    displayInfo();
}

function displayInfo(Information){
    let annualSalary = 0;
    let monthlySalary = 0;

    let el = $('#employeeInfoOut');
        el.empty();

    for (let i=0; i < salaryInventory.length; i++){
        el.append(
           `<tr>
               <th>${salaryInventory[i].firstName}</th>
               <th>${salaryInventory[i].lastName}</th>
               <th>${salaryInventory[i].ID}</th>
               <th>${salaryInventory[i].title}</th>
               <th>${salaryInventory[i].annualSalary}</th>
               <th><button class="delete">delete</button></th>
           </tr>` 
        )
        annualSalary += Number(salaryInventory[i].annualSalary);
    } // end for loop
    

    monthlySalary = Math.round(annualSalary / 12);

    $('#background').html(monthlySalary);

    if (monthlySalary > 20000){
        $('#background').parent().addClass('backgroundRed');
    } // end if statement

}


function deleteButton(click){
    $(this).closest('tr').remove();
}