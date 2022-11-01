var WaggleBee = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="waggle"><img class="waggleBee" src="src/img/workerbee.png"></img><img class="waggleBeeLeft" src="src/img/workerbee.png" style="display:none"></img></div>');
  this.setPosition(top, left);
};

WaggleBee.prototype = Object.create(Dancer.prototype);
WaggleBee.prototype.constructor = QueenBee;

WaggleBee.prototype.step = function () {
  Dancer.prototype.step.call(this);
  //TODO: create step
  $('img', this.$node).toggle();

};

