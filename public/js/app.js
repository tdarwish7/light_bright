
$(document).ready(function(){
  var container= $('.container');
  var numOfRows = $('#userrow');
  var numOfCols = $('#usercolumn');
  var customTable = $('#custom')

 customTable.on('click', initGrid);
 customTable.on('click', addClickHandlersV2);

  addClickHandlersV2()
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
//   function addClickHandlers(){
//     var cells = $('.cell');
//     for(var counter = 0; counter < cells.length; counter +=1){
//       var cell = cells[counter];
//       $(cell).on('mouseenter', changeColor);
//     }
// }



  function initGrid(){
    $('.container').empty();
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
