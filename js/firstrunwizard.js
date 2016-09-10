function showfirstrunwizard(){
	$.colorbox({
		opacity: 0.7,
		transition: 'elastic',
		speed: 100,
		width: '80%',
		height: '80%',
		href: OC.filePath('firstrunwizard', '', 'wizard.php'),
		onClosed : function(){
			$.ajax({
			url: OC.filePath('firstrunwizard', 'ajax', 'disable.php'),
			data: ""
			});
		}
	});
}

$('#showWizard').live('click', function () {
	showfirstrunwizard();
});

$('#closeWizard').live('click', function () {
		$.colorbox.close();
});
