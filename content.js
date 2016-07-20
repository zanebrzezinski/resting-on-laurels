(function(){

  var vertMid = $(window).height() / 2;
  var horzMid = $(window).width() / 2;


  $('head').append('<link rel="stylesheet" href="'+chrome.extension.getURL("assets/font-awesome-4.6.3/css/font-awesome.min.css")+'">');
  $('head').attr('class', 'exempt');
  $('html').attr('class', 'exempt');
  $('body').attr('class', 'exempt');
  $('body').css('position', 'fixed');
  $('body').css('left', horzMid);
  $('body').css('top', vertMid);
  $('body').css("background-color", 'gainsboro');
  window.interval = true;

  var $all = $('*');

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var colors = ['#f0ad00', 'black', 'silver', '#FFF', '$ffb800', '#d89b00'];
  var transform = function(){
    $all.map(function(){
      if ($(this).attr('class') != 'exempt') {
        $(this).css("color", colors[getRandomInt(0,colors.length)]);
        $(this).css("background-color", colors[getRandomInt(0,colors.length)]);
        $(this).css('font-size', getRandomInt(1,100));
        $(this).css('transition', 'transform ' + getRandomInt(0,10) + 's, font-size ' + getRandomInt(0,10) + 's');
        $(this).css('position', 'fixed');
        var str = 'rotate3d('+getRandomInt(0,20)+','+getRandomInt(0,20)+','+getRandomInt(0,20)+','+getRandomInt(-90,90)+'deg)';
        $(this).css('transform', str);
      }
    });
  }

  var $pause = $('<i class="fa fa-pause exempt" aria-hidden="true"></i>');
  $pause.css('position', 'fixed');
  $pause.css('color', 'black');
  $pause.css('left', 0);
  $pause.css('top', 0);
  $pause.css('margin', '20px');
  $pause.css('cursor', 'pointer');
  $('body').append($pause);

  transform();
  window.interval = setInterval(function(){
    transform();
  }, 11000);

  // $pause.on('click', function(){
  //   if (window.isRunning) {
  //     clearInterval(window.interval);
  //     window.isRunning = false;
  //     console.log(window.isRunning);
  //   } else {
  //     window.interval = setInterval(function(){
  //       transform();
  //     }, 11000);
  //     window.isRunning = true;
  //     console.log(window.isRunning);
  //   }
  // });




})();
