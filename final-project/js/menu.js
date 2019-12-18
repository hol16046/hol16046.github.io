// Responsive Menu
(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add a submenu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when another is selected
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      //Clicking away from dropdown closes the submenu
      $('html').click(function() {
         $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X Toggle Animation
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery