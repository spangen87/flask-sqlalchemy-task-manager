document.addEventListener('DOMContentLoaded', function() {
    // sidenav initalization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker init
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });

    // select intialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });