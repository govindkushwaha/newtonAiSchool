// Animate Smooth Scroll
$('#view-work').on('click', function() {
    const courses = $('#course').position().top;

    $('html, body').animate(
      {
        scrollTop: courses
      },
      900
    );
  });