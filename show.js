var form = document.getElementById('addForm');


form.addEventListener('submit', onAddItemSubmit);
localStorage.clear();
function onAddItemSubmit(e) {
    e.preventDefault();

    // Get input value
    var name = document.getElementById('item').value;
    var emailId = document.querySelector("#item:nth-child(2)").value;
    var phoneNumber = document.querySelector('#item:nth-child(3)').value;

    var div = document.createElement("div");
    div.innerHTML = `<p>${name} <br> ${emailId} <br> ${phoneNumber}</p>`;
    var setElement = document.querySelector(".container");
    setElement.appendChild(div);
    let itemforStorage;

    if (localStorage.getItem("items") === null) {
        itemforStorage = [];
    }
    else {
        itemforStorage = JSON.parse(localStorage.getItem("items"));
    }
    itemforStorage.push(emailId, phoneNumber);
    localStorage.setItem(name, JSON.stringify(itemforStorage));
}

