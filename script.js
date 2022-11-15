var changeProfileName = "Bob Smith";
elementChange = document.querySelector(".userName");

function changeName(element)
{
    elementChange.innerHTML = changeProfileName;
}

var requestSpan = document.querySelector(".requestAmount");
var connectionSpan = document.querySelector("#connections");

function ignore()
{    
    elementRemove = document.querySelector(".connectionRequests");
    elementRemove.remove();
    requestSpan.innerText--;
}
function accept() {
    element = document.querySelector(".connectionRequests");
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}
