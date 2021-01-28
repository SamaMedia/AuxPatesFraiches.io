 // JavaScript Document
$(document).ready(function() {
	//Sub-menu Toggle
	$('#navbarDropdownMenuLink').click(function() {
		$('#divDropDown').slideToggle(200, 'linear');
	});

	/*
	$('#navbarDropdownMenuLink').hover(function() {
		$('#divDropDown').slideToggle(300, 'linear', function() {
			$('#divDropDown').mouseleave(function() {
				$(this).slideUp(300, 'linear');
				$(this).css('display','none');
			})
		});
	});
	*/

	//Toggle the top search bar
	$('#searchBtn').click(function() {
		$('.search-nav').slideToggle(150, 'linear');
	});
	$('.close-btn').click(function() {
		$('.search-nav').slideUp(100, 'linear');
	});
	/*
	var mediaQmin = window.matchMedia("(min-width:900px)");
	
	$('#searchBtn').hover(function() {
		
		if ( !mediaQmin.matches ) {
			$('#searchBtn').click(function() {
				$('.search-nav').slideToggle(150, 'linear');
			});
		}
	});
	*/
	carouselShowOnSm();
	function carouselShowOnSm() {
		var itemCarousel = $('.carousel-item');
		if (itemCarousel.hasClass('active')) {
			$('.carousel-caption').removeClass('d-none').addClass('d-block');
		}
	}
	
	/*
	var topNav = $('#top-nav');
	
	$('window').scrollDown(function(){
		$('#top-nav').hide();
	});

	$('window').scrollUp(function(){
		$('#top-nav').show() 
	});
	*/
	
	
	/*
	$(window).scroll(function () {
		var topNav = $('#top-nav');
		console.log('fun works');
		setTimeout(function() {
			topNav.css({"opacity":"0.2","transition":"0.1s"});
		},4000);            
		topNav.css({"opacity":"1","transition":"0.1s"});    
	});
	*/
	
	
	var menuFlexImgArr = $('.c-click img');
	var menuFlexBtnArr = $('.c-click a');
	//var hoverItem = false;
	var emptyMFimg = [];
	var emptyMFbtn = [];
	