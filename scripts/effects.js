// This Page Effects
$(document).ready(function() {
	
//Sub-menu Toggle
	$('#navbarDropdownMenuLink').click(function() {
		$('#divDropDown').slideToggle(200, 'linear');
	});

	
//Toggle the top search bar
	$('#searchBtn').click(function() {
		$('.search-nav').slideToggle(150, 'linear');
	});
	$('.close-btn').click(function() {
		$('.search-nav').slideUp(100, 'linear');
	});
	
//Carousel
	carouselShowOnSm();
	function carouselShowOnSm() {
		var itemCarousel = $('.carousel-item');
		if (itemCarousel.hasClass('active')) {
			$('.carousel-caption').removeClass('d-none').addClass('d-block');
		}
	};
	
//images animation (for index Page - line: 155).

	function flexMenuHoverBtn() {
		
		const divCont = $('.a-cont');
		const imgParent = $('.c-click img');
		const btnToggled = $('.a-cont a');
		/*
		for loop required, lot of errors due to jquery, fix it later.
		*/
		
		//div 1
		
		$('.a-cont').eq(0).mouseenter(function() {
			$('.c-click img').eq(0).css('opacity','0.7');
			$('.a-cont a').eq(0).fadeIn(50);
		})
		$('.a-cont').eq(0).mouseleave(function() {
			$('.c-click img').eq(0).css('opacity','1');
			$('.a-cont a').eq(0).fadeOut(200);
		})		
		//div 2
		$('.a-cont').eq(1).mouseenter(function() {
			$('.c-click img').eq(1).css('opacity','0.7');
			$('.a-cont a').eq(1).fadeIn(50);
		})
		$('.a-cont').eq(1).mouseleave(function() {
			$('.c-click img').eq(1).css('opacity','1');
			$('.a-cont a').eq(1).fadeOut(200);
		})		
		//div 1
		$('.a-cont').eq(2).mouseenter(function() {
			$('.c-click img').eq(2).css('opacity','0.7');
			$('.a-cont a').eq(2).fadeIn(50);
		})
		$('.a-cont').eq(2).mouseleave(function() {
			$('.c-click img').eq(2).css('opacity','1');
			$('.a-cont a').eq(2).fadeOut(200);
		})						
	}
	flexMenuHoverBtn();
	
	
//hide top bar on scroll
	function hideTopBarOnScroll() {
		const fullHeader = document.querySelector("#header-container");
		const navBar = document.querySelector("#posNav");//navbar
		const topNav = document.querySelector("#top-nav");
		
		window.onscroll = function () {
			var top = window.scrollY;		
			if (top >= 50) {			
				topNav.style.top = "-30px";
				navBar.style.top = "0px";
				
			}else{				
				topNav.style.top = "0px";
				navBar.style.top = "30px";				
			}			
		}
	};
	hideTopBarOnScroll();
	
	
});