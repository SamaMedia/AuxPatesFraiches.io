// JavaScript Document

//index page counter
//Counter {counter-value class}
	
	
	function countAllWayUp() {
	
		window.onscroll = function () {
			
			var top2 = window.scrollY;		
			if (top2 >= 500) {			
				
				console.log("IT WORKSSSSSS");
				const counters = document.querySelectorAll(".counter-value"); 
				var speed = 400;

				counters.forEach(counter => {
					const updateCount = () => {
						const target = +counter.getAttribute('data-count');
						const count = +counter.innerText;

						const inc = target / speed;

						

						if ( count < target ) {
							counter.innerHTML = count + inc;
							setTimeout(updateCount, 1);
						}else {
							count.innerText = target;
						}
					}

					updateCount();
				})
				
			}else{				
				console.log("scroll more!");
			}						
		}		
	}
	countAllWayUp();




