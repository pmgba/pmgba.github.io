$('.collapsiblelist').each( function () {

	var $toggle= $(this);
	var $list = $toggle.nextAll('ol,ul,dl');

	var showText = '[' + ($toggle.data('show') || 'չ��') + ']';
	var hideText = '[' + ($toggle.data('hide') || '�۵�') + ']';

	var $a = $('<a class="collapsiblelist-toggle" href="#" style="font-size:xx-small;">' + showText + '</a>');
	$toggle.html($a);
	$list.hide();
	var showhide = false;
	$a.click(function(){
		if ( showhide ) {
			$list.hide();
			$a.html(showText);
		} else {
			$list.show();
			$a.html(hideText);
		}
		showhide = !showhide;
		return false;
	});

});