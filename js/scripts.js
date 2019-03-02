$(document).ready(function(){
//    var title = new Rellax('#avro-reg', {
//    speed: 1.25,
//    center: false,
//    round: true,
//    vertical: true,
//    horizontal: false
//  });


    var myFullpage = new fullpage('#fullpage', {
             licenseKey:'OPEN-SOURCE-GPLV3-LICENSE',
             anchors: ['video', 'avro', 'dadirri', 'team', 'footer'],
             slidesNavigation: true,
             menu: '#menu',
             verticalCentered:false,
             autoScrolling:false,
            responsiveWidth: 900,
            afterResponsive: function(isResponsive){
                    console.log("done");
            },
             afterLoad: function(origin, destination, direction){
               if(destination.index == 1){
                   
                 earthSVGDraw.play();

            
                  

               }
                 else if(destination.index == 2){
                     dadirriSVGDraw.play();
                 }

             },
             onLeave: function(origin, destination, direction){
               if(origin.index == 1){
                  earthSVGErase.play();
               }
                 else if(origin.index == 2){
                     dadirriSVGErase.play();
                 }
             },
             onSlideLeave: function(section, origin, destination, direction){

                 var avroSection = $('#section1');

                 if(destination.index == 0){
                     avroSection.css('background-color', '#A2B484');
                 }
                 else if(destination.index == 1){
                     avroSection.css('background-color', '#A4CCDE');
                 }
                 else if(destination.index == 2){
                     avroSection.css('background-color', '#EAB77C')
                 }


                 if(origin.index == 0){
                     earthSVGErase.play();
                 }
                 if(origin.index == 1){
                     waterSVGErase.play();
                 }
                 if(origin.index == 2){
                     fireSVGErase.play();
                 }
             },
            afterSlideLoad: function(section, origin, destination, direction){
                if(destination.index == 0){
                   earthSVGDraw.play();
                }
                else if(destination.index == 1){
                   waterSVGDraw.play();
                }
                else if(destination.index == 2){
                   fireSVGDraw.play();
                }
            }

         });


//var $avroRegConcept = $('#slide1 .avro-reg-concept');
//var avroRegConceptWP  = new Waypoint.Inview({
//      element:$avroRegConcept,
//      enter: function(direction) {
//        $avroRegConcept.removeClass('off-screen-left');
//      },
////      entered: function(direction) {
////        console.log('Entered triggered with direction ' + direction);
////      },
////      exit: function(direction) {
////        console.log('Exit triggered with direction ' + direction);
////      },
//      exited: function(direction) {
//        $avroRegConcept.addClass('off-screen-left');
//      }
//      });





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



});
