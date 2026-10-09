$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});

// Disable inspect/developer keys
document.onkeydown = function(e) {
  if (e.keyCode == 123) {
     return false; // F12
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false; // Ctrl+Shift+I
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false; // Ctrl+Shift+C
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false; // Ctrl+Shift+J
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false; // Ctrl+U
  }
};
