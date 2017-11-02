$(document).ready(function(){
	let clicker$ = $('.clicker');
	let mainMenuBtn$ = $('.main-menu-btn');
	let footer$ = $('.footer');
	let mainNav$ = $('#main-nav');
	let mainContent$ = $('#main-content');

	let w = $(window).width();
	let h = $(window).height();

	clicker$.on('click',function(){
		mainMenuBtn$.animate(
			{top: 0},
			600,
			function(){}
		);

		mainNav$.animate(
			{top: '-' + h + 'px'},
			600,
			function(){}
		);

		
		mainContent$.css({display: 'block'});
		setTimeout(function(){
			mainContent$.animate({opacity: 1},300,function(){});
		},600);
			

		footer$.animate(
			{bottom: '-' + 100 + '%'},
			600,
			function(){}
		);
	});

	mainMenuBtn$.on('click',function(){
		$(this).animate(
			{top: '-' + 100 + '%'},
			600,
			function(){}
		);

		footer$.animate(
			{bottom: 0},
			600,
			function(){}
		);

		mainContent$.animate({opacity: 0},300,function(){
			mainContent$.css({display: 'none'});
			mainNav$.animate(
			{top: 0},
			600,
			function(){}
		);
		});

		
	});
});