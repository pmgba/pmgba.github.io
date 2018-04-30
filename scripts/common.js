window.pw = window.pokeWiki = {

  config : {
    values: {
      pwResPath : 'http://res.pokemon.name/',
      pwScriptPath : 'http://static.pokemon.name/scripts/',
      pwLanguage : 'zh-cn',
      isMediaWiki : function(){ return typeof mw !== typeof undefined; }(),
    },
    get : function( key, defaultValue ) {
      return pokeWiki.config.values[key] || defaultValue || '';
    },
    set: function( key, value ) {
      pokeWiki.config.values[key] = value;
    }
  },

  loader : {
   
    _scriptList : {},
		
    _moduleList : {
    	'mw-default' : [
    		'//cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap-grid.min.css',
    		'pokemon/pokemon.js',
    		'common.css'
    	],
      'bootstrap' : [
        '//cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap.min.css',
        '//cdn.bootcss.com/bootstrap/4.1.0/js/bootstrap.min.js'
      ],
      'jqueryui' : [
        '//cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.css',
        '//cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.js'
      ],
      'webui-popover' : [
        '//cdn.bootcss.com/webui-popover/1.2.18/jquery.webui-popover.min.css',
        '//cdn.bootcss.com/webui-popover/1.2.18/jquery.webui-popover.min.js'
      ],
      'katex' : [
        '//cdn.bootcss.com/KaTeX/0.8.3/katex.min.css',
        '//cdn.bootcss.com/KaTeX/0.8.3/katex.min.js'
      ],
      'chart' : [
        '//cdn.bootcss.com/Chart.js/2.7.0/Chart.min.js'
      ],
      'flag' : [
        '//cdn.bootcss.com/flag-icon-css/2.8.0/css/flag-icon.min.css'
      ],
      'font-awesome' : [
        '//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'
      ],
      'ionicons' : [
        '//cdn.bootcss.com/ionicons/2.0.1/css/ionicons.min.css'
      ],
    },

    using: function( scripts, callback ) {
      if ( !Array.isArray(scripts) ) scripts = [scripts];

      var urlToLoad = [];
       
      $.each( scripts, function( i, scriptName ) {
        var urlList = pw.loader._moduleList[scriptName] || [scriptName];
        
        for ( var j in urlList ) {
        	var url = pw.loader._temporarySolution[ urlList[j].toLowerCase() ] || urlList[j];
        	
	        if ( false ) {
	        } else if ( url.match(/^MediaWiki:.+\.js$/i) ) {
	          url = '/w/index.php?action=raw&ctype=text/javascript&maxage=2419200&smaxage=2419200&title=' + url;
	        } else if ( url.match(/^MediaWiki:.+\.css$/i) ) {
	          url = '/w/index.php?action=raw&ctype=text/css&maxage=2419200&smaxage=2419200&title=' + url;
	        } else if ( url.match(/^(http:\/\/|https:\/\/|\/\/)/i) ) {
	        } else {
	          url = pw.config.get('pwScriptPath') + url;
	        }
	        if ( ! ( url in pw.loader._scriptList ) ) {
	        	pw.loader._scriptList[ url ] = false;
	        	urlToLoad.push( url );
	        }
        }
      });

			if ( urlToLoad.length > 0 ) {
	      loadjs( urlToLoad, { success: function() {
	      	for ( var scriptName in pw.loader._scriptList ) pw.loader._scriptList[scriptName] = true;
	      	if ( callback ) callback();
	      } } );
    	} else {
	      if ( callback ) callback();
    	}
    },

    _temporarySolution : {
    	"mediawiki:pokemonlist.js" : "snippets/pokemon.list.js",
    	"mediawiki:pokemondropdown.js" : "snippets/pokemon.dropdown.js",
    	"mediawiki:pokemon.7" : "pokemon/pokemon.7.js",
    	"mediawiki:poketoru.js" : "games/poketoru/poketoru.js",
    	"mediawiki:poketoru.droprate.js" : "games/poketoru/droprate.js",
    	"mediawiki:poketoru.filter.js" : "games/poketoru/filter.js",
    	"mediawiki:poketoru.layout.js" : "games/poketoru/layout.js",
    	"mediawiki:poketoru.pokemon.js" : "games/poketoru/pokemon.js",
    	"mediawiki:poketoru.dex2.js" : "games/poketoru/dex.js",
    	"mediawiki:tabsections.js" : "snippets/tabsections.js",
    	"mediawiki:collapsiblelist.js" : "snippets/collapsiblelist.js",
    },
    
    _importRule : {
    	
    	".import" : function() {
    		var scriptList = [];
	      $('.import').each(function(){
	        var extraCSS = this.getAttribute('data-css'), extraJS = this.getAttribute('data-script');
	        if ( extraCSS && !extraCSS.match(/^(http:\/\/|https:\/\/|\/\/)/i) && $.inArray( extraCSS, scriptList ) == -1 ) { scriptList.push(extraCSS) }
	        if ( extraJS && !extraJS.match(/^(http:\/\/|https:\/\/|\/\/)/i) && $.inArray( extraJS, scriptList ) == -1 ) { scriptList.push(extraJS) }
	      });
      	if ( scriptList.length > 0 ) pokeWiki.loader.using( scriptList );
    	},
    	
    	".fa" : function() {
    		pw.loader.using( 'font-awesome' );
    	},
    	".ion" : function() {
    		pw.loader.using( 'ionicons' );
    	},
    	
    	".flag-icon" : function() {
    		pw.loader.using( 'flag' );
    	},
    	
    	".tex" : function() {
    		pw.loader.using( 'katex', function() {
		      $('.tex').each(function(){
		        katex.render($(this).text(),this);
		      });
    		});
    	},
    	
    	".tooltip" : function() {
				pw.loader.using( 'webui-popover', function() {
		      $('.tooltip').each(function(){
		        var $this = $(this);
		        var text = $this.attr('title');
		        text = '<p>' + text.replace( /\\n/g, '</p><p>' ) + '</p>';
		        $this.attr( 'data-content', text );
		        $this.attr( 'title', '' );
		        $this.webuiPopover({ trigger:'hover',width:300 });
		      });
		      mw.util.addCSS( '.webui-popover-content { font-size: small; }' );
		    });
    	},
    	
    	".chart" : function() {
    		pw.loader.using( 'chart', function() {
		      $(".chart").each(function(){
		        var $this = $(this);
		        var $ctx = $('<canvas width="'+$this.width()+'px" height="'+$this.height()+'px"></canvas>');
		        $(this).append($ctx);
		        var config = $this.data("config");
		        if ( ! config ) { return true; }
		        var myChart = new Chart( $ctx, config );
		      });
 			   } );
    	},
    	
    	".mw-code" : function() {
    		pw.loader.using( 'chart', function() {
		      $(".chart").each(function(){
		        var $this = $(this);
		        var $ctx = $('<canvas width="'+$this.width()+'px" height="'+$this.height()+'px"></canvas>');
		        $(this).append($ctx);
		        var config = $this.data("config");
		        if ( ! config ) { return true; }
		        var myChart = new Chart( $ctx, config );
		      });
 			   } );
    	},
    	
  	},
  	
    _extRule : [
	    {
	    	c : function() { return mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Recentchanges' || mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Log'; },
	    	s : [ 'mw/recentchanges.js', 'mw/recentchanges.css']
	    },
	    {
	    	c : function() { return mw.config.get( 'wgAction' ) === 'edit' || mw.config.get( 'wgAction' ) === 'submit'; },
	    	s : [ 'mw/edit.js' ]
	    },
	    {
	    	c : function() { return mw.config.get('wgIsArticle') && (mw.config.get('wgNamespaceNumber')%2==0) && mw.config.get('wgPageName') != "首页"; },
	    	s : [ 'extensions/comment/comment.js', 'extensions/comment/comment.css' ]
	    },
	    {
	    	c : function() { return mw.config.get('wgUserId'); },
	    	s : [ 'mw/link.js' ]
	    },
	    
    ],
  },

  util : {
    getResUrl : function( url ) {
      var respath = pokeWiki.config.get('pwResPath').replace(/\/+$/,'');
      url = ( url || '' ).replace(/^\/+/,'');
      return ( respath + '/' + url ).toLowerCase();
    },
  },

  action : {
    edit : function( opt, callbackSuccess, callbackError ) {
      var data = {
        format: 'json',
        action: 'edit',
        token: mw.user.tokens.get( 'editToken' )
      }
      $.extend( true, data, opt );
      $.ajax({
        url: mw.util.wikiScript( 'api' ),
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function( data ) {
          if ( data && data.edit && data.edit.result == 'Success' ) {
            if (callbackSuccess) callbackSuccess();
          } else {
            if (callbackError) callbackError();
          }
        },
        error: callbackError
      });
    },
    goto : function( title ) {
			window.location.href = mw.util.getUrl(title);
    }
  },
  
  localStorage : {
    get : function ( key, defaultValue ) {
      var raw = localStorage.getItem( key );
      if ( raw !== null ) {
        try {
          var obj = JSON.parse(raw);
          if ( typeof obj === 'object' && typeof obj.data !== 'undefined' ) {
            return obj.data;
          } else {
            return defaultValue;
          }
        } catch (e) {
          return defaultValue;
        }
      } else {
        return defaultValue;
      }
    },
    set : function ( key, value ) {
      var obj = { "data": value };
      localStorage.setItem( key, JSON.stringify( obj ))
    },
    remove : function ( key ) {
      localStorage.removeItem( key );
    }
  },

  initMW: function() {
  	pw.loader.using( 'mw-default', function(){
	  	$.each( pw.loader._importRule, function( selecter, func ) {
	  		if ( $(selecter).length > 0 ) func();
	  	});
	  	$.each( pw.loader._extRule, function( i, v ) {
	  		if ( v.c() ) pw.loader.using( v.s );
	  	});
  	});
  	
    $('.noscript').remove();
  }

};

loadjs = function(){function e(e,n){e=e.push?e:[e];var t,r,i,c,o=[],f=e.length,a=f;for(t=function(e,t){t.length&&o.push(e),--a||n(o)};f--;)r=e[f],i=s[r],i?t(r,i):(c=u[r]=u[r]||[],c.push(t))}function n(e,n){if(e){var t=u[e];if(s[e]=n,t)for(;t.length;)t[0](e,n),t.splice(0,1)}}function t(e,n,r,i){var o,s,u=document,f=r.async,a=(r.numRetries||0)+1,h=r.before||c;i=i||0,/(^css!|\.css$)/.test(e)?(o=!0,s=u.createElement("link"),s.rel="stylesheet",s.href=e.replace(/^css!/,"")):(s=u.createElement("script"),s.src=e,s.async=void 0===f||f),s.onload=s.onerror=s.onbeforeload=function(c){var u=c.type[0];if(o&&"hideFocus"in s)try{s.sheet.cssText.length||(u="e")}catch(e){u="e"}if("e"==u&&(i+=1)<a)return t(e,n,r,i);n(e,u,c.defaultPrevented)},h(e,s)!==!1&&u.head.appendChild(s)}function r(e,n,r){e=e.push?e:[e];var i,c,o=e.length,s=o,u=[];for(i=function(e,t,r){if("e"==t&&u.push(e),"b"==t){if(!r)return;u.push(e)}--o||n(u)},c=0;c<s;c++)t(e[c],i,r)}function i(e,t,i){var s,u;if(t&&t.trim&&(s=t),u=(s?i:t)||{},s){if(s in o)throw"LoadJS";o[s]=!0}r(e,function(e){e.length?(u.error||c)(e):(u.success||c)(),n(s,e)},u)}var c=function(){},o={},s={},u={};return i.ready=function(n,t){return e(n,function(e){e.length?(t.error||c)(e):(t.success||c)()}),i},i.done=function(e){n(e,[])},i.reset=function(){o={},s={},u={}},i.isDefined=function(e){return e in o},i}();

if ( pw.config.get('isMediaWiki') ) pw.initMW();
