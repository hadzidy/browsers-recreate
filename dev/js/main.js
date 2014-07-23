(function(ns){

	function BrowserAnim(){

		this.init = function(){
			this.mouseOver();
			this.mouseLeave();
		};

		this.mouseOver = function(){
			scope = this;
			$(".navegador").each( function(index, element){

				$(element).mouseover(function(){
					scope.biggerWidth(index+1);
					scope.smallerWidth(index+1);
					scope.statsHide(element, "visible");

				switch(index) {
				    case 0:
				        scope.logoHover(element, "-7px -103px");
				        break;
				    case 1:
				        scope.logoHover(element, "-106px -106px");
				        break;
				    case 2:
				        scope.logoHover(element, "-201px -105px");
				        break;
				    case 3:
				        scope.logoHover(element, "-306px -99px");
				        break;
				    case 4:
				        scope.logoHover(element, "-406px -102px");
				        break;    
				    }	
				});
				
				$(element).mouseleave(function(){

					scope.statsHide(element, "hidden");

				switch(index) {
				    case 0:
				        scope.logoHover(element, "-7px -9px");
				        break;
				    case 1:
				        scope.logoHover(element, "-106px -11px");
				        break;
				    case 2:
				        scope.logoHover(element, "-201px -5px");
				        break;
				    case 3:
				        scope.logoHover(element, "-306px -6px");
				        break;
				    case 4:
				        scope.logoHover(element, "-406px -5px");
				        break;    
				    }					

				});

			});
		};

		this.mouseLeave = function(){
			scope = this;
			$("body").mouseleave(function(){
				var returnSize = $(".navegador");
				TweenMax.to(returnSize, 0.5, {width:"20%", ease:Circ.easeOut});
			});
		};		

		this.biggerWidth = function(n){
			var actualBrowser = $(".browser-container li:nth-child(" + n + ")");
			TweenMax.to(actualBrowser, 0.5, {width:"30%", ease:Circ.easeOut});
		};

		this.smallerWidth = function(n){
			for(var i = 1; i < 6; i++){
				if(i != n){
				var actualBrowser = $(".browser-container li:nth-child(" + i + ")");
				TweenMax.to(actualBrowser, 0.5, {width:"17.5%", ease:Circ.easeOut});
				}
			}
		};

		this.logoHover = function(browserClass, xy){
			$(browserClass).find(".logo").css("background-position", xy);
		};

		this.statsHide = function(element, state){
			$(element).find('.statistics').css("visibility", state);
		};
	};

	ns.browseranim = BrowserAnim;

}(window) )

var trying = new browseranim();

trying.init(); 



