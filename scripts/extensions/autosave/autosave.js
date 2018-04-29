autosave = {

	listKey : 'AutosaveList',
	list : {},
	hasDraft : false,
	articleKey : '',

	loadDraft: function ( title ) {
		var draft = localStorage.getItem( 'Autosave-' + title );
		return draft || '';
	},

	saveDraft: function ( title, content ) {
		localStorage.setItem( 'Autosave-' + title, content );
		autosave.list[title] = { time: mw.now(), length: autosaveDraft.length };
		autosave.hasDraft = true;
		localStorage.setItem( autosave.listKey, JSON.stringify(autosave.list) );
	},

	removeDraft: function ( title, bSave ) {
		delete autosave.list[title];
		if ( bSave || true ) localStorage.setItem( autosave.listKey, JSON.stringify(autosave.list) );
		localStorage.removeItem( 'Autosave-' + title );
	},

	loadList: function () {
		var autosaveList = localStorage['AutosaveList'];
		if ( autosaveList !== null ) {
			try {
				autosaveList = JSON.parse(autosaveList);
				if ( typeof autosaveList !== 'object' ) autosaveList = {};
			} catch (err) {
				autosaveList = {};
			}
		} else {
			autosaveList = {};
		}
		autosave.list = autosaveList;
	},
	
	generateAutosave : function() {
		var Countdown = -1;
		var timer;
		
		var $wpTextbox1 = $('#wpTextbox1');
		$('input#wpDiff').after('\n<input id="wpAutosave" name="wpAutosave" value="自动保存" title="自动保存至缓存" type="button" disabled=true >\n<input id="wpLoadAutosave" name="wpLoadAutosave" value="载入草稿" title="载入自动保存的草稿" type="button" disabled=true >');
		var $wpAutosave = $('#wpAutosave');
		var $wpLoadAutosave = $('#wpLoadAutosave'); 
		$wpTextbox1.change(function() {
				if ( $wpAutosave.attr('disabled') ) EnableAutoSave();
		});
		
		var autosaveDraft = localStorage.getItem( autosave.articleKey );
		if ( autosaveDraft != null ) {
			$wpLoadAutosave.removeAttr('disabled');   
			$wpLoadAutosave.val('载入草稿');
		}
		$wpLoadAutosave.click(function() { $wpTextbox1.val(autosaveDraft) });
		
		function AutoSave() {
			if ( $wpTextbox1.val().length == 0 ) return;
			if ( $wpAutosave.attr('disabled') ) return;
			autosaveDraft = $wpTextbox1.val();
			localStorage.setItem( autosave.articleKey, autosaveDraft );
			autosave.list[mw.config.get( 'wgPageName' ).toString()] = { time: mw.now(), length: autosaveDraft.length };
			autosave.hasDraft = true;
			localStorage.setItem( autosave.listKey, JSON.stringify(autosave.list) );
			$wpAutosave.attr('disabled', true);
			$wpAutosave.val('已保存');
			clearInterval( timer );
		};
		
		function EnableAutoSave() {
			if ( $wpTextbox1.val().length == 0 ) return;
			$wpAutosave.removeAttr('disabled');
			Countdown = 30;
			timer = setInterval( AutoSaveCountdown, 1000 );
			$wpAutosave.val( Countdown + '秒后自动保存' );
		};
		
		function AutoSaveCountdown() {
			Countdown -= 1;
			$wpAutosave.val( Countdown + '秒后自动保存' );
			if ( Countdown == 0 ) AutoSave();
		};
		
		$('input#wpSave, input#wpPreview, input#wpDiff, input#wpAutosave').click( function() { AutoSave() } );
		
	},

	generateSpecialPage : function() {
		document.title = '草稿';
		$('#firstHeading').html('草稿');
		var html = '';
		html += '<p>您在口袋百科上编辑的内容草稿会自动保存在本地的浏览器中，如果您变更电脑或浏览器，草稿不会随之转移。</p>';
		html += '<p>您可以在设置-小工具-功能里关闭或启用自动保存功能。</p>';
		html += '<p><input id="autosave-clear" type="button" value="清空" /></p>';
		html += '<table class="wikitable" style="width:100%;"><tr><th style="width:30%;">标题</th><th style="width:40%;">内容</th><th style="width:20%;">修改日期</th><th style="width:10%;">操作</th></tr>';
		$.each( autosave.list, function( title, data ) {
			var time = ''
			if ( data.time ) {
				var d = new Date(data.time);
				time = d.getFullYear() + '年' + (d.getMonth()+1) + '月' + d.getDate() + '日 ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
			}
			html += '<tr>';
			html += '<td><a href="' + mw.util.getUrl(title) + '">' + title + '</a></td>';
			html += '<td style="font-style:italic;">' + $('<div>').text(autosave.loadDraft( title ).substring(0,50)).html() + '</td>';
			html += '<td>' + time + '</td>';
			html += '<td><a href="' + mw.util.getUrl(title) + '">查看</a>';
			html += ' <a href="' + mw.util.getUrl(title,{action:"edit"}) + '">编辑</a>';
			html += ' <a class="autosave-delete" href="#" data-title="' + title + '">删除</a></td>';
			html += '</tr>';
		});
		html += '</table>';
		$('#mw-content-text').html(html);
		$('#autosave-clear').click(function(){
			$.each( autosave.list, function( title, data ) {
				delete autosave.list[title];
				localStorage.removeItem( 'Autosave-' + title );
			});
			localStorage.setItem( autosave.listKey, JSON.stringify(autosave.list) );
			location.reload();
		});
		$('.autosave-delete').click(function(){
			autosave.removeDraft($(this).data('title'));
			$(this).parent().parent().remove();
		});
	},

	checkSuccess : function() {
		if ( mw.config.get('wgPostEdit') && autosave.hasDraft ) {
			delete autosave.list[mw.config.get( 'wgPageName' ).toString()];
			localStorage.setItem( autosave.listKey, JSON.stringify(autosave.list) );
			localStorage.removeItem( autosave.articleKey );
		};
	},

	init : function() {
		autosave.loadList();
		autosave.articleKey = 'Autosave-' + mw.config.get( 'wgPageName' );
		autosave.hasDraft = ( mw.config.get( 'wgPageName' ).toString() in autosave.list );

		if ( mw.config.get( 'wgAction' ) === 'edit' || mw.config.get( 'wgAction' ) === 'submit' ) {
			autosave.generateAutosave();
		} else if ( mw.config.get( 'wgPageName' ) === '特殊:草稿' ) {
			autosave.generateSpecialPage();
		} else if ( mw.config.get( 'wgAction' ) === 'view' ) {
			setTimeout( autosave.checkSuccess, 1000 );
		}

		mw.util.addPortletLink(
			'p-personal',
			mw.util.getUrl( '特殊:草稿' ),
			'草稿(' + Object.keys(autosave.list).length + ')',
			'pt-autosave',
			'你的草稿',
			null,
			'#pt-preferences'
		);
	}
};

autosave.init();
