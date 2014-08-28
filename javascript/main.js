$(document).ready(function(){
   //  Initialize Backgound Stretcher
     $('body').bgStretcher({
          images: ['img/bg-01.jpg', 'img/bg-02.jpg', 'img/bg-03.jpg'],
          imageWidth: 1024,
          imageHeight: 768,
          slideDirection: 'N',
          slideShowSpeed: 1000,
          transitionEffect: 'fade',
          sequenceMode: 'random',
          buttonPrev: '#prev',
          buttonNext: '#next',
          pagination: '#nav',
          anchoring: 'left center',
          anchoringImg: 'left center'
     });
});