var form = document.getElementById('addForm');
var name, emailId, phoneNumber;
var button = document.createElement(button);

// localStorage.clear();
form.addEventListener('submit', onAddItemSubmit);

function onAddItemSubmit(e) {
    e.preventDefault();

    // Get input value
    name = document.getElementById('item').value;
    emailId = document.querySelector("#item:nth-child(2)").value;
    phoneNumber = document.querySelector('#item:nth-child(3)').value;

    button.innerHTML = ` <button>Delete</button>`;
    button.setAttribute("id", "destruct");

    var div = document.createElement("div");

    div.innerHTML = `<p>${name} <br> ${emailId} <br> ${phoneNumber}</p> `;
    var setElement = document.querySelector(".container");

    setElement.appendChild(div);
    setElement.appendChild(button)

    let itemforStorage;

    if (localStorage.getItem("items") === null) {
        itemforStorage = [];
    }
    else {
        itemforStorage = JSON.parse(localStorage.getItem("items"));
    }
    itemforStorage.push(emailId, phoneNumber);
    localStorage.setItem(name, JSON.stringify(itemforStorage));

    var destruct = document.getElementById('destruct');
    destruct.addEventListener('click', () => {
        div.innerHTML = "";
        setElement.appendChild(div);
        button.innerHTML = "";
        setElement.appendChild(button);

        localStorage.clear();

    });
}





