	//判断手机横竖屏状态： 
	function hengshuping(){ 
	  if(window.orientation==180||window.orientation==0){
	  	$(".num_box scroll").css("display","block");
	  	$(".cc").css("display","none");
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
	//获取手机的宽
	var scrWid = document.body.clientWidth;
	var scrHei = document.body.clientHeight;
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
		//返回
		
		
		
		//隐藏PC端的导航条和点
		$(".indexHeader").hide();
		$(".fixed_r").hide();
		//设置body的高度和手机高度相等
		
		//改变banner
		$(".banner ul li div").remove();
		$(".banner ul").css({
			"width":"300%",
			"transform":"translateX(0px)",
			"transition":"0.5s"
		});
		$(".banner ul li").css({
			"float":"left",
			"position":"relative",
			'overflow': 'hidden',
		});
		$(".banner ul li:nth-of-type(1)").css({
			"background":"url(images/mobile/m_banner0.png) no-repeat",
			"background-size": "100% 100%"
		});
		$(".banner ul li:nth-of-type(2)").css({
			"background":"url(images/mobile/m_banner1.png) no-repeat",
			"background-size": "100% 100%"
		});
		$(".banner ul li:nth-of-type(3)").css({
			"background":"url(images/mobile/m_banner2.png) no-repeat",
			"background-size": "100% 100%"
		});
		
		/****************************************     首页    ************************************************/
		//创建图标节点
		var m_logo = document.createElement("img");
		m_logo.className = "m_logo";
		m_logo.src = "images/img/logoImg.png";
		var m_logo1 = m_logo.cloneNode(true);
		var m_logo2 = m_logo.cloneNode(true);
		
		//创建灰色大号文字节点
		var m_grayFont = document.createElement("span");
		m_grayFont.className = "m_grayFont";
		var m_grayFont1 = m_grayFont.cloneNode(true);
		var m_grayFont2 = m_grayFont.cloneNode(true);
		m_grayFont.innerHTML = "移动及互联网服务";
		m_grayFont1.innerHTML = "以微营销";
		m_grayFont2.innerHTML = "一站式互联网服务";
		
		
		
		//创建红色大号节点
		var m_redFont = document.createElement("span");
		m_redFont.className = "m_redFont";
		var m_redFont1 = m_redFont.cloneNode(true);
		var m_redFont2 = m_redFont.cloneNode(true);
		m_redFont.innerHTML = "定制开发服务商";
		m_redFont1.innerHTML = "为主导的广告公司";
		m_redFont2.innerHTML = "解决方案提供商";
		
		
		//创建小号灰色节点
		var m_graySFont = document.createElement("span");
		m_graySFont.className = "m_graySFont";
		var m_graySFont1 = m_graySFont.cloneNode(true);
		var m_graySFont2 = m_graySFont.cloneNode(true);
		m_graySFont.innerHTML = "专注定制化服务、微信、网站、APP、H5、营销、代运营";
		m_graySFont1.innerHTML = "微营销首选品牌，专业移动营销服务商";
		m_graySFont2.innerHTML = "专注定制化服务、微信、网站、APP、H5、营销、代运营";
		
		//添加元素到banner中
		$(".banner ul li:nth-of-type(1)").append(m_logo);
		$(".banner ul li:nth-of-type(2)").append(m_logo1);
		$(".banner ul li:nth-of-type(3)").append(m_logo2);
		$(".banner ul li:nth-of-type(1)").append(m_grayFont);
		$(".banner ul li:nth-of-type(2)").append(m_grayFont1);
		$(".banner ul li:nth-of-type(3)").append(m_grayFont2);
		$(".banner ul li:nth-of-type(1)").append(m_redFont);
		$(".banner ul li:nth-of-type(2)").append(m_redFont1);
		$(".banner ul li:nth-of-type(3)").append(m_redFont2);
		$(".banner ul li:nth-of-type(1)").append(m_graySFont);
		$(".banner ul li:nth-of-type(2)").append(m_graySFont1);
		$(".banner ul li:nth-of-type(3)").append(m_graySFont2);
		
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
			$(".banner ul li").eq(index).children("img").animate({left:"0"});
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
		//删除关于我们的节点
		$("#num_1 section").remove();
//		//模态窗口
//		var play_box = document.createElement("div");
//		play_box.id = "play_box";
//		//设置模态窗口的高度
//		play_box.style.height = $("#num_1 video").height()+61+"px";
//		//播放三角形
//		var play = document.createElement("span");
//		play.id = "play";
//		//播放环形框
//		var about_play = document.createElement("div");
//		about_play.id = "about_play";
//		//设置播放按钮在视屏的中间
//		about_play.style.top = ($("#num_1 video").height()/2-65)+"px";
//		about_play.style.left = (scrWid/2-65)+"px";
//		
//		
//		//添加视频的控件
//		$("#num_1").append(play_box);
//		$("#play_box").append(about_play);
//		$("#about_play").append(play);
		
		//底层div（红色）
		var about_textBox = document.createElement("div");
		about_textBox.style.height = (scrHei-$("video").height())+"px";
		about_textBox.className = "about_textBox";
		//黑色div
		var textBox = document.createElement("div");
		textBox.className = "textBox";
		
		var ab_logo = document.createElement("img");
		ab_logo.src = "images/img/logoImg01.png";
		ab_logo.className = "ab_img";
		var ab_p = document.createElement("p");
		ab_p.innerHTML = "微运作是属于上海追浪网络科技有限公司基于移动及互联网服务定制的开发服务商；微运作是以微营销为主导的广告公司，微营销首选品牌，专业移动营销服务商。微运作可以为品牌提供一站式互联网服务解决方案。";
		ab_p.className = "ab_p";
		var ab_next = document.createElement("img");
		ab_next.src = "images/mobile/ab_next.png";
		ab_next.className = "ab_next";
		
		
		var ab_font1 = m_redFont.cloneNode(true);
		var ab_font2 = m_redFont.cloneNode(true);
		var ab_font3 = m_redFont.cloneNode(true);
		ab_font1.className = "ab_redFont";
		ab_font2.className = "ab_redFont";
		ab_font3.className = "ab_redFont";
		ab_font1.innerHTML = "我们洞察商业所需";
		ab_font2.innerHTML = "创造富有影响力的微营销体验";
		ab_font3.innerHTML = "助力品牌价值提升";
		
		
		textBox.appendChild(ab_logo);
		textBox.appendChild(ab_font1);
		textBox.appendChild(ab_font2);
		textBox.appendChild(ab_font3);
		textBox.appendChild(ab_p);
//		textBox.appendChild(ab_next);
		about_textBox.appendChild(textBox);
		$("#num_1").append(about_textBox);
		
		
		$("#play_box").hide();
//		about_play.addEventListener("touchstart",function(evt){			
//			about_vedio.play();
//			$("#play_box").hide();
//		});
//		//暂停
//		about_vedio.addEventListener("touchstart",function(){
//			about_vedio.pause();
//			$("#play_box").show();
//		});
		
		
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
		$("#num_3>div").remove();
		$("#num_3").css("background","#e8e5e4");
		var serTopBox = document.createElement("div");
		var serBottomBox = document.createElement("div");
		//创建两个大盒子   分为上下
		serTopBox.className = "serTopBox";
		serBottomBox.className = "serBottomBox";
		$("#num_3").append(serTopBox);
		$("#num_3").append(serBottomBox);
		
		
		
		
		//创建下面盒子的箭头
		var serBBImg1 = document.createElement("img");
		serBBImg1.id = "goLeft";
		var serBBImg2 = document.createElement("img");
		serBBImg2.id = "goRight";
		//创建外层盒子		
		var serBoutBox = document.createElement("div");
		serBoutBox.className = "serBoutBox";
		//创建内层盒子
		var serBInBox = document.createElement("div");
		serBInBox.className = "serBInBox";
		//创建内层盒子的元素
		var inBox = document.createElement("div");
		inBox.className = "inBox";
		var inBoxImg = document.createElement("img");
		inBoxImg.className = "inBoxImg";
		var inBoxP = document.createElement("p");
		inBoxP.className = 'inBoxP';
		
		//添加元素(serBottomBox)
		$(".serBottomBox").append(serBBImg1);
		$(".serBottomBox").append(serBBImg2);
		$(".serBottomBox>img:nth-of-type(1)").attr("src","images/mobile/ser_left.png");
		$(".serBottomBox>img:nth-of-type(2)").attr("src","images/mobile/ser_right.png");
		$(".serBottomBox").append(serBoutBox);
		$(".serBoutBox").append(serBInBox);
		$(".serBInBox").append(inBox);
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".serBInBox").append(inBox.cloneNode(true));
		$(".inBox").append(inBoxImg);
		$(".inBox").append(inBoxP);
		//全为灰色的图片
		turnGray();
		$(".inBox").eq(0).children("img").attr("src","images/mobile/icon/SerColorIcon01.png");
		$(".inBox").eq(0).children("p").addClass("activeSerFont");
		$(".inBox").eq(0).children("p").text("500强");
		$(".inBox").eq(1).children("p").text("国企");
		$(".inBox").eq(2).children("p").text("电商");
		$(".inBox").eq(3).children("p").text("O2O");
		$(".inBox").eq(4).children("p").text("地产");
		$(".inBox").eq(5).children("p").text("汽车");
		$(".inBox").eq(6).children("p").text("教育");
		$(".inBox").eq(7).children("p").text("餐饮");
		$(".inBox").eq(8).children("p").text("儿童");
		$(".inBox").eq(9).children("p").text("化妆品");
		$(".inBox").eq(10).children("p").text("保健品");
		$(".inBox").eq(11).children("p").text("医疗");
		$(".inBox").eq(12).children("p").text("IT");
		
		//创建装banner的大盒子
		var topBox = document.createElement("div");
		topBox.className = "topBox";
		//创建单个的banner（可滑动）
		var tBannerBox = document.createElement("div");
		tBannerBox.className = "tBannerBox";
		tBannerBox.style.width = scrWid+"px";
		//创建banner顶上的图片
		var tBannerTopImg = document.createElement("img");
		tBannerTopImg.className = "tBannerTopImg";
		tBannerTopImg.setAttribute("src","images/img/caseIcon01.png");
		tBannerTopImg.style.width = 0.5*scrWid+"px";
		tBannerTopImg.style.left = 0.26*scrWid+"px";
		//创建banner中间的图品
		var tBannerMidImg = document.createElement("img");
		tBannerMidImg.className = "tBannerMidImg";
		tBannerMidImg.setAttribute("src","images/img/SImg01.png");
		
		tBannerMidImg.style.width = 0.9*scrWid+"px";
		tBannerMidImg.style.left = 0.05*scrWid+"px";
	
		
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
		//创建banner的小圆点
		var bannerRound = document.createElement("div");		
		bannerRound.className = "bannerRound";
		bannerRound.style.width = scrWid + "px";
		var round = document.createElement("a");
		round.className = 'round';
				
		//500强
		$(".serTopBox").append(topBox);
		//企业
		$(".serTopBox").append(topBox.cloneNode(true));
		//电商
		$(".serTopBox").append(topBox.cloneNode(true));
		//O2O
		$(".serTopBox").append(topBox.cloneNode(true));
		//地产
		$(".serTopBox").append(topBox.cloneNode(true));
		//汽车
		$(".serTopBox").append(topBox.cloneNode(true));
		//教育
		$(".serTopBox").append(topBox.cloneNode(true));
		//餐饮
		$(".serTopBox").append(topBox.cloneNode(true));
		//儿童
		$(".serTopBox").append(topBox.cloneNode(true));
		//化妆品
		$(".serTopBox").append(topBox.cloneNode(true));
		//保健品
		$(".serTopBox").append(topBox.cloneNode(true));
		//医疗
		$(".serTopBox").append(topBox.cloneNode(true));
		//IT
		$(".serTopBox").append(topBox.cloneNode(true));
		//添加2个banner图
		$(".topBox").append(tBannerBox);
		$(".topBox").append(tBannerBox.cloneNode(true));
		$(".topBox").append(bannerRound);
		$(".tBannerBox").append(tBannerTopImg);
		$(".tBannerBox").append(tBannerMidImg);
		$(".round:nth-of-type(1)").addClass("roundActive");
		$(".bannerRound").append(round.cloneNode(true));
		$(".bannerRound").append(round.cloneNode(true));
		$(".round:nth-of-type(1)").addClass("roundActive");
		
		/**
		 *                                      设置图片路径top
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 */
		//500强
		$(".topBox").eq(0).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo3.png");
		$(".topBox").eq(0).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg03.png");
		$(".topBox").eq(0).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo4.png");
		$(".topBox").eq(0).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg04.png");
		//国企
		$(".topBox").eq(1).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo1.png");
		$(".topBox").eq(1).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg01.png");
		$(".topBox").eq(1).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo2.png");
		$(".topBox").eq(1).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg02.png");
		//电商
		$(".topBox").eq(2).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo5.png");
		$(".topBox").eq(2).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg05.png");
		$(".topBox").eq(2).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo6.png");
		$(".topBox").eq(2).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg06.png");
		//O2O
		$(".topBox").eq(3).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo7.png");
		$(".topBox").eq(3).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg07.png");
		$(".topBox").eq(3).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo8.png");
		$(".topBox").eq(3).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg08.png");
		//地产
		$(".topBox").eq(4).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo11.png");
		$(".topBox").eq(4).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg11.png");
		$(".topBox").eq(4).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo12.png");
		$(".topBox").eq(4).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg12.png");
		//汽车
		$(".topBox").eq(5).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo13.png");
		$(".topBox").eq(5).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg13.png");
		$(".topBox").eq(5).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo14.png");
		$(".topBox").eq(5).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg14.png");
		//教育
		$(".topBox").eq(6).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo16.png");
		$(".topBox").eq(6).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg16.png");
		$(".topBox").eq(6).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo17.png");
		$(".topBox").eq(6).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg17.png");
		//餐饮
		$(".topBox").eq(7).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo19.png");
		$(".topBox").eq(7).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg19.png");
		$(".topBox").eq(7).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo20.png");
		$(".topBox").eq(7).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg20.png");
		//儿童
		$(".topBox").eq(8).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo21.png");
		$(".topBox").eq(8).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg21.png");
		$(".topBox").eq(8).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo22.png");
		$(".topBox").eq(8).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg22.png");
		//化妆品
		$(".topBox").eq(9).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo23.png");
		$(".topBox").eq(9).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg23.png");
		$(".topBox").eq(9).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo24.png");
		$(".topBox").eq(9).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg24.png");
		//保健品
		$(".topBox").eq(10).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo25.png");
		$(".topBox").eq(10).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg25.png");
		$(".topBox").eq(10).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo26.png");
		$(".topBox").eq(10).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg26.png");
		//医疗
		$(".topBox").eq(11).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo27.png");
		$(".topBox").eq(11).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg27.png");
		$(".topBox").eq(11).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo28.png");
		$(".topBox").eq(11).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg28.png");
		//IT
		$(".topBox").eq(12).children(".tBannerBox").eq(0).children("img").eq(0).attr("src","images/img/Slogo29.png");
		$(".topBox").eq(12).children(".tBannerBox").eq(0).children("img").eq(1).attr("src","images/img/SImg29.png");
		$(".topBox").eq(12).children(".tBannerBox").eq(1).children("img").eq(0).attr("src","images/img/Slogo30.png");
		$(".topBox").eq(12).children(".tBannerBox").eq(1).children("img").eq(1).attr("src","images/img/SImg30.png");
		
		var serPosti = 0;
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
		
		
		
		
		//滑动banner切换图片
					//开始
					serTopBox.addEventListener("touchstart",function(evt){
							bannerXStart = 0;
							bannerXEnd = 0;
							bannerXFinal = 0;
							bannerOne = evt.touches[0];
							bannerXStart = bannerOne.pageX;
					});
					//移动
					serTopBox.addEventListener("touchmove",function(evt){
							bannerOne = evt.touches[0];
							bannerXEnd = bannerOne.pageX;
					});
					//最后
					serTopBox.addEventListener("touchend",function(evt){
							bannerXFinal = bannerXEnd - bannerXStart;
							if(bannerXFinal != 0){
								//下一张
								if(bannerXFinal <= -50){
									currentBannerIndex ++;
									$(".topBox").eq(bannerIndex).children(".bannerRound").children("a").removeClass("roundActive");
									if(currentBannerIndex == $(".topBox").eq(bannerIndex).children(".tBannerBox").length){//下一张是第一张
										$(".topBox").eq(bannerIndex).children(".tBannerBox").eq(0).css("left",'0');
										$(".topBox").eq(bannerIndex).children(".tBannerBox").eq(1).css("left",'100%');
//										$(".topBox").eq(bannerIndex).css("transform","translateX(0)");
//										$(".topBox").eq(bannerIndex).children(".bannerRound").css("transform","translateX(0%)");
										currentBannerIndex = 0;
										$(".topBox").eq(bannerIndex).children(".bannerRound").children("a").eq(currentBannerIndex).addClass("roundActive");
										//动画
										caseImgAnimate(bannerIndex,currentBannerIndex);
									}else{
										$(".topBox").eq(bannerIndex).children(".tBannerBox").eq(0).css("left",'-100%');
										$(".topBox").eq(bannerIndex).children(".tBannerBox").eq(1).css("left",'0');
//										$(".topBox").eq(bannerIndex).css("transform","translateX(-"+(10*currentBannerIndex)+"%)");
//										$(".topBox").eq(bannerIndex).children(".bannerRound").css("transform","translateX("+(100*currentBannerIndex)+"%)");
										$(".topBox").eq(bannerIndex).children(".bannerRound").children("a").eq(currentBannerIndex).addClass("roundActive");
										//动画
										caseImgAnimate(bannerIndex,currentBannerIndex);
									}
								}
								//上一张
								if(bannerXFinal >= 50){
									console.log("上一张");
									currentBannerIndex --;
									$(".topBox").eq(bannerIndex).children(".bannerRound").children("a").removeClass("roundActive");
									$(".topBox").eq(bannerIndex).children(".bannerRound").children("a").eq(currentBannerIndex).addClass("roundActive");
									if(currentBannerIndex == -1){//上一张是最后一张
										$(".topBox").eq(bannerIndex).children(".tBannerBox").eq(0).css("left",'-100%');
										$(".topBox").eq(bannerIndex).children(".tBannerBox").eq(1).css("left",'0%');
//										$(".topBox").eq(bannerIndex).css("transform","translateX(-"+10*($(".topBox").eq(bannerIndex).children(".tBannerBox").length-1)+"%)");
//										$(".topBox").eq(bannerIndex).children(".bannerRound").css("transform","translateX("+100*($(".topBox").eq(bannerIndex).children(".tBannerBox").length-1)+"%)");
										currentBannerIndex = $(".topBox").eq(bannerIndex).children(".tBannerBox").length-1;
										//动画
										caseImgAnimate(bannerIndex,currentBannerIndex);
									}else{
//										$(".topBox").eq(bannerIndex).children(".bannerRound").css("transform","translateX("+(100*currentBannerIndex)+"%)");
//										$(".topBox").eq(bannerIndex).css("transform","translateX(-"+(10*currentBannerIndex)+"%)");
										$(".topBox").eq(bannerIndex).children(".tBannerBox").eq(0).css("left",'0%');
										$(".topBox").eq(bannerIndex).children(".tBannerBox").eq(1).css("left",'100%');
										//动画
										caseImgAnimate(bannerIndex,currentBannerIndex);
									}
								}
							}
					});
		
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
			"z-index":"999",
			"height":(scrHei-2)+"px"
		});
		$(".MunCase article").css({
			"opacity": "0",
			"transition": "0.5s"
		});
		//删除PC的元素
		$("#num_4>div").remove();
		//创建最外层div
		var caseOutDiv = document.createElement("div");
		caseOutDiv.className = "caseOutDiv";
		var caseDiv = document.createElement("div");
		caseDiv.className = "caseDiv";
		var caseSpan = document.createElement("span");
		var caseImg = document.createElement("img");
		caseImg.className = "caseImg";
		var caseA = document.createElement("a");
		caseA.className = "caseA";
		
		$("#num_4").append(caseOutDiv);
		$(".caseOutDiv").append(caseDiv);
		$(".caseDiv").append(caseSpan.cloneNode(true));
		$(".caseDiv").append(caseSpan.cloneNode(true));
		$(".caseDiv").append(caseA.cloneNode(true));
		$(".caseA").append(caseImg.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		$(".caseOutDiv").append(caseDiv.cloneNode(true));
		//添加图片
		for(var i=1;i<=16;i++){
			(function(i){
				if(i>=10){
					$(".caseDiv").eq(i-1).children("a").children("img").attr("src","images/img/caseIcon"+i+".png");
				}else{
					$(".caseDiv").eq(i-1).children("a").children("img").attr("src","images/img/caseIcon0"+i+".png");
				}
				$(".caseDiv").eq(i-1).children("a").attr("href","case"+i+".html");
			})(i)
		}	
		
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
		$("#num_5 div").remove();
		$("#num_5").css({
			"background":"#edeae9",
			"position":"relative"
		});
		//创建红色节点
		var con_topRed = document.createElement("div");
		con_topRed.className = "con_topRed";
		//创建二维码节点
		var con_code = document.createElement("img");
		con_code.src = "images/mobile/erweima.png";
		con_code.className = "con_code";
		//创建文字1节点
		var con_font1 = document.createElement("p");
		con_font1.innerHTML = "扫描二维码关注微运作";
		con_font1.className = "con_font1";
		//创建logo节点
		var con_logo = document.createElement("img");
		con_logo.src = "images/img/logoImg.png";
		con_logo.className = "con_logo";
		//创建文字2节点
		var con_font2 = document.createElement("div");
		con_font2.className = "con_font2";
		var con_font3 = con_font2.cloneNode(true);  
		con_font2.innerHTML = "咨询热线：<b>800-820-8295</b>";
		
		
		var tel = document.createElement("div");
		tel.innerHTML = "咨询热线：<b><a href = 'tel:800-820-8295'>800-820-8295</a></b>";
		tel.id = "tel";
		
		con_font3.innerHTML = "公司地址：上海市普陀区金沙江路1759号";
		con_font3.className = "con_font3";
		var con_font4 = document.createElement("div");
		con_font4.innerHTML = "<label>空</label>圣诺亚大厦A座510室";
		con_font4.className = "con_font4";
		//创建在线留言块
		var con_bottom = document.createElement("div");
		con_bottom.className = "con_bottom";
		con_bottom.innerHTML = "<img src='images/mobile/con_icon.png' />在线留言";
		//创建模态窗口
		var con_moBox  =document.createElement("div");
		con_moBox.className = "con_moBox";
		con_moBox.innerHTML = "<div id='moveBox'>"+
									"<span><img id='del' src='images/icon/del.png' /></span>"+
									"<p>把您的需求告诉我们，</p>"+
									"<p>让我们优秀的团队为您服务</p>"+
									"<form>"+
										"<div><img src='images/icon/icon01.png' /><input type='text' placeholder='请输入您的名字' /></div>"+
										"<div><img src='images/icon/icon02.png' /><input type='text' placeholder='请输入您常用的联系方式' /></div>"+
										"<div><img src='images/icon/icon03.png' /><textarea placeholder='请输入您需求，以方便我们更好的为您服务...'></textarea></div>"+
										"<div class = 'moBDiv' id='moBDiv'>"+
											"<div><img src = 'images/icon/tiIC.png' />立即提交</div>"+
										"</div>"+
									"</form>"+
								"</div>";
								
		
		
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
		
		
		
		
		//添加元素到num_5盒子中
		$("#num_5").append(con_topRed);
		$("#num_5").append(con_code);
		$("#num_5").append(con_font1);
		$("#num_5").append(con_logo);
		$("#num_5").append(con_font2);
		$("#num_5").append(tel);
		$("#num_5").append(con_font3);
		$("#num_5").append(con_font4);
		$("#num_5").append(con_bottom);
		$("#num_5").append(con_moBox);
		
		
		
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
				$(".m_logo").css("left","-100%");
				$(".banner ul li").children().css("left","-100%");
			//关于我们
				$(".textBox").children().css("opacity","0");
				abIndex = -1;
			//服务项目
				$(".serverLi").children("article").css("transform","scale(0)");
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
			
			$(".moBDiv").css("height","40px !important");			
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
					"margin-top":"12%",
					"margin-bottom":"6%"
				});
				$(".ab_redFont").css("font-size","14px");
				$(".ab_p").css("font-size","11px");
				$(".about_textBox").css("transform","translateY(0px)");
				$(".textBox").css("transform","translateY(-8%)");
				$(".ab_redFont").css("font-size","15px");
				$(".ab_img").css("margin-top","20%");
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

