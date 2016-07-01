
$(document).ready(function(){
  var container= $('.container');
  var numOfRows = $('#userrow');
  var numOfCols = $('#usercolumn');
  var customTable = $('#custom');
  var colorClasses = ['white', 'red', 'green', 'blue'];
  var colorCycle = colorClasses.length-4;
  var previousCell;



 customTable.on('click', initGrid);
 customTable.on('click', addClickHandlersV2);

  initGrid()
  addClickHandlersV2()
      function addClickHandlersV2(){
    var cells = $('.cell');
    cells.on('click', changeColor);
  }

// console.log(changeColor);

  function changeColor(){
if(previousCell === this){
    var color = colorClasses[colorCycle];
    if(colorCycle < 4){
      $(this).removeClass(colorClasses.join(' '));
      $(this).addClass(color);
      colorCycle+=1;
    } else {
      colorCycle = 0
    }
  } else {
    colorCycle = 0;
    previousCell = this;
  }
};

//   function addClickHandlers(){
//     var cells = $('.cell');
//     for(var counter = 0; counter < cells.length; counter +=1){
//       var cell = cells[counter];
//       $(cell).on('mouseenter', changeColor);
//     }
// }



  function initGrid(){

    for( var i = 0; i< numOfRows.val(); i +=1){
      var row = $('<div></div>');
      row.addClass('row');
      for(var j = 0; j < numOfCols.val(); j+=1){
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);

      }
      container.append(row);
    }

  }
});
