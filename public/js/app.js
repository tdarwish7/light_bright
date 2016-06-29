
$(document).ready(function(){
  var container= $('.container');
  var numOfRows = 10;
  var numOfCols = 10;

  initGrid();
 addClickHandlers();
//  addClickHandlersV2()
      function addClickHandlersV2(){
    var cells = $('.cell');
    cells.on('click', changeColor);
  }

  function changeColor(){
    var colorClasses = ['white', 'red', 'green', 'blue'];
    var colorCycle = Math.round(Math.random() * colorClasses.length);
    var color = colorClasses[colorCycle];
    $(this).removeClass(colorClasses.join(' '));
    $(this).addClass(color);
    }
  function addClickHandlers(){
    var cells = $('.cell');
    for(var counter = 0; counter < cells.length; counter +=1){
      var cell = cells[counter];
      $(cell).on('mouseenter', changeColor);
    }
}
    //$('.cell').click(){
    //  $(this).addClass('.cellColor');
  //  }
//  };

  function initGrid(){
    for( var i = 0; i< numOfRows; i +=1){
      var row = $('<div></div>');
      row.addClass('row');
      for(var j = 0; j < numOfCols; j+=1){
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);

      }
      container.append(row);
    }
  }
});
