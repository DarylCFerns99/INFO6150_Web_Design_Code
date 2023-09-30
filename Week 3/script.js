var count = 1;

function addNewRow() {
    var tableRef = document.getElementById("myTable");
    var tbodyRef = document.getElementsByTagName("tbody")[0];

    var bookName = tableRef?.lastElementChild?.lastElementChild?.firstElementChild?.nextElementSibling?.innerHTML || 'Book 0'
    var lastIndex = Number(bookName.split(" ")[1]);

    var trNode = document.createElement('tr');
    var trCheckBoxCell = document.createElement('td');
    trCheckBoxCell.innerHTML = '<input type="checkbox" onclick="onCheckBoxClick(this)" />'
    var trBookNameCell = document.createElement('td');
    trBookNameCell.innerHTML = `Book ${lastIndex + 1}`
    var trAuthorNameCell = document.createElement('td');
    trAuthorNameCell.innerHTML = `Author ${lastIndex + 1}`;

    trNode.appendChild(trCheckBoxCell);
    trNode.appendChild(trBookNameCell);
    trNode.appendChild(trAuthorNameCell);

    tbodyRef.appendChild(trNode);
    // tableRef.appendChild(tbody);
}

function onCheckBoxClick(checkbox) {
    var selectedRow = checkbox.parentElement.parentElement;

    if (checkbox.checked==true) {
        selectedRow.style.backgroundColor = "wheat";

        var deleteButton = document.createElement("td");
        deleteButton.setAttribute("id", "deleted");
        deleteButton.innerHTML = "<button id='delete' type='button' onclick='deleteRow(this)'>Delete</button>";

        selectedRow.appendChild(deleteButton);
    } else {
        selectedRow.style.backgroundColor = "#FFF";
        selectedRow.deleteCell(3);
    }
}

function deleteRow(rowObject) {
    var tr = rowObject.parentElement.parentElement;

    document.getElementById("myTable").deleteRow(tr.rowIndex);
    count--;
    alert(`Row deleted ducessfully`);
}