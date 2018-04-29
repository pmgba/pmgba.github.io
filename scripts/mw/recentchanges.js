// 对[[特殊:最近更改]]与[[特殊:日志]]重新排版并添加颜色样式。

if ( mw.user.options.get('usenewrc') == 0 ) {
	function createusermenu(user) {
		return user;
		var username = user.match(/>(.+?)</)[1];
		var usermenu = '<span class="hovermenu">'+user.match(/<a.+?\/a>/i)[0]+'<ul>';
		usermenu += '<li><a title="用户讨论:'+username+'" href="/wiki/用户讨论:'+username+'">讨论</a></li>';
		usermenu += '<li><a title="特殊:用户贡献/'+username+'" href="/wiki/特殊:用户贡献/'+username+'">用户贡献</a></li>';
		if ( user.match(/封禁/) ) { usermenu += '<li><a title="特殊:封禁用户/'+username+'" href="/wiki/特殊:封禁用户/'+username+'">封禁用户</a></li>'; }
		usermenu += '</ul></span>';
	}

	function createtable(log, flag, title, time, byte, user, comment) {
		var table = '';
		table += '<table class="rcrow">';
		table += '<tr>';
		table += '<td class="rcrow-action">' + log + '</td>';
		table += '<td class="rcrow-time">' + time + '</td>';
		//table += '<td class="rcrow-action">' + flag + '</td>';
		table += '<td class="rcrow-log">' + flag + title + '  ' + byte + '</td>';
		table += '<td class="rcrow-user">' + createusermenu(user) + '</td>';
		table += '<td class="rcrow-comment">' + comment + '</td>';
		table += '</tr></table>';
		return table;
	}

	function getOuterHTML( $j ) {
		if ( $j.length > 0 ) {
			var h = '';
			$.each($j, function(i,v){
				h += v.outerHTML;
			});   
			return h;
		} else {
			return '';
		}
	}

	$('.special li').each( function () {
		var $this = $(this);
		$this.addClass('mw-logline');
		var html = $this.html();
		var act = $this.text().match(/^（(.+?)）/)[1];
		var log = html.match(/^（(.+?a>)）/)[1];

		var title = '';
		var date = getOuterHTML($('.mw-changeslist-date',$this));
		var plusminus = getOuterHTML($('.mw-plusminus-pos, .mw-plusminus-neg, .mw-plusminus-null',$this));
		var userlink = getOuterHTML($('.mw-userlink:last',$this));
		//var usertoollinks = getOuterHTML($('.mw-usertoollinks:last',$this));
		var comment = getOuterHTML($('.comment',$this));
		var rollback = getOuterHTML($('.mw-rollback-link',$this));
		var abbr = getOuterHTML($('abbr',$this));

		if ( act == '差异 | 历史' ) {
			act = '编辑';
			$this.addClass('mw-logline-edit');
			if ( $('.newpage',$this).length > 0 ) {
				$this.addClass('mw-logline-newpage');
				act = '新建';
			}
			if ( log.indexOf('diff=') > -1 ) plusminus = log.match(/(<a.+?>)差异<\/a>/)[1] + plusminus +'</a>';
			log = log.match(/(?:<a.+?)*(<a.+?>)历史<\/a>/)[1] + act + '</a>';
			title = getOuterHTML($('.mw-title',$this));
		} else if ( act == '用户创建日志' ) {
			log = log.replace( act, '用户' );
			//title = html.match(/用户账户(<a.+?a>被创建 )*/)[0];
			//if ( html.indexOf('，并且密码已通过电子邮件发送') != -1 ) userlink = getOuterHTML($('.mw-userlink:first',$this));
			//else if ( html.indexOf(' 由 ') == -1 ) userlink = '';
			title = '创建账户';
			$this.addClass('mw-logline-newusers');
		} else if ( act == '上传日志' ) {
			log = log.replace( act, '上传' );
			var m = html.match(/上传(<a(.+?)a>)(的新版本)*/);
			title = m[1];
			if ( m[2] ) title = '<abbr class="newpage" title="该编辑创建了新页面">新</abbr>' + title;
			$this.addClass('mw-logline-upload');
		} else if ( act == '移动日志' ) {
			log = log.replace( act, '移动' );
			title = html.match(/移动页面<a(.+?)a>至<a(.+?)a>/)[0];
			$this.addClass('mw-logline-move');
		} else if ( act == '删除日志' ) {
			log = log.replace( act, '删除' );
			title = html.match(/(..)页面<a(.+?)a>( <span.+?span>)*/)[0];
			$this.addClass('mw-logline-delete');
		} else if ( act == '保护日志' ) {
			log = log.replace( act, '保护' );
			title = html.match(/(保护|解除)“<a(.+?)a>”(的保护)*/)[0];
			$this.addClass('mw-logline-protect');
		} else if ( act == '封禁日志' ) {
			log = log.replace( act, '封禁' );
			title = html.match(/封禁了<a(.+)‎/)[0];
			$this.addClass('mw-logline-protect');
			userlink = getOuterHTML($('.mw-userlink:first',$this));
		}
		$this.html(createtable(log, abbr, title , date, plusminus, userlink, comment));
	});

}

if ( mw.config.get('wgCanonicalSpecialPageName') == "Log" ) {
	$('#bodyContent > ul > li').addClass('mw-logline');
}
