
	function getTalkpageName () {
		var talkpage = $('#ca-talk a').attr('href');
		talkpage = $('#ca-talk').hasClass('new') ? /=(.+?)&/.exec(talkpage)[1] : talkpage.replace('/wiki/','');
		talkpage = decodeURIComponent(talkpage).replace('%20','+');
		return talkpage;
	}

	var html = '<div id="comment">';
	html += '<h2><a href="/wiki/'+getTalkpageName()+'">留言</a></h2>';
	if ( mw.config.get('wgUserName') ) {
		html += '<table>';
		html += '<tr><td id="comment_border" colspan="2"><textarea lang="zh-cn" placeholder="请输入内容"></textarea></td></tr>';
		html += '<tr><td></td><td id="comment_buttons">';
		html += '<input id="comment_adv" type="button" value="高级" onclick="window.location.href = \'/w/index.php?title=\'+getTalkpageName()+\'&action=edit&section=new\';" /><input id="comment_submit" type="button" value="发布" onclick="comment();" /></td></tr></table>';
	} else {
		html += '<table><tr><td><a href="/w/index.php?title=%E7%89%B9%E6%AE%8A:%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95&amp;returnto='+mw.config.get('wgPageName')+'">登录</a>之后，您可以在这里留言。</td></tr></table>';
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

window.comment = function () {
	var textarea = $('#comment textarea')[0];
	var text = textarea.value;
	if ( text.match(/^[\n\r ]+$/) ) return;
	textarea.disabled = true;
	$('#comment_adv')[0].disabled = true;
	$('#comment_submit')[0].disabled = true;
	var now = new Date();
	text = text.replace(/^[\n\r ]+|[\n\r ]+$/g,'');
	text = text.replace(/\n +/g,'\n');
	var text2 = text;
	var time = now.getFullYear()+'年'+(now.getMonth() + 1)+'月'+now.getDate()+'日';
	if (text.indexOf('~~~')==-1) { text += ' --~~~~' }
	text = '=={{Newmsg|'+mw.config.get('wgUserName')+'|'+time+'}}==\n' + text;
	text2 = '* ' + time + '，' + mw.config.get('wgUserName')+ '在[[' + mw.config.get('wgPageName') + ']]说：' + text2;
	$.ajax({
		type: 'POST',
		url: mw.util.wikiScript('api'),
		data: {
			format: 'json',
			action:'edit',
			section:'new',
			title:getTalkpageName(),
			token:mw.user.tokens.get( 'editToken' ),
			text:text
		},
		dataType: 'json'
	}).done(function ( data ){
		if ( data && data.edit && data.edit.result == 'Success' ) {
			$.ajax({
				type: 'POST',
				url: mw.util.wikiScript('api'),
				data: {
					format: 'json',
					action:'edit',
					section:'new',
					title:'口袋百科:页面留言',
					token:mw.user.tokens.get( 'editToken' ),
					text: text2
				},
				dataType: 'json'
			}).done(function ( data2 ){
				if ( data2 && data2.edit && data2.edit.result == 'Success' ) {
					window.location.href = "/wiki/"+getTalkpageName();
				} else {
					commentfail();
				}
			}).fail(function(){
				commentfail();
			});
		} else {
			commentfail();
		}
	}).fail(function(){
		commentfail();
	});
}

window.commentfail = function () {
	alert( '发布失败，请重试。' );
	$('#comment textarea')[0].disabled = false;
	$('#comment_adv')[0].disabled = false;
	$('#comment_submit')[0].disabled = false;
}
