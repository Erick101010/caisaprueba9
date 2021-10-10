
  $('#btProds').click(function () {
    $('#mProds').slideDown("fast"),
        $('#mServs').slideUp("fast");
});
$('#btServs').click(function () {
    $('#mServs').slideDown("fast"),
        $('#mProds').slideUp("fast");
})