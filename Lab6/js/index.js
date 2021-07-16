const addItem = $(".agregar");
const list = $(".Lista");

addItem.on("click", function() {
    let item = $("#newText").val();
    if(item === "") {
        alert("This field can't be empty!!!!");
    } else {
        list.append(`<div class="lis">
                        <li>
                        <p>${item}</p>
                        <button class="checar">check</button>
                        <button class="del">delete</button>
                        </li>
                    </div>`)
    }
})