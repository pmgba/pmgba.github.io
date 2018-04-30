comment = {
	
	talkpageName : function(){
		var talkpage = $('#ca-talk a').attr('href');
		talkpage = $('#ca-talk').hasClass('new') ? /=(.+?)&/.exec(talkpage)[1] : talkpage.replace('/wiki/','');
		talkpage = decodeURIComponent(talkpage).replace('%20','+');
		return talkpage;
	}(),
	
	createCommentBox : function() {
		var html = '<div id="comment">';
		html += '<h2><a href="/wiki/'+ comment.talkpageName +'">留言</a></h2>';
		if ( mw.config.get('wgUserName') ) {
			html += '<table>'
				+ '<tr><td id="comment_border" colspan="2">'
				+ '<textarea lang="zh-cn" placeholder="请输入内容"></textarea>'
				+ '</td></tr>'
				+ '<tr><td></td><td id="comment_buttons">'
				+ '<input id="comment_submit" type="button" value="发布" onclick="comment.post();" />'
				+ '</td></tr></table>'
			;
		} else {
			var url = mw.util.getUrl('特殊:用户登录', { returnto: mw.config.get('wgPageName')} );
			html += '<table><tr><td><a href="' + url + '">登录</a>之后，您可以在这里留言。</td></tr></table>';
		}
		html += '</div>';
		$('div#footer').before( html );
		$('#comment_buttons').hide();
		$('#comment textarea').focus(function() {
			$(this).addClass('focus');
			$('#comment_buttons').show();
		}).blur(function() {
			if ( this.value.length == 0 ) {
				$(this).removeClass('focus');
				$('#comment_buttons').hide();
			}
		});
	},
	
	post : function() {
		var textarea = $('#comment textarea')[0];
		var text = textarea.value;
		if ( text.match(/^[\n\r ]+$/) ) return;
		textarea.disabled = true;
		$('#comment_submit')[0].disabled = true;
		var now = new Date();
		text = text.replace(/^[\n\r ]+|[\n\r ]+$/g,'');
		text = text.replace(/\n +/g,'\n');
		var text2 = text;
		var time = now.getFullYear()+'年'+(now.getMonth() + 1)+'月'+now.getDate()+'日';
		if (text.indexOf('~~~')==-1) { text += ' --~~~~' }
		text = '=={{Newmsg|'+mw.config.get('wgUserName')+'|'+time+'}}==\n' + text;
		text2 = '* ' + time + '，' + mw.config.get('wgUserName')+ '在[[' + mw.config.get('wgPageName') + ']]说：' + text2;
		
		pw.action.edit( {
			title : "口袋百科:页面留言",
			section:'new',
			text: text2
		});
		
		pw.action.edit( {
			title: comment.talkpageName,
			section:'new',
			text: text
		},
		function() {
			window.location.href = mw.util.getUrl( comment.talkpageName );
		},
		function() {
			alert( '发送失败，请重试。' );
			$('#comment textarea')[0].disabled = false;
			$('#comment_submit')[0].disabled = false;
		});
	}
}

comment.createCommentBox();