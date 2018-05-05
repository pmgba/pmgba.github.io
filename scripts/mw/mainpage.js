$('.mpweibo').html('<iframe width="100%" height="600" class="share_self" frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=800&fansRow=2&ptype=1&speed=0&skin=1&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=2717829102&verifier=a396f67e&dpc=1"></iframe>');

var whoami = {
	imageSize : 100,
	pkmnNumber : 0,
	
	init: function(){
		mw.util.addCSS(''
			+ '.pw-whoami { text-align:center; }'
			+ '.pw-whoami__wrapper { text-align:center; width:100px;height:100px;border-radius:100px;border: 1px solid; margin:auto; }'
			+ '.pw-whoami__silhouette,.pw-whoami__sprite { width:100%; height:100%;background-size:100%;background-position:center;  }'
			+ '.pw-whoami__silhouette { filter: brightness(0); }'
			+ '.pw-whoami__text { width:50%; border-width: 0 0 1px 0; border-bottom-style:solid; background:none;  text-align:center; }'
			+ '.pw-whoami__go { width:20%; border:none; background:none; }'
		);
		
		$('.pw-whoami').html('<table style="width:100%;">'
			+'<td style="width:45%;"><div class="pw-whoami__wrapper mpbox-border"><div class="pw-whoami__sprite"><div class="pw-whoami__silhouette"></div></div></div></td>'
			+'<td><b>我是谁？</b>'
			+'<form action="/wiki/%E7%89%B9%E6%AE%8A:%E6%90%9C%E7%B4%A2"><input name="search" type="text" class="pw-whoami__text mpbox-border" /><input name="go" class="pw-whoami__go" value="&#x1F50D;&#xFE0E;" type="submit"></form>'
			+'<a href="javascript:void(0);" onclick="whoami.changePokemon();">[换一只]</a>'
			+'</td>'
			+'</table>'
		);
	
		$('.pw-whoami__wrapper').hover(
			function () { $('.pw-whoami__silhouette').fadeOut(1000, function() {
					$('.pw-whoami__text').val( pw.util.getPokemonName( whoami.pkmnNumber ) );
				});
			}, 
			function () { }
		);
	},
	
	randomPokemon: function() {
		whoami.pkmnNumber = String('00').concat(Math.floor(Math.random()*(807-1) + 1)).slice(-3);
	},
	
	changePokemon: function () {
		whoami.randomPokemon();
		var src=pw.util.getPokemonImageURL('pgl', whoami.pkmnNumber );
		$('.pw-whoami__sprite').css( 'background-image','url('+src+')');
		$('.pw-whoami__silhouette').show().css( 'background-image','url('+src+')');
		$('.pw-whoami__text').val( '' );
	},
}

pw.loader.using( 'pokemon', function(){
	whoami.init();
	whoami.changePokemon();
});
