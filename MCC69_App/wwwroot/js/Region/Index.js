$(document).ready(function () {
    $("#tableRegion").dataTable({
        "ajax": {
            url: "/Region/GetAll",
            type: "GET",
            dataSrc: "",
            dataType: "JSON"
        },
        "columns": [
            {
                "data": "",
                "render": function (data, type, row) {
                    console.log(row);
                    return `${row.name}`;
                }
            }
        ]
    });

});



    ////$.ajax({
    ////    type: "GET",
    ////    url: "/Region/GetAll"
    ////    }).done((region) => {
    ////    console.log(region);
    ////    let text = "";
    ////    $.each(region, function (key, val) {
    ////      text +=`
    ////          <tr>
    ////                <td>${key + 1}</td>
    ////                <td>${val.name}</td>
    ////                </tr>`;

    ////        $("#tbodySW").html(text);

    ////});    ////    }).catch((error) => {
    ////        console.log(error)
    ////    })
