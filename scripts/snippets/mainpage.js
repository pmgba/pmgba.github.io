$('.mpweibo').html('<iframe width="100%" height="600" class="share_self" frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=800&fansRow=2&ptype=1&speed=0&skin=1&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=2717829102&verifier=a396f67e&dpc=1"></iframe>');

	(function(){
		var $whoami = $('#mpwhoami');
		$whoami.html('<div class="row">'
			+'<div class="col-md-5"><div class="mpwhoami-wrapper mpbox-border"><div class="mpwhoami-silhouette"><div class="mpwhoami-image"><img></div></div></div></div>'
			+'<div class="col-md-7"><b>我是谁？</b>'
			+'<form action="/wiki/%E7%89%B9%E6%AE%8A:%E6%90%9C%E7%B4%A2"><input name="search" type="text" class="mpbox-border" /><input name="go" value="🔍" type="submit"></form>'
			+'<a href="javascript:mp_whoami_change();">[换一只]</a>'
			+'</div>'
			+'</div>'
			+'</div>'
			);
	})();

	var $whoamiSilhouette = $('.mpwhoami-silhouette');
	var $whoamiImage = $('.mpwhoami-image');
	var $whoamiSearch = $('#mpwhoami input[name="search"]');

	$whoamiSilhouette.hover(
		function () { $whoamiImage.fadeIn(1000, function() {
				$whoamiSearch.val( pw.util.getPokemonName(parseInt($whoamiImage.data('pnum'))) );
			});
		}, 
		function () { }
	);
	var imgWhoamiSize = 100;
	var imgWhoami = document.createElement('img');
	imgWhoami.crossOrigin = "Anonymous";
	imgWhoami.onload = function () {
		var imgWhoamiWidth = imgWhoami.width>=imgWhoami.height?imgWhoamiSize:imgWhoami.width*imgWhoamiSize/imgWhoami.height;
		var imgWhoamiHeight = imgWhoami.height>=imgWhoami.width?imgWhoamiSize:imgWhoami.height*imgWhoamiSize/imgWhoami.width;
		var imgWhoamiTop = imgWhoamiWidth<=imgWhoamiHeight?0:(imgWhoamiWidth-imgWhoamiHeight)/2;
		var imgWhoamiLeft = imgWhoamiHeight<=imgWhoamiWidth?0:(imgWhoamiHeight-imgWhoamiWidth)/2;
		$whoamiImage.css('background-image','url('+imgWhoami.src+')').css('background-size',imgWhoamiWidth+'px '+imgWhoamiHeight+'px')
			.css('background-position',imgWhoamiLeft+'px '+imgWhoamiTop+'px').css('background-repeat','no-repeat');
		var canvas = document.createElement("canvas");
		if (!!(canvas.getContext) ) {
			var ctx = canvas.getContext('2d');
			canvas.width = imgWhoamiSize;
			canvas.height = imgWhoamiSize;
			ctx.drawImage(imgWhoami,imgWhoamiLeft,imgWhoamiTop,imgWhoamiWidth,imgWhoamiHeight);
			var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
			var pix = imgData.data;
			for (var i=0, n = pix.length; i < n; i+= 4){
				pix[i] = 0;
				pix[i+1] = 0;
				pix[i+2] = 0;
			}
			ctx.putImageData(imgData,0,0);
			$whoamiSilhouette.css('background-image','url('+canvas.toDataURL()+')');
		}
	};

	window.mp_whoami_change = function () {
		var plist = [];
		var d = new Date();
		switch ( (d.getMonth()+1)+'/'+d.getDate() ) {
			case '2/29': plist = [448,453,454,539,605]; break;
			case '3/12': plist = [185]; break;
		}
		if ( plist.length > 0 ) {
			var pnum = plist[Math.floor(Math.random()*p.length)];
		}else{
			var pnum = Math.floor(Math.random()*(721-1) + 1);
		}
		var isShiny = false;
		pnum = String('00').concat(pnum).slice(-3);
		$(imgWhoami).attr('src',pw.util.getPokemonImageURL('pgl',pnum) );
		$whoamiImage.data('pnum',pnum);
		$whoamiImage.hide();
		$whoamiSearch.val( '' );
	}
	mp_whoami_change();
