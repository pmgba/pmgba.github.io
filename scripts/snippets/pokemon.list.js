pw.loader.using( ['Pokemon/Pokemon.7.js'], function(){
	
	function createPokemonTR(pid) {
		var tr = '';
		var num = pid.split('.');
		var name = pokeWiki.util.getPokemonName( pid );
		var data = pokeWiki.database.pokemon.data[7][pid];

		tr += '<tr>';
		tr += '<td>' + pokeWiki.util.createPokemonIconS(pid)[0].outerHTML + '</td>';
		tr += '<td>#'+num[0]+'</td>';
		tr += '<td><a href="'+mw.util.getUrl(name[0])+'">'+name[2]+'</a></td>';
 
		var type = pokeWiki.util.createColorlabel( 'span', 'type', data['t'][0], null, 'colorlabel-fixed' );
		if ( data['t'][0] != data['t'][1] ) type += pokeWiki.util.createColorlabel( 'span', 'type', data['t'][1], null, 'colorlabel-fixed' );
		tr += '<td>'+type+'</td>';
 
		var a1 = pokeWiki.database.abilities.names["zh-cn"][data['a'][0]];
		var a2 = pokeWiki.database.abilities.names["zh-cn"][data['a'][1]];
		var a3 = pokeWiki.database.abilities.names["zh-cn"][data['a'][2]];
		tr += '<td><a href="'+a1+'">'+a1+'</a></td>';
		if ( a1 != a2 && a2 != 0 ) {
			tr += '<td><a href="'+a2+'">'+a2+'</a></td>';
		} else {
			tr += '<td></td>';
		}
		if ( a3 != 0 ) {
			tr += '<td><a href="'+a3+'">'+a3+'</a></td>';
		} else {
			tr += '<td></td>';
		}
 
		tr += '<td class="stat">'+data['b'][0]+'</td>';
		tr += '<td class="stat">'+data['b'][1]+'</td>';
		tr += '<td class="stat">'+data['b'][2]+'</td>';
		tr += '<td class="stat">'+data['b'][4]+'</td>';
		tr += '<td class="stat">'+data['b'][5]+'</td>';
		tr += '<td class="stat">'+data['b'][3]+'</td>';
		tr += '<td class="stat">'+eval(data['b'].join("+"))+'</td>';
		tr += '</tr>';
		return tr;
	};

	$('.pokemonlist').each(function(){
		var $this = $(this);
		var html = '<table class="pokemonlist colortable colorize colortable-width-full text-center colortable-colborder-none colortable-rowborder-single ">'
			+ '<tbody>'
			+ '<tr>'
			+ 	'<th style="width:10%" colspan="2">编号</th>'
			+ 	'<th style="width:15%">宝可梦</th>'
			+ 	'<th style="width:12%">属性</th>'
			+ 	'<th style="width:16%" colspan="2">特性</th>'
			+ 	'<th style="width:8%">隐藏特性</th>'
			+ 	'<th>&nbsp;HP&nbsp;</th>'
			+ 	'<th>攻击</th>'
			+ 	'<th>防御</th>'
			+ 	'<th>特攻</th>'
			+ 	'<th>特防</th>'
			+ 	'<th>速度</th>'
			+ 	'<th>总和</th>'
			+ '</tr>';

		if ( $this.data('list') ) {
			var pokemonlist = $this.data('list').toString().split(',');
			$.each( pokemonlist, function( i, pid ){
				if ( pid in pokeWiki.database.pokemon.data[7] ) html += createPokemonTR(pid);
			});
		} else if ( $this.data('type') ) {
			var type = parseInt($this.data('type'));
			$.each( pokeWiki.database.pokemon.data[7], function( pid, data ){
				if ( $.inArray( type, data.t ) > -1 ) html += createPokemonTR(pid);
			});
		} else if ( $this.data('ability') ) {
			var ability = parseInt($this.data('ability'));
			$.each( pokeWiki.database.pokemon.data[7], function( pid, data ){
				if ( $.inArray( ability, data.a ) > -1 ) html += createPokemonTR(pid);
			});
		}

		html += '</tbody></table>';
		$this.html(html);
		mw.loader.using( 'jquery.tablesorter', function() {
			$('.pokemonlist').tablesorter( {sortList: [ { 1: 'asc'} ]} );
		} );
	});
	
});