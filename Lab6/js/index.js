const addItem = $(".agregar");
const list = $(".Lista");


addItem.on("click", function() {
    let item = $("#newText").val();
    if(item === "") {
        alert("This field can't be empty!!!!");
    } else {
        list.append(`<div class="lis">
                        <li class="li-item">
                        <p class="list-item">${item}</p>
                        <button class="checar">check</button>
                        <button class="del">delete</button>
                        </li>
                    </div>`)
    }
    $(".checar").click("button",function() {$(this).closest(".li-item").children(".list-item").toggleClass("chec")})
    $(".del").click("button",function() {$(this).closest(".lis").remove()})
})


