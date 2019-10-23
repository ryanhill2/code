const addContactDiv = document.getElementById("addContactDiv");
const addContactButton = document.getElementById("addContactButton");
const tableRow = document.getElementById("tableRow");

const name = document.getElementById("name");
const mobileNumber = document.getElementById("mobileNumber");
const email = document.getElementById("email");

let sortDirection = false;
let personalData = [
];

window.onload = () => {
    loadTableData(personalData);
};

function addContactFunction(){
    let contact =
    {
        name: name.value,

        mobileNumber: mobileNumber.value,

        email: email.value
    }
    personalData.push(contact);
    loadTableData(personalData);
    th = document.getElementsByTagName('th');
    for(let a=0; a<th.length; a++){
        th[a].addEventListener('click', item(a))
    }
}

function loadTableData(personalData){
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let person of personalData){
        dataHtml += `<tr> <td>${person.name}</td> <td>${person.mobileNumber}</td> <td>${person.email}</td></tr>`;
    }
    console.log(dataHtml)
    tableBody.innerHTML = dataHtml
}

function item(a){
    return function(){
        sortTable(a)
    }
}
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tableData");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[a];
            y = rows[i + 1].getElementsByTagName("TD")[a];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}



