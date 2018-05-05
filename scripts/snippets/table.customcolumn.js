$('table.customcolumn').each(function(){
	var $table = $(this);
  var colClass = $table.data('colclass');
  var colStyle = $table.data('colstyle');
  if ( typeof colClass === 'object' ) {
  	$.each( colClass, function( colIndex, value ) {
  		$table.find('tbody td:nth-child(' + colIndex + ')').addClass(value);
  	});
  }
  if ( typeof colStyle === 'object' ) {
  	$.each( colStyle, function( colIndex, value ) {
  		$table.find('tbody td:nth-child(' + colIndex + ')').each(function(){
  			this.style.cssText += value;
  		});
  	});
  }
});