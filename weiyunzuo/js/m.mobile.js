//获取手机的宽
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
	
	
	//获取用户设备
	var user = window.navigator.userAgent.toLowerCase();
	console.log(user);
	var android = user.match(/android/i) == "android";
	var iphone = user.match(/iphone/i) == "iphone";
//	var windows = user.match(/iphone/i) == "windows";
	
	//定义banner的下标
	var index = 0;
	//定义触摸的坐标
	var y_start = 0;
	var y_end = 0;
	var y = 0;
	var x_start = 0;
	var x_end = 0;
	var x = 0;
	var one;//触摸屏幕的手指
	//当前页数
	var yFlag = 0;
	
	//判断设备(移动端)
	if(android || iphone){
		var about_vedio = document.querySelector("#num_1 video");
		//播放视频
		about_vedio.play();
		document.addEventListener("WeixinJSBridgeReady", function () {
			about_vedio = document.querySelector("#num_1 video");
            about_vedio.play(); 
        }, false);
		
		console.log("移动端");
//		alert("宽  "+scrWid+"\n  高     "+scrHei);
		
		/****************************************     首页    ************************************************/
		//定义banner计时器
		var bannerDate;
		//重写自动播放
		function start(){
			bannerDate = setInterval(function(){
				if(index < 2){
					index ++;	
				}else{
					index = 0;
				}
				switch(index){
					case 0:
						$(".num_box ul").css("transform","translateX(0)");
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
						showAnimate(index);
						break;
					case 1:
						$(".num_box ul").css("transform","translateX(-"+scrWid+"px)");
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
						showAnimate(index);
						break;
					case 2:
						$(".num_box ul").css("transform","translateX(-"+(scrWid*2)+"px)");
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
						showAnimate(index);
						break;
				}
			},5000);
		}
		
		//文字动画
		function showAnimate(index){
			setTimeout(function(){
				$(".banner ul li").eq(index).children("img").animate({left:"0"});	
			},100);
			setTimeout(function(){
				$(".banner ul li").eq(index).children("span").eq(0).animate({left:"0"});	
			},500);
			setTimeout(function(){
				$(".banner ul li").eq(index).children("span").eq(1).animate({left:"0"});	
			},1000);
			setTimeout(function(){
				$(".banner ul li").eq(index).children("span").eq(2).animate({left:"0"});	
			},1500);
			$(".m_logo").css("left","-100%");
			$(".banner ul li").eq(index).children().css("left","-100%");
		}
		//初始化
		showAnimate(0);
		
		
		//添加banner触摸事件
		var m_banner = document.querySelector(".banner"); 
		m_banner.addEventListener("touchstart",function(evt){
			one = evt.touches[0];
			x_start = one.pageX;
			//清除banner的计数器
			clearInterval(bannerDate);
		});
		//添加banner拖动事件
		m_banner.addEventListener("touchmove",function(evt){
			one = evt.touches[0];		
			x_end = one.pageX;
			x = x_end - x_start;
		});		
		//添加banner的触摸结束事件
		m_banner.addEventListener("touchend",function(evt){
			//下一张
			if(x != 0){
				if( x < -5){
					if(index == 2){
						$(".num_box ul").css("transform","translateX(0)");
						index = 0;
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
					}
					else{
						$(".num_box ul").css("transform","translateX(-"+(index+1)*scrWid+"px)");
						index ++;
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
					}
				}
				//上一张
				if( x > 5){
					if(index == 0){
						$(".num_box ul").css("transform","translateX(-"+(scrWid*2)+"px)");
						index = 2;
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
					}
					else{
						$(".num_box ul").css("transform","translateX(-"+(index-1)*scrWid+"px)");
						index --;
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
					}
				}
				//banner重置计时器
				bannerDate = setInterval(function(){
					if(index < 2){
						index ++;	
					}else{
						index = 0;
					}
					switch(index){
						case 0:
							$(".num_box ul").css("transform","translateX(0)");
							$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
							showAnimate(index);
							break;
						case 1:
							$(".num_box ul").css("transform","translateX(-"+scrWid+"px)");
							$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
							showAnimate(index);
							break;
						case 2:
							$(".num_box ul").css("transform","translateX(-"+(scrWid*2)+"px)");
							$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
							showAnimate(index);
							break;
					}
				},5000);
				showAnimate(index);
			}
			x = 0;
		});
		
		
		
		/****************************************     关于我们    ************************ ************************/
		var about_textBox = document.querySelector(".about_textBox");
		about_textBox.style.height = (scrHei-$("video").height())+"px";
	
		var abIndex = -1;
		var abDate;
		//关于我们动画
		function abAnimate(yFlag){
			if(yFlag == 1){
				abDate = setInterval(function(){
					abIndex ++;
					if(abIndex >=5){
						clearInterval(abDate);
						abIndex = -1;
					}
					else{
						$(".textBox").children().eq(abIndex).css("opacity","1");
					}
				},200);	
			}
			else{
				$(".ab_p").css("opacity","0");
				$(".ab_redFont").css("opacity","0");
				abIndex = -1;
			}
		}
		
		
		
		//关于我们动画
		function ab_animate(yFlag){
			if(yFlag == 1){
				if(scrWid < 340){
					$(".ab_img").animate({
						opacity:"1",
						top:"200px"	
					},1700);
				}else{
					$(".ab_img").animate({
						opacity:"1",
						top:"170px"	
					},1700);
				}
				setTimeout(function(){
					$(".ab_redFont").animate({opacity:"1"});	
				},500);
				setTimeout(function(){
					$(".ab_p").animate({opacity:"1"});	
				},1000);	
			}else{
				
			}
		}
		
		
		
		
		
		
		
		/********************************    服务项目              ******************************************/
		$(".siceMian").css("height","100%");
		var line1 = document.createElement("div");
		line1.className = "line1";
		line1.id = "line1";
		var line2 = line1.cloneNode(true);
		line2.id = "line2";
		var line3 = document.createElement("div");
		line3.id = "line3";
		line3.className = "line2";
		line1.style.top = "33.33%";
		line1.style.left = "0%";
		line2.style.top = "66.66%";
		line2.style.left = "0%";
		line3.style.top = "0";
		line3.style.left = "50%";
		$("#num_2").css("z-index","999");
		$("#num_2").append(line1);
		$("#num_2").append(line2);
		$("#num_2").append(line3);
		$(".siceMian menu").css("height","100%");
		$(".siceMian menu li").addClass("serverLi");
		$(".siceMian menu li article").css({
			"width":"100%",
			"margin-top": "25%"
		});
		$(".siceMian menu li article section").css("line-height","18px");
		$(".siceMian menu li article figure").css({
			"width":"50px",
			"height":"50px",
			"background-size":'100% 100%'
		});
		$(".siceMian menu li article aside").css({
			"font-size":"2.5em",
			"margin":"12px 0"
		});
		$(".siceMian menu li article p").css({
			"font-size":"0.8em",
			"padding-left":"5%",
			"padding-right":"5%"
		});
		
		
		
		var serIndex = -1;
		var serDate;
		//服务动画
		function serAnimate(yFlag){
			if(yFlag == 2){
				serDate = setInterval(function(){
					serIndex ++;
					if(serIndex >=9){
						clearInterval(serDate);
					}
					else{
						if( serIndex >=6){
							switch (serIndex){
								case 6:
									$("#line1").css("opacity","1");
									break;
								case 7:
									$("#line2").css("opacity","1");
									break;
								case 8:
									$("#line3").css("opacity","1");
									break;
							}
						}else{
							$(".serverLi").eq(serIndex).children("a").children("article").css("transform","scale(1)");							
						}
					}
				},200);	
			}
			else{
				$("#line1").css("opacity","0");
				$("#line2").css("opacity","0");
				$("#line3").css("opacity","0");
				$(".serverLi").children("article").css("transform","scale(0)");
				serIndex = -1;
			}
		}
		
		
		/********************************    案例              ******************************************/
		$("#num_3").css("background","#e8e5e4");
		$(".tBannerTopImg").css({
			"width":(0.5*scrWid)+"px"
		});
	
		$(".tBannerMidImg").css({
			"width" : (0.9*scrWid)+"px",
			"left":(0.05*scrWid)+"px"
		});

	
		
		//设置图片的位置
		setTimeout(function(){
			for(var i=0;i<$(".tBannerTopImg").length;i++){
				(function(i){
					if($(".tBannerTopImg").eq(i).height() >= 145){
						$(".tBannerTopImg").eq(i).css({
							"width":"auto",
							"height":$(".tBannerTopImg").eq(i).height()*0.6 +"px",
							'left':"35%"
						});
						}
				})(i)
			}
		},1000);
		$(".bannerRound").css("width",scrWid + "px");

		var serPosti = 0;
		var serBBImg1 = document.querySelector("#goLeft");
		var serBBImg2 = document.querySelector("#goRight");
		//上一个
		serBBImg2.addEventListener("touchend",function(){
			serPosti -= 80;
			$(".serBInBox").css("transform","translateX("+serPosti+"px)");
		});
		//下一个
		serBBImg1.addEventListener("touchend",function(){
			serPosti += 80;
			$(".serBInBox").css("transform","translateX("+serPosti+"px)");
			if(serPosti >= 0){
				setTimeout(function(){
					$(".serBInBox").css("transform","translateX(0)");
					serPosti = 0;
				},500);
			}
		});
		
		//获得所有的小盒子
		var inBoxList = document.querySelectorAll(".inBox");
		//设置inBox点击事件
		for(var i=0;i<inBoxList.length;i++){
			(function(i){
				inBoxList[i].addEventListener("touchend",function(){
					$(".inBox").eq(i).children("p").addClass("activeSerFont").parent().siblings().children("p").removeClass("activeSerFont");
					turnGray();
					//改变点击图片的颜色
					if(i>=9){
						$(".inBox").eq(i).children("img").attr("src","images/mobile/icon/SerColorIcon"+(i+1)+".png");
					}else{
						$(".inBox").eq(i).children("img").attr("src","images/mobile/icon/SerColorIcon0"+(i+1)+".png");	
					}
					//icon的动画
					setTimeout(function(){
						$(".inBox").eq(i).children("img").css("top","-20px");
					},10);
					setTimeout(function(){
						$(".inBox").eq(i).children("img").css("top","10px");
					},210);
					setTimeout(function(){
						$(".inBox").eq(i).children("img").css("top","0px");
					},410);
				})
			})(i)
		}
		
		//设置所有图片变为灰色
		function turnGray(){
			for(var i=0;i<$(".inBox").length;i++){
				(function(i){
					if(i>=9){
						$(".inBox").eq(i).children("img").attr("src","images/mobile/icon/SerIcon"+(i+1)+".png");						
					}else{
						$(".inBox").eq(i).children("img").attr("src","images/mobile/icon/SerIcon0"+(i+1)+".png");	
					}
				})(i)
			}
		}
		
			//当前banner下标
		var bannerIndex = 0;
		//当前banner的index
		var currentBannerIndex = 0;
		//定义banner的坐标
		var bannerXStart = 0;
		var bannerXEnd = 0;
		var bannerXFinal = 0;
		var bannerOne;
		//获取所有的topBox
		var topBoxList = document.querySelectorAll(".topBox");
		var serTopBox = document.querySelector(".serTopBox");
		
		//点击不同的图标切换不同的banner
		var inBoxList = document.querySelectorAll(".inBox");
		var topBoxList = document.querySelectorAll(".topBox");
		for(var i=0;i<inBoxList.length;i++){
			(function(i){
				inBoxList[i].addEventListener("touchend",function(){
					//先隐藏所有的topBox
					for(var j=0;j<topBoxList.length;j++){
						(function(j){
							topBoxList[j].style.display = "none";
						})(j)
					}
					bannerIndex = i;
					//显示点击对应的topBox
					topBoxList[i].style.display = "block";
					setTimeout(function(){
						for(var k=0;k<$(".tBannerTopImg").length;k++){
							(function(k){
								if(scrWid <=360){
									if($(".tBannerTopImg").eq(k).height() >= 100){
										$(".tBannerTopImg").eq(k).css({
											"width":"auto",
											"height":$(".tBannerTopImg").eq(k).height()*0.5 +"px"	
										});
									}
								}else{
									if($(".tBannerTopImg").eq(k).height() >= 130){
										$(".tBannerTopImg").eq(k).css({
											"width":"auto",
											"height":$(".tBannerTopImg").eq(k).height()*0.7 +"px"	
										});
									}
									setTimeout(function(){
										if($(".tBannerTopImg").eq(k).height() >= 130){
											$(".tBannerTopImg").eq(k).css({
												"width":"auto",
												"height":$(".tBannerTopImg").eq(k).height()*0.7 +"px"	
											});
										}
									},1);
								}
							})(k)
						}	
					},10)
					setTimeout(function(){
						caseImgAnimate(bannerIndex,0);	
					},20);
					//设置显示的bannerBox图片显示第一张
					currentBannerIndex = 0;
//					$(".topBox").eq(bannerIndex).css("transform","translateX(0%)");
					for(var p=0;p<$(".topBox").length;p++){
						(function(p){
							$(".topBox").eq(p).children(".tBannerBox").eq(0).css("left","0");
							$(".topBox").eq(p).children(".tBannerBox").eq(1).css("left","100%");
						})(p)
					}
					$(".topBox").eq(bannerIndex).children(".bannerRound").css("transform","translateX(0%)");
					$(".topBox").eq(bannerIndex).children(".bannerRound").children("a").removeClass("roundActive");
					$(".topBox").eq(bannerIndex).children(".bannerRound").children("a").eq(currentBannerIndex).addClass("roundActive");
				});
			})(i)
		}
		
		//
		$(".serMoveBox").each(function(index,item){
			var childrenNum = $(this).children(".tBannerBox").length;
			$(this).width(childrenNum*100+"%");
		});
			
		$(".tBannerBox").width(scrWid);
		
		/**
		 * 案例图片动画
		 * bannerIndex           :    选择的banner下标
		 * currentBannerIndex    :    当前图片在bannerBox的下标    
		 * 
		 */
		function caseImgAnimate(bannerIndex,currentBannerIndex){
			$('.topBox').eq(bannerIndex).children(".tBannerBox").eq(currentBannerIndex).children("img").eq(1).css("transform","scale(1.1)");
			setTimeout(function(){
				$('.topBox').eq(bannerIndex).children(".tBannerBox").eq(currentBannerIndex).children("img").eq(0).css("transform","scale(0.2)");
				$('.topBox').eq(bannerIndex).children(".tBannerBox").eq(currentBannerIndex).children("img").eq(1).css("transform","scale(0.9)");
			},300);
			setTimeout(function(){
				$('.topBox').eq(bannerIndex).children(".tBannerBox").eq(currentBannerIndex).children("img").eq(0).css("transform","scale(1)");
				$('.topBox').eq(bannerIndex).children(".tBannerBox").eq(currentBannerIndex).children("img").eq(1).css("transform","scale(1)");
			},600);
			
		}
		
		
		
		
		
		
		/********************************    经典案例              ******************************************/
		$("#num_4").css({
			"z-index":"999"
		});
		$(".MunCase article").css({
			"opacity": "0",
			"transition": "0.5s"
		});
		var caseFlag = -1;
		var caseDate;
		//经典案例动画
		function caseAnimate(yFlag){
			if(yFlag == 4){
				caseDate = setInterval(function(){
					caseFlag ++;
					if(caseFlag >=16){
						clearInterval(caseDate);
					}
					else{
						$(".caseDiv").eq(caseFlag).css("opacity","1");	
					}
				},100);	
			}
			else{
				$(".caseDiv").css("opacity","0");
				caseFlag = -1;
			}
		}
		
		
		/********************************    联系我们            ******************************************/
		$("#num_5").css({
			"background":"#edeae9",
			"position":"relative"
		});
		
		//当节点加载完毕时设置节点的触摸事件								
		setTimeout(function(){
			//添加点击留言事件
			document.querySelector(".con_bottom").addEventListener("touchstart",function(){
				$(".con_moBox").show();
				setTimeout(function(){
					$("#moveBox").css("top","17.5%");	
				},1);
			});
			//关闭模态窗口
			document.querySelector("#del").addEventListener("touchstart",function(){
				$("#moveBox").css("top","100%");
				setTimeout(function(){
					$(".con_moBox").hide();
					$("#moveBox").css("top","-100%");
				},700);
			});	
		},1000);
		
		var conIndex = -1;
		var conDate;
		//联系我们动画
		function conAnimate(yFlag){
			if(yFlag == 5){
				conDate = setInterval(function(){
					conIndex ++;
					if(conIndex >=7){
						clearInterval(conDate);
						conIndex = -1;
					}
					else{
						switch (conIndex){
							case 0:
								if(scrWid <= 370){
									$(".con_topRed").css("top","-557px");										
								}else{
									$(".con_topRed").css("top","-350px");	
								}
								break;
							case 1:
								$(".con_code").css("top","13%");
								$(".con_font1").css("top","41%");
								break;
							case 2:
								$(".con_logo").css("left","36%");
								break;
						 	case 3:
						 		$(".con_font2").css("left","0");
								break;
							case 4:
								$(".con_font3").css("left","0");
								break;
							case 5:
								$(".con_font4").css("left","0");	
								break;
							case 6:
								$(".con_bottom").css("left","35%");
								break;
						}
					}
				},300);	
			}
			else{
				if(scrWid <= 370 ){
					$(".con_topRed").css("top","-800px");	
				}else{
					$(".con_topRed").css("top","-500px");	
				}
				$(".con_code").css("top","-50%");
				$(".con_font1").css("top","-50%");
				$(".con_logo").css("left","-50%");
				$(".con_font2").css("left","-100%");
				$(".con_font3").css("left","-100%");
				$(".con_font4").css("left","-100%");
				$(".con_bottom").css("left","-100%");
				conIndex = -1;
			}
		}
		
		
		//联系我们动画
		function con_Animate(yFlag){
			if(yFlag == 5){
				if(scrWid <= 370){
					$(".con_topRed").css("top","-557px");										
				}else{
					$(".con_topRed").css("top","-350px");	
				}
				setTimeout(function(){
					$(".con_code").css("top","13%");
					if(scrWid <=370){
						$(".con_font1").css("top","41%");						
					}else{
						$(".con_font1").css("top","37%");	
					}
				},500);
				setTimeout(function(){
					$(".con_logo").css("left","36%");
				},1000);
				setTimeout(function(){
					$(".con_font2").css("left","0");
				},1500);
				setTimeout(function(){
					$(".con_font3").css("left","0");
				},2000);
				setTimeout(function(){
					$(".con_font4").css("left","0");
				},2500);			
				setTimeout(function(){
					$(".con_bottom").css("left","35%");
				},3000);
			}
			else{
				if(scrWid <= 370 ){
					$(".con_topRed").css("top","-800px");	
				}else{
					$(".con_topRed").css("top","-500px");	
				}
				$(".con_code").css("top","-50%");
				$(".con_font1").css("top","-50%");
				$(".con_logo").css("left","-50%");
				$(".con_font2").css("left","-100%");
				$(".con_font3").css("left","-100%");
				$(".con_font4").css("left","-100%");
				$(".con_bottom").css("left","-100%");
			}
		}
		
		
		
		
		
		/********************************    body            ******************************************/
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
	    overscroll(document.querySelectorAll('.scroll'));
			
			
		
		var numBox = document.querySelector(".num_box");
		//添加numBox的触摸事件
		numBox.addEventListener("touchstart",function(evt){
			y = 0;
			y_start = 0;
			y_end = 0;
			one = evt.touches[0];
			y_start = one.pageY;
		});
		numBox.addEventListener("touchmove",function(evt){
			one = evt.touches[0];
			y_end = one.pageY;
		});
		numBox.addEventListener("touchend",function(evt){
			//判断是否是点了一下
			if(y_end != 0){
				y = y_end - y_start;
				//向上
				if(y > 80){
					if(yFlag != 0){
						yFlag --;
						$(".num_box").css("transform","translateY(-"+(scrHei*yFlag)+"px)");
						exeAniamte(yFlag);
					}
				}
				//向下
				if(y < -80){
					if(yFlag != 5){
						yFlag ++;
						$(".num_box").css("transform","translateY(-"+(scrHei*yFlag)+"px)");
						exeAniamte(yFlag);
					}
				}
				console.log("当前页数   >  "+yFlag);
				y = 0;
				y_start = 0;
				y_end = 0;					
			}
		});		
		
		
		
		//执行动画
		function exeAniamte(yFlag){
			//初始化动画sssss
			goInit();
			switch (yFlag){
					case 0:
						break;
					case 1:
						abAnimate(yFlag);
						break;
					case 2:
						serAnimate(yFlag);
						break;
					case 4:
						caseAnimate(yFlag);
						break;
					case 5:
						conAnimate(yFlag);
						break;
				}
		}
		
		//动画初始化
		function goInit(){
			//首页
//				$(".m_logo").css("left","-100%");
//				$(".banner ul li").children().css("left","-100%");
			//关于我们
				$(".textBox").children().css("opacity","0");
				abIndex = -1;
			//服务项目
//				$(".serverLi").children("article").css("transform","scale(0)");
				$(".serverLi").children("a").children("article").css("transform","scale(0)");
				serIndex = -1;
			//经典案例
				$("#line1").css("opacity","0");
				$("#line2").css("opacity","0");
				$("#line3").css("opacity","0");
				$(".caseDiv").css("opacity","0");
				caseFlag = -1;
			//联系我们
				if(scrWid <= 370 ){
					$(".con_topRed").css("top","-800px");	
				}else{
					$(".con_topRed").css("top","-500px");	
				}
				$(".con_code").css("top","-50%");
				$(".con_font1").css("top","-50%");
				$(".con_logo").css("left","-50%");
				$(".con_font2").css("left","-100%");
				$(".con_font3").css("left","-100%");
				$(".con_font4").css("left","-100%");
				$(".con_bottom").css("left","-100%");
				conIndex = -1;
		}
		
		
		
		
		/*************************                   适配小手机                         **********************************/
		console.log("手机宽度  "+screen.width);
		console.log("手机高度   "+screen.height);
		//适配小手机
		if(screen.width <= 370 ){
			/*************************    首页    **********************************/
			
			$(".m_logo").css("width","25%");
			$(".m_grayFont").css({
				"font-size":"0.95em"
			});
			$(".inBoxP").css("font-size","0.9em");
			$(".m_redFont").css("font-size","1.3em");
			$(".m_graySFont").eq(0).text("专注定制化服务、微信、网站、APP、代运营");
			$(".m_graySFont").eq(2).text("专注定制化服务、微信、网站、APP、代运营");
			/*************************    关于我们    **********************************/
			$(".ab_img").css({
				"width":"30%",
				"margin-bottom":"6%"
			});
			$(".ab_p").css({
				"margin-top":"4%"
			});
			$(".ab_next").css("bottom","85px");
			$(".about_textBox").css("transform","translateY(-17px)");
			$(".textBox").css("transform","translateY(-)");
			/*************************    关于我们    **********************************/
			$(".textBox span").css({
				"font-size":"0.5em",
				"line-height":"25px"
			});
			$(".textBox p").css("font-size","0.5em");
			
			
			/*************************    服务项目    **********************************/
			$(".serverLi article").css("margin-top","14%");
			$(".serverLi article aside").css("font-size","2em");
			
			$(".serverLi article p").css({
				"font-size":"0.5em",
				"padding-left":"4%",
				"padding-right":"4%"
			});
			/*************************    案例    **********************************/
			$(".inBoxImg").css("width","75%");
			$(".inBoxImg").css("margin-top","28%");
			setTimeout(function(){
				for(var i=0;i<$(".tBannerTopImg").length;i++){
					(function(i){
						if($(".tBannerTopImg").eq(i).height() >= 100){
							$(".tBannerTopImg").eq(i).css({
								"width":"auto",
								"height":$(".tBannerTopImg").eq(i).height()*0.6 +"px",
								'left':"35%"	
							});
							}
					})(i)
				}	
			},1000)
			
			/*************************    联系我们    **********************************/
			$(".con_font1").css("top","44%");
			$(".con_bottom").css({
				"height":"30px",
				"line-height":"30px"
			});
			$(".con_logo").css("width","94px");
			$(".con_bottom img").css("width","12px");
			$(".con_topRed").css({
				"top":"-557px",
				"left":"0px",
				"width":'500px',
				"height":"800px"
			});
			$(".con_font2").css("top","61%");
			$(".con_font3").css("top","71%");
			$(".con_font4").css("top","75%");
			$(".inBoxP").css("font-size","0.8em");
			$(".con_font1").css("font-size","0.5em");
			$(".con_font2").css("font-size","0.5em");
			$(".con_font2 b").css("font-size","3em");
			$(".con_font3").css("font-size","0.5em");
			$(".con_font4").css("font-size","0.5em");
			
			$(".con_moBox>div>span").css("height","100px");
			$(".con_moBox>div>span img").css({
				"height":"70px",
				"margin":"15px 15px 0 0"
			});
			$(".con_moBox>div>p:nth-of-type(1)").css("font-size","2.4em");
			$(".con_moBox>div>p:nth-of-type(2)").css("font-size","2.8em");
			$(".con_moBox form div").css("margin-top","30px");
			
			$("#moveBox>span").css("height","40px");
			$("#del").css({
				"height":"20px",
				"margin":"10px 10px 0 0"
			});
			$("#moveBox p").css("line-height","20px")
			$("#moveBox p:nth-of-type(1)").css("font-size","0.8em");
			$("#moveBox p:nth-of-type(2)").css("font-size","0.9em");
			$("#moveBox form div").css({
				"height":"40px",
				"margin-top":"0"
			});
			$("#moveBox form img").css({
				"width":"25px"
			});
			$("#moveBox form input").css({
				"line-height":"39px"
			});
			$("#moveBox form div:nth-of-type(3)").css("height","80px");
			$("#moveBox form textarea").css("height","79px");
			$(".moBDiv>div").css({
				"top":"20px",
				"line-height":"40px"
			});
			$(".moBDiv>div").css("top","20px");
		}
		
		
		
		
		
		if(scrWid ==320 && scrHei >= 560){
			$(".moBDiv").css("height","80px");
		}
		
		
		//iphone4
		if(scrHei <= 500){
			$(".serverLi article figure").css({
				"width":"40px",
				"height":"40px"
			});
			//首页
				$(".m_logo").css("margin-top","10%");
				$("#banner li").eq(0).css({
					"background":"url(images/mobile/m_banner0.png) bottom no-repeat",
					"background-size":"100%"
				});
				$("#banner li").eq(1).css({
					"background":"url(images/mobile/m_banner1.png) bottom no-repeat",
					"background-size":"100%"
				});
				$("#banner li").eq(2).css({
					"background":"url(images/mobile/m_banner2.png) bottom no-repeat",
					"background-size":"100%"
				});
			//关于我们
				$(".ab_redFont").css("font-size","14px");
				$(".ab_p").css("font-size","10px");
				$(".about_textBox").css("transform","translateY(0px)")
			//服务项目
				$(".serviceArt section p").css("font-size","11px");
				
			$(".ab_p").text("微运作是率属于上海追浪网络科技有限公司基于移动及互联网服务定制的开发服务商；微运作是以微营销为主导的广告公司。");
			
			$(".con_logo").css({
				"font-size":"0.8em",
				"width":"80px"
			});
			$(".about_textBox").css("transform","translateY(-17px)");
			
//			$(".tBannerTopImg").css({
//				"width":"24%",
//				"left":"38%"
//			});
//			$(".tBannerMidImg").css({
//				"width":"85%",
//				"left":"7.5%"
//			});
			$(".bannerRound").css("bottom","5px");
			$(".moBDiv div").css({
				"height":"30px",
				"top":"5px",
				"line-height":"30px"
			});
			
			$(".moBDiv").css("height","40px");			
			$(".caseOutDiv").css("margin-top","13%");
		}
		
		
		
		//适配适配常用手机
		if(( scrWid >= 340 && scrWid <= 360) && ( scrHei <= 580 && scrHei >= 510 )){
			$(".inBoxP ").css("font-size","0.7em");
			$(".caseOutDiv").css('margin-top',"14%");
			$(".caseDiv").css({
				"width":"60px",
				"height":"75px"
			});
			$(".moBDiv").css("height","80px");
			$(".caseDiv span:nth-of-type(1)").css({
				"border-top": "38px solid transparent",
				"border-bottom": "38px solid transparent",
				"border-right": "18px solid #ffffff",
				"left": "-18px"
			});
			$(".caseDiv span:nth-of-type(2)").css({
				"border-top": "38px solid transparent",
				"border-bottom": "38px solid transparent",
				"border-left": "18px solid #ffffff",
				"right": "-18px"
			});
			
			$(".caseDiv:nth-of-type(2),.caseDiv:nth-of-type(5),.caseDiv:nth-of-type(8),.caseDiv:nth-of-type(11),.caseDiv:nth-of-type(14)").css({
				"margin-top":"-36px",
				"margin-left":"-82px"
			});
			$(".caseDiv:nth-of-type(3),.caseDiv:nth-of-type(6),.caseDiv:nth-of-type(9),.caseDiv:nth-of-type(12),.caseDiv:nth-of-type(15)").css({
				"margin-top":"-75px",
				"margin-left":"82px"
			});
			$(".caseDiv:nth-of-type(4),.caseDiv:nth-of-type(7),.caseDiv:nth-of-type(10),.caseDiv:nth-of-type(13),.caseDiv:nth-of-type(16)").css({
				"margin-top":"-35px"
			});
			
			
			//首页
				$("#banner li").eq(0).css({
					"background":"url(images/mobile/m_banner0.png) bottom no-repeat",
					"background-size":"100%"
				});
				$("#banner li").eq(1).css({
					"background":"url(images/mobile/m_banner1.png) bottom no-repeat",
					"background-size":"100%"
				});
				$("#banner li").eq(2).css({
					"background":"url(images/mobile/m_banner2.png) bottom no-repeat",
					"background-size":"100%"
				});
			//关于我们
				$(".ab_img").css("margin-top","18%");
				$(".ab_redFont").css("font-size","14px");
				$(".ab_p").css("font-size","11px");
				$(".about_textBox").css("transform","translateY(0px)");
				$(".textBox").css("transform","translateY(-8%)");
			//服务项目
				$(".serviceArt section p").css("font-size","11px");
			//案例

			
			
			//联系我们
				$(".moBDiv").css("height","80px");
				$(".con_font1").css("font-size","13px");
				$(".con_font2").css("font-size","13px");
				$(".con_font2 b").css("font-size","26px");
				$(".con_font3").css("font-size","13px");
				$(".con_font4").css("font-size","13px");
				$(".con_bottom").css("font-size","13px");
				$(".moBDiv img").css({
					"width":"22px",
					"height":"auto"
				})
			
			
		}
		
		
		if(( scrWid >= 340 && scrWid <= 360) && ( scrHei < 530 && scrHei >= 500 )){
			$(".caseOutDiv").css("margin-top","8%");
			$(".m_logo").css("margin-top","14%");
		}
		
		
		//适配大屏手机      经典案例   的大小
		if(scrWid >= 370  || scrHei >= 580){
			$(".caseDiv").css({
				"width":"70px",
				"height":"86px"
			});
			$(".caseImg").css("transform","translateY(5px)");
			$(".caseOutDiv").css("margin-top","18%");
			$(".caseDiv span:nth-of-type(1)").css({
				"border-top": "43px solid transparent",
				"border-bottom": "44px solid transparent",
				"border-right": "21px solid #ffffff",
				"left": "-21px"
			});
			$(".caseDiv span:nth-of-type(2)").css({
				"border-top": "43px solid transparent",
				"border-bottom": "44px solid transparent",
				"border-left": "21px solid #ffffff",
				"right": "-21px"
			});
			
			$(".caseDiv:nth-of-type(2),.caseDiv:nth-of-type(5),.caseDiv:nth-of-type(8),.caseDiv:nth-of-type(11),.caseDiv:nth-of-type(14)").css({
				"margin-top":"-41px",
				"margin-left":"-95px"
			});
			$(".caseDiv:nth-of-type(3),.caseDiv:nth-of-type(6),.caseDiv:nth-of-type(9),.caseDiv:nth-of-type(12),.caseDiv:nth-of-type(15)").css({
				"margin-top":"-85px",
				"margin-left":"95px"
			});
			$(".caseDiv:nth-of-type(4),.caseDiv:nth-of-type(7),.caseDiv:nth-of-type(10),.caseDiv:nth-of-type(13),.caseDiv:nth-of-type(16)").css({
				"margin-top":"-41px"
			});
			
			$(".textBox").css("transform","translateY(-8%)");
			
			
			
			//首页
				$(".m_logo").css("margin-top","15%");
				$(".m_grayFont").css("line-height","45px");
				$(".m_redFont").css("line-height","45px");
				$(".m_graySFont").css("line-height","45px");
				$("#banner li").eq(0).css({
					"background":"url(images/mobile/m_banner0.png) bottom no-repeat",
					"background-size":"100%"
				});
				$("#banner li").eq(1).css({
					"background":"url(images/mobile/m_banner1.png) bottom no-repeat",
					"background-size":"100%"
				});
				$("#banner li").eq(2).css({
					"background":"url(images/mobile/m_banner2.png) bottom no-repeat",
					"background-size":"100%"
				});
			//关于我们
				$(".ab_img").css({
					"margin-top":"13%",
					"margin-bottom":"6%"
				});
				$(".ab_redFont").css("font-size","14px");
				$(".ab_p").css("font-size","11px");
				$(".about_textBox").css("transform","translateY(0px)");
				$(".textBox").css("transform","translateY(-8%)");
				$(".ab_redFont").css("font-size","15px");
				$(".ab_p").css({
					"margin-top":"8%",
					"font-size":"15px"
				});
			//服务项目
				$(".serviceArt section p").css("font-size","11px");
			//案例
				setTimeout(function(){
					for(var i=0;i<$(".tBannerTopImg").length;i++){
						(function(i){
							if($(".tBannerTopImg").eq(i).height() >= 100){
								$(".tBannerTopImg").eq(i).css({
									"width":"auto",
									"height":$(".tBannerTopImg").eq(i).height()*0.8 +"px"	
								});
								}
						})(i)
					}	
				},1000)
			//经典案例
				$(".caseOutDiv").css("margin-top","12%");
				
			
			//联系我们
				$(".moBDiv").css("height","80px");
				$(".con_font1").css("font-size","16px");
				$(".con_logo").css("top","54%");
				$(".con_font2").css("font-size","16px");
				$(".con_font2 b").css({
					"font-size":"29px",
					"color":"#b02537 !important"
				});
				$(".con_font3").css("font-size","16px");
				$(".con_font4").css("font-size","16px");
				$(".con_bottom").css("font-size","16px");
				$(".moBDiv img").css({
					"width":"22px",
					"height":"auto"
				});
			
			
			
			//414     672
		}
		
		
		
		//适配微信视频播放
		if (typeof WeixinJSBridge == "undefined") {
	        var i = 0;
	        if (document.addEventListener) {
	            document.addEventListener("WeixinJSBridgeReady", function func() {
	                if (typeof isAddPlayerOk !== 'undefined' && isAddPlayerOk === true) {
	                    i = null;
	                    player.play();
	                } else {
	                    if (i++ < 10) {
	                        setTimeout(func, 100);
	                    }
	                }
	            }, false);
	        }
	    } 
		
	}else{
		console.log("PC端");
	}

