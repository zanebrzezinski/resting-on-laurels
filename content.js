(function(){
  console.log('running');

  var vertMid = $(window).height() / 2;
  var horzMid = $(window).width() / 2;

  var colors = ['#000', '#fff', 'silver', 'red', 'grey'];

  var $head = $('head');
  var $body = $('body');
  $head.append('<link rel="stylesheet" href="'+chrome.extension.getURL("assets/font-awesome-4.6.3/css/font-awesome.min.css")+'">');
  $head.attr('class', 'exempt');
  $('html').attr('class', 'exempt');
  $body.attr('class', 'exempt');
  $body.css('position', 'fixed');
  $body.css('left', horzMid);
  $body.css('top', vertMid);
  $body.css("background-color", colors[getRandomInt(0,colors.length)]);

  var $all = $('*');

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var transform = function(){
    $all.map(function(){
      var $el = $(this);
      $el.css("background-color", colors[getRandomInt(0,colors.length)]);
      if (!($el.hasClass('exempt'))) {
        $el.css("color", colors[getRandomInt(0,colors.length)]);
        $el.css("top", getRandomInt(0, 100));
        $el.css("left", getRandomInt(0, 100));
        $el.css('font-size', getRandomInt(1,100));
        $el.css('transition', 'transform ' + getRandomInt(0,5000) + 'ms, top '+ getRandomInt(0,5000) + 'ms, left '+ getRandomInt(0,5000) + 'ms');
        $el.css('position', 'fixed');
        var str = 'rotate3d('+getRandomInt(0,20)+','+getRandomInt(0,20)+','+getRandomInt(0,20)+','+getRandomInt(-90,90)+'deg)';
        $el.css('transform', str);
      }
      if (!window.isRunning) {
        $('#pause-play').attr('class', 'fa fa-pause exempt');
      } else {
        $('#pause-play').attr('class', 'fa fa-play exempt');
      }
    });
  }
  //
  // var $pause = $('<i class="fa fa-pause exempt" id="pause-play" aria-hidden="true"></i>');
  // $pause.css('position', 'fixed');
  // $pause.css('color', 'black');
  // $pause.css('left', 0);
  // $pause.css('top', 0);
  // $pause.css('margin', '20px');
  // $pause.css('cursor', 'pointer');
  // $body.append($pause);

  transform();
  var interval = setInterval(function(){
    transform();
  }, 5000);

  // $pause.on('click', function(){
  //   console.log(window.isRunning);
  //   if (window.isRunning) {
  //     clearInterval(interval);
  //     window.isRunning = false;
  //     console.log(window.isRunning);
  //   } else {
  //     transform();
  //     interval = setInterval(function(){
  //       transform();
  //     }, 11000);
  //     window.isRunning = true;
  //     console.log(window.isRunning);
  //   }
  // });
  //



})();
