if ( typeof(radar) == 'undefined' ) {
(function () {
	width = 150;
	height = 150;
	//scale = 75/250;
	originX = width / 2;
	originY = height / 2;
	var d = Math.PI / 180;
	var c = Math.cos( d * 30 );
	var s = Math.sin( d * 30 );
	var degrees = {
		hp : { x : 0, y : -1 },
		at : { x : c, y : -s },
		df : { x : c, y : s },
		sa : { x : -c, y : -s },
		sd : { x : -c, y : s },
		sp : { x : 0, y : 1 },
	};
	
	function drawPolygon(ctx, stat) {
		if ( $.isNumeric(stat) ) stat = {hp:stat,at:stat,df:stat,sa:stat,sd:stat,sp:stat};
		ctx.beginPath();
		ctx.moveTo (originX + stat.hp * degrees.hp.x, originY + stat.hp * degrees.hp.y);
		ctx.lineTo (originX + stat.at * degrees.at.x, originY + stat.at * degrees.at.y);
		ctx.lineTo (originX + stat.df * degrees.df.x, originY + stat.df * degrees.df.y);
		ctx.lineTo (originX + stat.sp * degrees.sp.x, originY + stat.sp * degrees.sp.y);
		ctx.lineTo (originX + stat.sd * degrees.sd.x, originY + stat.sd * degrees.sd.y);
		ctx.lineTo (originX + stat.sa * degrees.sa.x, originY + stat.sa * degrees.sa.y);
		ctx.lineTo (originX + stat.hp * degrees.hp.x, originY + stat.hp * degrees.hp.y);
		ctx.stroke();
	}

	var r = 60 / Math.pow(200,(1 / 1.2));
	function scale(stat) {
		return Math.pow(stat,(1 / 1.2)) * r;
	}
	
	$('.radar').each( function(){
		var canvas=document.createElement("canvas");
	        canvas.width  = width;
	        canvas.height = height;
		$this=$(this);
		stats = {
			hp: scale( $this.data('hp') ),
			at: scale( $this.data('at') ),
			df: scale( $this.data('df') ),
			sa: scale( $this.data('sa') ),
			sd: scale( $this.data('sd') ),
			sp: scale( $this.data('sp') )
		}
	
		var ctx = canvas.getContext('2d');
		ctx.strokeStyle = "#ccc";
		ctx.lineWidth = 0.5;
	
		ctx.moveTo (originX, originY);	ctx.lineTo (originX + 60 * degrees.hp.x, originY + 60 * degrees.hp.y);
		ctx.moveTo (originX, originY);	ctx.lineTo (originX + 60 * degrees.at.x, originY + 60 * degrees.at.y);
		ctx.moveTo (originX, originY);	ctx.lineTo (originX + 60 * degrees.df.x, originY + 60 * degrees.df.y);
		ctx.moveTo (originX, originY);	ctx.lineTo (originX + 60 * degrees.sa.x, originY + 60 * degrees.sa.y);
		ctx.moveTo (originX, originY);	ctx.lineTo (originX + 60 * degrees.sd.x, originY + 60 * degrees.sd.y);
		ctx.moveTo (originX, originY);	ctx.lineTo (originX + 60 * degrees.sp.x, originY + 60 * degrees.sp.y);
		ctx.stroke();
	
		drawPolygon(ctx, scale(200) );
		ctx.strokeStyle = "#ddd";
		drawPolygon(ctx, scale(50) );
		drawPolygon(ctx, scale(100) );
		drawPolygon(ctx, scale(150) );
	
		ctx.font="12px";
		ctx.fillText("HP", originX + 80 * degrees.hp.x-4, originY + 80 * degrees.hp.y+15);
		ctx.fillText("攻击", originX + 80 * degrees.at.x-20, originY + 80 * degrees.at.y);
		ctx.fillText("防御", originX + 80 * degrees.df.x-20, originY + 80 * degrees.df.y+7);
		ctx.fillText("特攻", originX + 80 * degrees.sa.x, originY + 80 * degrees.sa.y);
		ctx.fillText("特防", originX + 80 * degrees.sd.x, originY + 80 * degrees.sd.y+7);
		ctx.fillText("速度", originX + 80 * degrees.sp.x-9, originY + 80 * degrees.sp.y-7);
	
		ctx.strokeStyle = "#0a0";
		drawPolygon(ctx, stats );
	        ctx.fillStyle = "#afa";
	        ctx.fill();
	
		$this.html(canvas);
	});
})();
radar = true;
}
