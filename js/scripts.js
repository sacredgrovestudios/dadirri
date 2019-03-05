      var $avroSlider = $('#avro-slider');
      var $dadirriSlider = $('#dadirri-slider')
      var $avro = $('#avro');
      var $dadirri = $('#avro');
      
      var $sections = $('.section');
      var $activeAvroSlide = 0;
      var $svgwrappers = $('.svg-wrapper');
    
     
      
      
      
      //scroller active links 
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
               $('html, body').animate({
                  scrollTop: (target.offset().top)
               }, 1000, "easeInOutExpo");
               return false;
            }
         }
      });

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function() {
         $('.navbar-collapse').collapse('hide');
      });

      // Activate scrollspy to add active class to navbar items on scroll

      $('body').scrollspy({
         target: '#nav',
         offset: 50
      });
      
      $('#hamburger-icon').click(function(){
		$(this).toggleClass('open');
	  });

      $('.carousel').carousel({
         interval: false,
         pause: true
      });
      
      
      
      var innerCarousel = $('#avro-slider .carousel-inner');
      $avroSlider.on('slide.bs.carousel', function(e) {
       
         
         if (e.to == 0) {
            innerCarousel.css('background-color', '#A2B484');
            $activeAvroSlide = 0;
            earthSVGDraw.play();
         
            
         } 
         else if (e.to == 1) {
            innerCarousel.css('background-color', '#A1CCE0');
            $activeAvroSlide = 1;
            waterSVGDraw.play();
         
         }
         else if (e.to == 2) {
            innerCarousel.css('background-color', '#EAB77C');
            $activeAvroSlide = 2;
            fireSVGDraw.play();
           
         }
         if(e.from == 0){
             earthSVGErase.play();
         }
         else if(e.from == 1){
             waterSVGErase.play();
         }
         else if(e.from == 2){
             fireSVGErase.play();
         }
    
         
      });

      

      function carouselNormalization(slider) {
         var items = slider.find('.carousel-item'), //grab all slides
            heights = [], //create empty array to store height values
            tallest; //create variable to make note of the tallest slide

         if (items.length) {
            function normalizeHeights() {
               items.each(function() { //add heights to array
                  heights.push($(this).height());
               });
               tallest = Math.max.apply(null, heights); //cache largest value
               items.each(function() {
                  $(this).css('min-height', tallest + 'px');
               });
            };

            normalizeHeights();

            $(window).on('resize orientationchange', function() {
               tallest = 0, heights.length = 0; //reset vars
               items.each(function() {
                  $(this).css('min-height', '0'); //reset min-height
               });
               normalizeHeights(); //run it again
            });
         }
      }
     
      
      window.onload = function() {
         carouselNormalization($avroSlider);
         carouselNormalization($dadirriSlider);
      }
   

  $sections.each(function(){
     new Waypoint.Inview({
        element: this,
        enter: function(direction){
            if(this.element.id == 'avro'){
               if($activeAvroSlide == 0){
                  earthSVGDraw.play();
               }
               else if($activeAvroSlide == 1){
                  waterSVGDraw.play();
               }
               else if($activeAvroSlide == 2){
                  fireSVGDraw.play();
               }
             
            }
           if(this.element.id == 'dadirri'){
               dadirriSVGDraw.play();
            }
         },
        exited: function(direction){
            if(this.element.id == 'avro'){
               if($activeAvroSlide == 0){
                  earthSVGDraw.play();
               }
               else if($activeAvroSlide == 1){
                  waterSVGDraw.play();
               }
               else if($activeAvroSlide == 2){
                  fireSVGDraw.play();
               }
            }
           if(this.element.id == 'dadirri'){
               dadirriSVGErase.play();
            }
         }
     });
     
  });
      
      
      var earthSVGDraw = anime({
          targets: '.earth-svg',
          strokeDashoffset: function(el) {
              var pathLength = el.getTotalLength();
              el.setAttribute('stroke-dasharray', pathLength);
              return [-pathLength, 0];
          },
          easing: "easeInOutCubic",
          duration: 2000,
          autoplay:false

      });

      var earthSVGErase = anime({
          targets: '.earth-svg',
          strokeDashoffset: function(el) {
              var pathLength = el.getTotalLength();
              el.setAttribute('stroke-dasharray', pathLength);
              return [-pathLength, 0];
          },
          easing: "easeInOutCubic",
          duration: 2000,
          autoplay:false,
          direction:'reverse'

      });

      var waterSVGDraw = anime({
          targets: '.water-svg',
          strokeDashoffset: function(el) {
              var pathLength = el.getTotalLength();
              el.setAttribute('stroke-dasharray', pathLength);
              return [-pathLength, 0];
          },
          easing: "easeInOutCubic",
          duration: 2000,
          autoplay:false

      });

      var waterSVGErase = anime({
          targets: '.water-svg',
          strokeDashoffset: function(el) {
              var pathLength = el.getTotalLength();
              el.setAttribute('stroke-dasharray', pathLength);
              return [-pathLength, 0];
          },
          easing: "easeInOutCubic",
          duration: 2000,
          autoplay:false,
          direction:'reverse'

      });

      var fireSVGDraw = anime({
          targets: '.fire-svg',
          strokeDashoffset: function(el) {
              var pathLength = el.getTotalLength();
              el.setAttribute('stroke-dasharray', pathLength);
              return [-pathLength, 0];
          },
          easing: "easeInOutCubic",
          duration: 2000,
          autoplay:false

      });

      var fireSVGErase = anime({
          targets: '.fire-svg',
          strokeDashoffset: function(el) {
              var pathLength = el.getTotalLength();
              el.setAttribute('stroke-dasharray', pathLength);
              return [-pathLength, 0];
          },
          easing: "easeInOutCubic",
          duration: 2000,
          autoplay:false,
          direction:'reverse'

      });

      var dadirriSVGDraw = anime({
          targets: '.dadirri-svg',
          strokeDashoffset: function(el) {
              var pathLength = el.getTotalLength();
              el.setAttribute('stroke-dasharray', pathLength);
              return [-pathLength, 0];
          },
          easing: "easeInOutCubic",
          duration: 2000,
          autoplay:false

      });

      var dadirriSVGErase = anime({
          targets: '.dadirri-svg',
          strokeDashoffset: function(el) {
              var pathLength = el.getTotalLength();
              el.setAttribute('stroke-dasharray', pathLength);
              return [-pathLength, 0];
          },
          easing: "easeInOutCubic",
          duration: 2000,
          autoplay:false,
          direction:'reverse'

      });