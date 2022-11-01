var QueenBee = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="queen"> <img class="beyonce" src="src/img/Beyonce.png"></img><img class="beyonce" src="src/img/BeyonceMirror.png" style="display:none"></img><span class="caption"></span></div>');
  this.setPosition(top, left);
  this.$node.mouseover(function() {
    $(this).find('span').text('"SLAY"');
  }).mouseout(function() {
    $(this).find('span').text('');
  });

};

QueenBee.prototype = Object.create(Dancer.prototype);
QueenBee.prototype.constructor = QueenBee;

QueenBee.prototype.step = function () {
  Dancer.prototype.step.call(this);
  //TODO: create step
  $('img', this.$node).toggle();
};


/*

  this.$node = $('<span class="flip">
                    <img src="src/img/Beyonce.png></img>
                    <img src="src/img/BeyonceMirror.png" style="display:none"></img>
                  </span>');

$('img', this).toggle();


*/