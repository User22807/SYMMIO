var currentSection = null;

// Set up the Intersection Observer
  const sections = $(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection = entry.target.classList[1];
            console.log("Current Section:", currentSection);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section
    sections.each(function () {
      observer.observe(this);
    }); 


$(function() {

    $('.scrollDown').click (function() {
          if (currentSection == "one") {
                  $('html, body').animate({
        
        scrollTop: $('section.two').offset().top }, 'slow');
          }
          if (currentSection == "two") {
                  $('html, body').animate({
        
        scrollTop: $('section.three').offset().top }, 'slow');
          }
                if (currentSection == "three") {
                  $('html, body').animate({
        
        scrollTop: $('section.four').offset().top }, 'slow');
          }
                if (currentSection == "four") {
                  $('html, body').animate({
        
        scrollTop: $('section.five').offset().top }, 'slow');
          }
                if (currentSection == "five") {
                  $('html, body').animate({
        
        scrollTop: $('section.six').offset().top }, 'slow');
          }
                if (currentSection == "six") {
                  $('html, body').animate({
        
        scrollTop: $('section.seven').offset().top }, 'slow');
          }
                if (currentSection == "seven") {
                  $('html, body').animate({
        
        scrollTop: $('section.eight').offset().top }, 'slow');
          }
                if (currentSection == "eight") {
                  $('html, body').animate({
        
        scrollTop: $('section.nine').offset().top }, 'slow');
          }
                if (currentSection == "nine") {
                  $('html, body').animate({
        
        scrollTop: $('section.ten').offset().top }, 'slow');
          }
                if (currentSection == "ten") {
                  $('html, body').animate({
        
        scrollTop: $('section.eleven').offset().top }, 'slow');
          }
                if (currentSection == "eleven") {
                  $('html, body').animate({
        
        scrollTop: $('section.one').offset().top }, 'slow');
          }
      return false;
    });
  });