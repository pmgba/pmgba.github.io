function(){
	mw.loader.using('jqueryui',function(){
		$('#pokemonforms li').each(function(i,v){
			$(this).html('<a href="#pokemonform-'+(i+1)+'">'+$(this).html()+'</a>');
		});
		$( "#pokemonforms" ).tabs();
	});
	
	mw.util.addCSS(
		  '.mediawiki .ui-tabs { font-size:inherit; border:none; background:none; position: static; } '
		+ '.mediawiki .ui-widget-content td > a { color:#0645AD; } '
		+ '.mediawiki .ui-tabs .ui-tabs-panel { padding:0; } '
		+ '.mediawiki .ui-widget-header { border:0; } '
		+ '.mediawiki .ui-tabs-nav { background:none; } '
		+ '.mediawiki .ui-tabs .ui-tabs-nav ul { padding:0; } '
		+ '.mediawiki .ui-tabs .ui-tabs-nav li { margin:0;border-width:0 !important;width:100%;height:125px;background:transparent;border-radius:10px; } '
		+ '.mediawiki .ui-tabs .ui-tabs-nav li:first-child { height:120px; } '
		+ '.mediawiki .ui-tabs .ui-tabs-nav li a { display:block;width:100%;padding:0; } '
		+ '.mediawiki .ui-state-active a { font-weight:bold; } '
	);
};