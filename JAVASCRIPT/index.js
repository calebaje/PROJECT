var selectedRow = null;
function onFormSubmit(){

}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(0);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(0);
        cell3.innerHTML = data.qty; 
    var cell4 = newRow.insertCell(0);
        cell4.innerHTML = data.perprice;
}