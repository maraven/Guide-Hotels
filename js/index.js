$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $('.carousel').carousel({
    interval: 1700
  });
  $('#contacto').on("show.bs.modal", function (e) {
    console.log('El modal contacto se está ejecutando');

    $('#ReservarBtn').removeClass('btn-primary');
    $('#ReservarBtn').addClass('btn-outline-success');
    $('#ReservarBtn').prop('disabled', true);
  });
  $('#contacto').on('shown.bs.modal', function (e) {
    console.log('El modal contacto se ejecutó');
  });
  $('#contacto').on("hide.bs.modal", function (e) {
    console.log('El modal contacto se oculta');
  });
  $('#contacto').on('hidden.bs.modal', function (e) {
    console.log('El modal contacto se ocultó');
    $('#ReservarBtn').removeClass('btn-outline-success');
    $('#ReservarBtn').addClass('btn-primary');
    $('#ReservarBtn').prop('disabled', false);

  });
});

