// Define behaviors when the page is loaded
  window.addEventListener('load', function(){
    
    // Select all elements with the class 'fade-in' and add the 'loaded' class to them
    var items = document.querySelectorAll('.fade-in');
    items.forEach(function(item) {
      item.classList.add('loaded');
    });
  })

  // Store the current language
  var lastLang = document.documentElement.lang;

  // Check for language change every second
  setInterval(function() {
    // Get the current language from the <html> tag
    var currentLang = document.documentElement.lang;
    // If the language has changed
    if (currentLang !== lastLang) {
      lastLang = currentLang; // Update the last language

      // If the new language is Arabic, Hebrew, Persian, or Urdu, set direction to RTL
      if (currentLang.startsWith('ar') || currentLang.startsWith('he') || currentLang.startsWith('fa') || currentLang.startsWith('ur')) {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    }
  }, 1000); // Check every 1000 milliseconds (1 second)


