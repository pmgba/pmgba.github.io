pw.spriteGenerator = {
	lastFormID : ["003.01","006.02","009.01","015.01","018.01","019.01","020.02","025.07","026.01","027.01","028.01","037.01","038.01","050.01","051.01","052.01","053.01","065.01","074.01","075.01","076.01","080.01","088.01","089.01","094.01","103.01","105.02","115.01","127.01","130.01","142.01","150.02","175.01","181.01","201.27","208.01","212.01","214.01","229.01","248.01","254.01","257.01","260.01","282.01","302.01","303.01","306.01","308.01","310.01","319.01","323.01","334.01","351.03","354.01","359.01","362.01","373.01","376.01","380.01","381.01","382.01","383.01","384.01","386.03","412.02","413.02","421.01","422.01","423.01","428.01","445.01","448.01","460.01","475.01","479.05","487.01","492.01","521.99","531.01","550.01","555.01","585.03","586.03","592.99","593.99","641.01","642.01","645.01","646.02","647.01","648.01","649.04","658.02","660.19","668.99","669.04","670.05","671.04","676.09","678.01","681.01","710.03","711.03","716.01","718.04","719.01","720.01","735.01","738.01","741.03","743.01","744.01","745.02","746.01","752.01","754.01","758.01","774.13","777.01","778.02","784.01","800.03","801.01"],
	fullFormIDList : [],
	
	fillFormList : function(){
		for (var i=0;i<pw.spriteGenerator.lastFormID.length-1;i++) {
			var x = pw.spriteGenerator.lastFormID[i].split('.');
			if (x[1] == '99') {
				pw.spriteGenerator.fullFormIDList.push(pw.spriteGenerator.lastFormID[i]);
			} else {
				for (var j=1;j<=parseInt(x[1]);j++) {
					pw.spriteGenerator.fullFormIDList.push(pw.util.getPokemonKey(x[0],j));
				}
			}
		}
	},

	init : function() {
		pw.spriteGenerator.fillFormList();
		
		$('.sprite:not(.sprite-done)').each(function(){
			pw.spriteGenerator.generate($(this));
		});
	},
	
	generate : function( $sprite ) {
		if ( pw.spriteGenerator.fullFormIDList.length == 0 ) pw.spriteGenerator.fillFormList();
		var opt = {};
		if ( $sprite.hasClass('sprite-pi') ) {
			var pid = String($sprite.data('pid'));
			var num = parseInt(pid.slice(0,3),10);
			var fi  = parseInt(pid.slice(-2),10);
			var fil = ( fi == 0 ) ? -1 : pw.spriteGenerator.fullFormIDList.indexOf(pid);
			if ( fil == -1 ) {
				opt.i = num;
				opt.url = 'http://res.pokemon.name/common/pokemon/pi.png';
			} else {
				opt.i = fil;
				opt.url = 'http://res.pokemon.name/common/pokemon/pi2.png';
			}
			opt.w = 40; opt.h = 30;
		}
		$sprite.css({
			"display":"inline-block",
			"background":"url(" + opt.url + ") no-repeat -" + ( opt.w * ( opt.i % 10 ) ) + "px -" + ( opt.h * Math.floor( opt.i / 10 ) ) + "px",
			"vertical-align":"bottom",
			"height":opt.h + "px",
			"width":opt.w + "px"
		});
		$sprite.addClass('sprite-done');
		return $sprite;
	}
};

pw.spriteGenerator.init();
