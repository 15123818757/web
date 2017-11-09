	var scrWid = document.body.clientWidth;
	var scrHei = document.body.clientHeight;
	if(scrWid >= scrHei){
		$(".cc").css("display","block");
	    $(".num_box scroll").css("display","none");
	}
//判断手机横竖屏状态：
	function hengshuping(){ 
	  if(window.orientation==180||window.orientation==0){
	  	$(".num_box scroll").css("display","block");
	  	$(".cc").css("display","none");
	  	scrWid = document.body.clientWidth;
		scrHei = document.body.clientHeight;
	   } 
	if(window.orientation==90||window.orientation==-90){ 
	        $(".cc").css("display","block");
	        $(".num_box scroll").css("display","none");
	    } 
	 } 
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false); 	
	
	//阻止软键盘打乱布局
	$(document).ready(function () {
	　　$('body').height($('body')[0].clientHeight);
	});
	
	var bannerData;
	//index
	
		

	var indexY = 0;
	var one;
	var yStart = 0;
	var yEnd = 0;
	var yFinal = 0;
	var box = document.querySelector(".box");
	//下拉  上拉  拖动事件
	box.addEventListener("touchstart",function(evt){
		//清除banner定时器
		clearInterval(bannerData);
		one = evt.touches[0];
		yStart = one.pageY;
	});
	box.addEventListener("touchmove",function(evt){
		one = evt.touches[0];
	});
	box.addEventListener("touchend",function(evt){
		$(".banner").removeClass("tranTop");
		yEnd = one.pageY;
		yFinal = yEnd - yStart;
		if( yFinal != 0 ){
			if(yFinal <= -30){
				indexY ++;
				if(indexY == 5){
					indexY = 0;
				}
			}
			if(yFinal >= 30){
				indexY --;
				if(indexY == -1){
					indexY = 0;
				}
			}
			$(".box").css("top",-(indexY*scrHei)+"px");
		}
		yStart = 0;
		yEnd = 0;
		yFinal = 0;
		console.log("当前页数   "+indexY);
	});


	/*********************     banner     *********************/
	var banner = document.querySelector(".banner");
	var banXStart = 0;
	var banXEnd = 0;
	var banXFinal = 0;
	var banIndex = 0;
	banner.addEventListener("touchstart",function(evt){
		one = evt.touches[0];
		banXStart = one.pageX;
	});
	banner.addEventListener("touchmove",function(evt){
		one = evt.touches[0];
	});
	banner.addEventListener("touchend",function(evt){
		//激活定时器
		bannerData = setInterval(function(){
			banIndex ++;
			if(banIndex == 3){
				banIndex = 0;
			}
			goInit();
			switch (banIndex){
				case 0:
					banAnimate1();
					break;
				case 1:
					banAnimate2();
					break;
				case 2:
					banAnimate3();
				break;
			}
			$(".banner").css("left",-(banIndex*scrWid)+"px");
			$(".bannerIndex span").eq(banIndex).addClass("activeSpan").siblings().removeClass("activeSpan");
		},4000);
		banXEnd = one.pageX;
		banXFinal = banXEnd - banXStart;
		if( banXFinal != 0 ){
			if(banXFinal <= -30){
				banIndex ++;
				if(banIndex == 3){
					banIndex = 0;
				}
				goInit();
				switch (banIndex){
					case 0:
						banAnimate1();
						break;
					case 1:
						banAnimate2();
						break;
					case 2:
						banAnimate3();
						break;
				}
			}
			if(banXFinal >= 30){
				banIndex --;
				if(banIndex == -1){
					banIndex = 2;
				}
				goInit();
				switch (banIndex){
					case 0:
						banAnimate1();
						break;
					case 1:
						banAnimate2();
						break;
					case 2:
						banAnimate3();
						break;
				}
			}
			
			$(".banner").css("left",-(banIndex*scrWid)+"px");
			$(".bannerIndex span").eq(banIndex).addClass("activeSpan").siblings().removeClass("activeSpan");
		}
		banXStart = 0;
		banXEnd = 0;
		banXFinal = 0;
	});

	var ban3LineHeight = $(".formInput:nth-of-type(3)").height();
	$(".formInput:nth-of-type(3) textarea").css({
		"line-height":ban3LineHeight/3.5+"px",
		"padding-top":ban3LineHeight/10+"px"
	});
	$(".formInput:nth-of-type(3) img").css("transform","translateY(-"+ban3LineHeight/10+"px)");
	
	
	/*********************     难题     *********************/
	$(".problemBox div").click(function(){
		var pBoxIndex = $(this).index();
		for(var i=0;i<$(".problemBox div").length;i++){
			(function(i){
				$(".problemBox div").eq(i).children("img").attr("src","images/operation/2/gray_icon"+(i+1)+".png");
			})(i)
		}
		$(this).children("img").attr("src","images/operation/2/red_icon"+(pBoxIndex+1)+".png");
	});
	$(".caseBox div").click(function(){
		var pBoxIndex = $(this).index();
		for(var i=0;i<$(".caseBox div").length;i++){
			(function(i){
				$(".caseBox div").eq(i).children("p").children("img").attr("src","images/operation/3/grayImg"+(i+1)+".png");
			})(i)
		}
		$(this).children("p").children("img").attr("src","images/operation/3/redImg"+(pBoxIndex)+".png");
	});

	/*********************     分享     *********************/


	//左滑动
	$(".smLeft").click(function(){
		$(".smMMoveBox").css("left",'0');	
	});
	$(".smRight").click(function(){
		if($(".imgBox").length == 1){
			$(".smMMoveBox").css("left",'0%');
		}
		else{
			$(".smMMoveBox").css("left",'-100%');	
		}
	});

	//banner1动画
	function banAnimate1() {
		setTimeout(function() {
			$("#banner1>p,#banner1>img").css("opacity", "1");
		}, 500);
		setTimeout(function() {
			$(".bannerImg1").css("transform", "scale(1.2)");
		}, 1000);
		setTimeout(function() {
			$(".bannerImg1").css("transform", "scale(0.7)");
		}, 1300);
		setTimeout(function() {
			$(".bannerImg1").css("transform", "scale(1)");
		}, 1500);
	}
	banAnimate1();
	
	
	
	//banner2动画
	function banAnimate2() {
		setTimeout(function() {
			$(".banner2Box").css("opacity", "1");
		}, 100);
		setTimeout(function() {
			$(".bannerImg2").eq(0).css({
				"opacity": "1",
				"left": "0%"
			});
		}, 200);
		setTimeout(function() {
			$(".bannerImg2").eq(1).css({
				"opacity": "1",
				"left": "38%"
			});
		}, 300);
		setTimeout(function() {
			$(".bannerImg2").eq(2).css({
				"opacity": "1",
				"left": "76%"
			});
		}, 400);
		setTimeout(function() {
			$(".bannerImg2").eq(3).css({
				"opacity": "1",
				"left": "0%"
			});
		}, 500);
		setTimeout(function() {
			$(".bannerImg2").eq(4).css({
				"opacity": "1",
				"left": "38%"
			});
		}, 600);
		setTimeout(function() {
			$(".bannerImg2").eq(5).css({
				"opacity": "1",
				"left": "76%"
			});
		}, 700);
		setTimeout(function() {
			$("#banner2>img:nth-of-type(2)").css({
				"opacity": "1",
				"left": "59%"
			});
		}, 800);
		setTimeout(function() {
			$("#banner2>img:nth-of-type(1),#banner2>p").css("opacity", "1");
		}, 1000);
		setTimeout(function() {
			$("#banner2Line").css("opacity", "1");
		}, 1100);
	}
	
	
	//banner3动画
	function banAnimate3(){
		setTimeout(function(){
			$(".formOutBox").css("transform","scale(1) rotateZ(0deg)");
		},100)
		setTimeout(function(){
			$("#banner3 p,#banner3 img").css("opacity","1");
		},200)
		
	}

	//初始化
	function goInit(){
		$(".banner div>p,.banner div img").css("opacity","0");
		//banner1
		$(".bannerImg1").css("transform","scale(0)");
		//banner2
		$(".bannerImg2").css("left","-50%");
		//banner3
		$(".formOutBox").css("transform","scale(0) rotateZ(720deg)");
	}

	//bannr定时器
	bannerData = setInterval(function(){
		banIndex ++;
		if(banIndex == 3){
			banIndex = 0;
		}
		goInit();
		switch (banIndex){
			case 0:
				banAnimate1();
				break;
			case 1:
				banAnimate2();
				break;
			case 2:
				banAnimate3();
			break;
		}
		$(".banner").css("left",-(banIndex*scrWid)+"px");
		$(".bannerIndex span").eq(banIndex).addClass("activeSpan").siblings().removeClass("activeSpan");
	},4000);

	//当选中input标签的时候清除定时器
	$("input").focus(function(){
		clearInterval(bannerData);
	});
	$("textarea").focus(function(){
		clearInterval(bannerData);
		$(".banner").addClass("tranTop");
	});

	
	if(scrHei >= 600){
		$(".shareTop img").css({
			"width":"80%",
			"left":"10%"
		});
		$(".caseBox>div>p:nth-of-type(2)").css({
			"font-size":"0.6rem",
			"padding":"3% 5%"
			
		});
		
	}
	if(scrHei >=660){
		$(".smMiddle div div").css({
			"width":"13%"
		});
	}

	


	//处理案例的布局
	
	setTimeout(function(){
		
		
		var smallList = document.querySelectorAll(".small");
		var smMMoveBox = document.querySelector(".smMMoveBox");
		//大盒子的数量
		var mBox_num;
		if(smallList.length/6 <= 1){
			mBox_num = 1;
		}else{
			if(smallList.length/6 != parseInt(smallList.length/6)){
				mBox_num = parseInt(smallList.length/6)+1;
			}else{
				mBox_num = parseInt(smallList.length/6);
			}	
		}
		smMMoveBox.style.width = (mBox_num*100)+"%";
		var imgBox = document.createElement("div");
		var imgDiv = document.createElement("div");
		imgDiv.className = "small";
		var img = document.createElement("img");
		imgBox.className = "imgBox";
		var ss = 0;
		if(smallList.length >6){
			ss = 6;
		}else{
			ss = smallList.length; 
		}
		for(var i=0;i<ss;i++){
			(function(i){
				img.setAttribute("src",smallList[i].children[0].getAttribute("src"));
				imgDiv.appendChild(img);
				imgBox.appendChild(imgDiv.cloneNode(true));
			})(i)
		}
		for(var i=0;i<mBox_num;i++){
			(function(i){
				smMMoveBox.appendChild(imgBox.cloneNode(true));
			})(i)
		}
		$(".imgBox").width($(".smMiddle").width()-10);
		$(".imgBox").height($(".smMiddle").height());	
		$(".imgBox .small").height($(".imgBox .small").width());
		
		if(mBox_num == 2){
			$(".imgBox").eq(1).children(".small").remove();
			for(var i=6;i<smallList.length;i++){
				(function(i){
					img.setAttribute("src",smallList[i].children[0].getAttribute("src"));
					imgDiv.appendChild(img);
					document.querySelectorAll(".imgBox")[1].appendChild(imgDiv.cloneNode(true));
				})(i)
			}
		}
		
		$(".smMMoveBox>.small").remove();
		
		
		$(".small").click(function(){
			var smMIndex = $(this).index();
			$(this).css("border","1px solid #ac2528").siblings("div").css("border","1px solid #dedede");
			$(".shareTop img").eq(smMIndex).css("opacity","1").siblings().css("opacity","0");
		});
		
	},1000)
	


	//联系我们
	if(scrWid <= 380) {
		$(".con_topRed").css("top", "-381px");
	} else {
		$(".con_topRed").css("top", "-350px");
	}

	setTimeout(function() {
		//添加点击留言事件
		document.querySelector(".con_bottom").addEventListener("touchstart", function() {
			$(".con_moBox").show();
			setTimeout(function() {
				$("#moveBox").css("top", "17.5%");
			}, 1);
		});
		//关闭模态窗口
		document.querySelector("#del").addEventListener("touchstart", function() {
			$("#moveBox").css("top", "100%");
			setTimeout(function() {
				$(".con_moBox").hide();
				$("#moveBox").css("top", "-100%");
			}, 700);
		});
	}, 1000);






















	/**********************************************       组织微信下拉出现空白       *********************************************/	    
	 var overscroll = function (els) {
	        for (var i = 0; i < els.length; ++i) {
	            var el = els[i];
	            el.addEventListener('touchstart', function () {
	                var top = this.scrollTop
	                    , totalScroll = this.scrollHeight
	                    , currentScroll = top + this.offsetHeight;
	                //If we're at the top or the bottom of the containers
	                //scroll, push up or down one pixel.
	                //
	                //this prevents the scroll from "passing through" to
	                //the body.
	                if (top === 0) {
	                    this.scrollTop = 1;
	                } else if (currentScroll === totalScroll) {
	                    this.scrollTop = top - 1;
	                }
	            });
	            el.addEventListener('touchmove', function (evt) {
	                //if the content is actually scrollable, i.e. the content is long enough
	                //that scrolling can occur
	                if (this.offsetHeight < this.scrollHeight)
	                    evt._isScroller = true;
	            });
	        }
	    };
	    
	    //禁止body的滚动事件
	    document.body.addEventListener('touchmove', function (evt) {
	        //In this case, the default behavior is scrolling the body, which
	        //would result in an overflow.  Since we don't want that, we preventDefault.
	        if (!evt._isScroller) {
	            evt.preventDefault();
	        }
	    });
	    
	    //给class为.scroll的元素加上自定义的滚动事件
	    overscroll(document.querySelector('.scroll'));
/**********************************************       组织微信下拉出现空白       *********************************************/	    
