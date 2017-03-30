‘use strict’;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var names = {
name1: ‘Марта’,
name2: ‘Вы’,
name3: ‘Арам’
} ;
var times = [ time1, time2, time3];

var max = -1;
var maxIndex = -1;

var window = {
  renderStatistics : function (ctx, names, times) {

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeRect(100, 10, 420, 270);


  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(120, 25, 420, 270);


  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText (‘Ура, вы победили!’, 120, 40);
  ctx.fillText (‘Список результатов:’, 120, 55);

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  var histogramLength = 150;
  var step = histogramLength / (max - 0);

  ctx.textBaseline = 'bottom';

  names[‘Вы’] ? ctx.fillStyle = 'rgba(255, 0, 0, 1)': 'rgb(0, 112, 180)'

  for (var i = 0; i < times.length; i++) {
    ctx.fillRect(120+ 90 * i, 250 - times[i] * step, 40, times[i] * step);
    ctx.fillText(names[i], 120 + 90 * i, 270);
  }
}
