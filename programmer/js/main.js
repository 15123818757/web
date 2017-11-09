$(window).load(function() {
	$(".loading").fadeOut("fast"); 
	
	var bgm = document.getElementById('bgm');
	var bgm2 = document.getElementById('bgm2');
	var bgm3 = document.getElementById('bgm3');
	
	bgm.play();
	//音频加载完毕
	bgm.addEventListener('canplaythrough', function(e){
    	$(".loading").fadeOut("fast");
    	bgm.play();
    }, false);
	
	
	//微信自动播放音乐
	document.addEventListener("WeixinJSBridgeReady", function () {
		var bgm = document.getElementById('bgm');
		//var bgm2 = document.getElementById('bgm2');
		bgm.play();
	}, false);
	
	
		
	setTimeout(function(){
		goInit();	
	},100);
	$("#go").click(function(){
		$(".start").css("transform","rotateZ(1800deg) scale(0)");
		bgm.play();
		setTimeout(function(){
			$(".start").css("display","none");
			proAnimate();
		},1000)
	});
	
	
	
	
	//获取窗口的宽高
	var scrWid = document.body.clientWidth;
	var scrHei = document.body.clientHeight;
	//设置地球和外层的位置
	$("#earth").css({
		"left":(scrWid-$("#earth").width())/2+"px",
		"top":(scrHei-$("#earth").height())/2.5+"px"
	});
	$("#out").css({
		"left":(scrWid-$("#out").width())/2+"px",
		"top":(scrHei-$("#out").height())/2.5-$("#out").height()*0.17+"px"
	});
	//让猴子居中
	setTimeout(function(){
		//1 
		$(".monkey").eq(0).css("left",(scrWid-$(".monkey").eq(0).width())/2+"px");
		//2
//		$(".img2").eq(0).css("bottom",-($(".img2").eq(0).height()*0.73)+"px");
		$(".monkey").eq(1).css("left",(scrWid-$(".monkey").eq(1).width())/2+"px");
//		$(".monkey").eq(1).css("bottom",($(".img2").eq(0).height()*0.28)+"px");
		//3
		$(".monkey").eq(2).css("left",(scrWid-$(".monkey").eq(2).width())/2+"px");
//		$(".monkey").eq(3).css("left",(scrWid-$(".monkey").eq(3).width())/2+"px");
		//4
		
		$(".monkey").eq(4).css("left",(scrWid-$(".monkey").eq(4).width())/2+"px");
		$(".monkey").eq(5).css("left",(scrWid-$(".monkey").eq(5).width())/2+"px");
		$(".monkey").eq(6).css("left",(scrWid-$(".monkey").eq(6).width())/2+"px");
		//5
		$(".img5").eq(0).css("margin-top",(scrHei-$(".img5").eq(0).height())/2+"px");
		$(".img5").eq(1).css("margin-top",(scrHei-$(".img5").eq(1).height())/2.25+"px");
		$(".img5").eq(11).css("margin-top",(scrHei-$(".img5").eq(1).height())/2.25+"px");
		$(".img5").eq(2).css("margin-top",(scrHei-$(".img5").eq(2).height())/2.3+"px");
		$(".img5").eq(12).css("margin-top",(scrHei-$(".img5").eq(2).height())/2.3+"px");
		$(".img5").eq(3).css("margin-top",(scrHei-$(".img5").eq(3).height())/2.25+"px");
		$(".img5").eq(13).css("margin-top",(scrHei-$(".img5").eq(3).height())/2.25+"px");
		$(".img5").eq(4).css("margin-top",(scrHei-$(".img5").eq(4).height())/2.3+"px");
		$(".img5").eq(14).css("margin-top",(scrHei-$(".img5").eq(4).height())/2.3+"px");
		$(".img5").eq(5).css("margin-top",(scrHei-$(".img5").eq(5).height())/1.95+"px");
		$(".img5").eq(15).css("margin-top",(scrHei-$(".img5").eq(5).height())/1.95+"px");
		$(".img5").eq(6).css("margin-top",(scrHei-$(".img5").eq(6).height())/1.9+"px");
		$(".img5").eq(16).css("margin-top",(scrHei-$(".img5").eq(6).height())/1.9+"px");
		$(".img5").eq(7).css("margin-top",(scrHei-$(".img5").eq(7).height())/1.95+"px");
		$(".img5").eq(17).css("margin-top",(scrHei-$(".img5").eq(7).height())/1.95+"px");
		$(".img5").eq(8).css("margin-top",(scrHei-$(".img5").eq(8).height())/1.95+"px");
		$(".img5").eq(18).css("margin-top",(scrHei-$(".img5").eq(8).height())/1.95+"px");
		$(".img5").eq(9).css("margin-top",(scrHei-$(".img5").eq(9).height())/1.97+"px");
		$(".img5").eq(19).css("margin-top",(scrHei-$(".img5").eq(9).height())/1.97+"px");
		$(".img5").eq(10).css("margin-top",(scrHei-$(".img5").eq(10).height())/1.65+"px");
		$(".img5").eq(20).css("margin-top",(scrHei-$(".img5").eq(10).height())/1.65+"px");
		
		//6
//		$(".img6").eq(3).css("bottom",-($(".img6").eq(3).height()*0.73)+"px");
		$(".monkey").eq(7).css("left",(scrWid-$(".monkey").eq(7).width())/2+"px");
		$(".monkey").eq(8).css("left",(scrWid-$(".monkey").eq(8).width())/3.5+"px");
		$(".monkey").eq(9).css("left",(scrWid-$(".monkey").eq(9).width())/1.6+"px");
	},10)
	
	
	
	//设置每块儿盒子的高度
	$(".num").height(scrHei);
	
	var prevY = 0;
	var indexY = 0;
	var one;
	var yStart = 0;
	var yEnd = 0;
	var yFinal = 0;
	var box = document.querySelector(".box");
	//下拉  上拉  拖动事件
	box.addEventListener("touchstart",function(evt){
		//清除banner定时器
		one = evt.touches[0];
		yStart = one.pageY;
	});
	box.addEventListener("touchmove",function(evt){
		one = evt.touches[0];
	});
	box.addEventListener("touchend",function(evt){
		yEnd = one.pageY;
		yFinal = yEnd - yStart;
		if( yFinal != 0 ){
			//向下
			if(yFinal <= -30){
				indexY ++;
				console.log("当前页数   "+indexY+"   上一页："+prevY);
				if(indexY == 6){
					indexY = 0;
					prevY = -1;
				}
				
				//换背景音乐
				if(indexY == 2){
					bgm.pause();
					bgm2.play();
					bgm3.pause();
				}
				if(indexY == 4){
					bgm.pause();
					bgm2.pause();
					bgm3.play();
				}
				if(indexY == 5){
					bgm.play();
					bgm2.pause();
					bgm3.pause();
				}
				
				if(indexY == 3){
					$("#ct1").css("top","100%");
					$("#ct2").css("top","100%");
					$(".img3:nth-of-type(4)").css("bottom","-99%");
				}
				exeAnimate(indexY);
				//初始化垫子和帘子
				if(indexY == 1 || indexY == 4){
					setTimeout(function(){
						$("#ct1").css("left","3%");
						$("#ct2").css("right","-3%");
						$(".img3:nth-of-type(4)").css("transform","scale(0)");	
					},500);
				}
				prevY ++;
			}
			//向上
			if(yFinal >= 30){
				indexY --;
				console.log("当前页数   "+indexY+"   上一页："+prevY);
				prevY --;
				//换背景音乐
				if(indexY == 1){
					bgm.play();
					bgm2.pause();
					bgm3.pause();
				}
				if(indexY == 3){
					bgm.pause();
					bgm2.play();
					bgm3.pause();
				}
				if(indexY == 4){
					bgm.pause();
					bgm2.pause();
					bgm3.play();
				}
				
				if(indexY == -1){
					indexY = 0;
					prevY = 0;
				}else{
					exeAnimate(indexY);
				}
				if(indexY == 1){
					$("#ct1").css("left","3%");
					$("#ct2").css("right","-3%");
					$(".img3:nth-of-type(4)").css("transform","scale(0)");
				}
				if(indexY == 3){
					setTimeout(function(){
						$("#ct1").css("left","-26%");	
						$("#ct2").css("right","-31%");	
					},500);
					setTimeout(function(){
						$(".img3:nth-of-type(4)").css("transform","scale(1)");	
					},700);
				}
				//初始化垫子和帘子
				if(indexY == 2){
					$("#ct1").css("top","0%");
					$("#ct2").css("top","0%");
					$(".img3:nth-of-type(4)").css("bottom","1%");
				}
			}
			$(".box").css("top",-(indexY*scrHei)+"px");
		}
		yStart = 0;
		yEnd = 0;
		yFinal = 0;
		
	});
	
	
	
	
	
	var meteorInt1;
	var meteorInt2;
	
	//产生流星（上方）
	meteorInt1 = setInterval(function(){
		//创建流星
		var meteor = document.createElement("img");
		meteor.setAttribute("src","img/6/meteor.png");
		meteor.className = "meteor";
		//产生随机数来设置流星的大小
		var num = parseInt(Math.random()*10);
		if(num > 0 && num <=1){
			meteor.style.height = "10%";
		}
		if(num > 1 && num <=6){
			meteor.style.height = "6%";
		}
		if(num > 6 && num <=10){
			meteor.style.height = "4%";
		}
		//设置流星的开始位置
		meteor.style.top = "-10%";
		meteor.style.left = (num/10)*100+20+"%";
		
		document.querySelector(".num:nth-of-type(5)").appendChild(meteor);
		setTimeout(function(){
			meteor.style.transform = "translate(-"+scrWid*1.4+"px,"+scrHei*1.4+"px)";	
			setTimeout(function(){
				meteor.className = "meteor pp";
			},3000);
		},100);
	},200);
	//产生流星（右方）
	meteorInt2 = setInterval(function(){
		//创建流星
		var meteor = document.createElement("img");
		meteor.setAttribute("src","img/6/meteor.png");
		meteor.className = "meteor";
		//产生随机数来设置流星的大小
		var num = parseInt(Math.random()*10);
		if(num > 0 && num <=1){
			meteor.style.height = "10%";
		}
		if(num > 2 && num <=6){
			meteor.style.height = "6%";
		}
		if(num > 6 && num <=10){
			meteor.style.height = "4%";
		}
		//设置流星的开始位置
		meteor.style.right = "-20%";
		meteor.style.top = (num/10)*100-10+"%";
		
		document.querySelector(".num:nth-of-type(5)").appendChild(meteor);
		setTimeout(function(){
			meteor.style.transform = "translate(-"+scrWid*1.4+"px,"+scrHei*1.4+"px)";
			setTimeout(function(){
				meteor.className = "meteor pp";
			},3000);
		},100);
	},200);
	
	//清除流星和花朵
	var clearMeteor = setInterval(function(){
		$(".pp").remove();
		$(".ff").remove();
	},1000);
	
	
	
	
	//产生花的计时器
	var flowerInt;
	
	
	
	
	
	/***********************  程序员动画  ***************/
	var proData;
	var proIndex = 0;
	function proAnimate(){
		$(".img1:nth-of-type(1)").css("transform","translateY(0)");
		proData = setInterval(function(){
			switch (proIndex){
				case 0:
					$(".img1:nth-of-type(2)").css("left","12%");
					break;
				case 1:
					$(".img1:nth-of-type(3)").css("left","26%");
					break;
				case 2:
					$(".img1:nth-of-type(4)").css("left","17%");
					break;
				case 3:
					$(".img1:nth-of-type(5)").css("transform","scale(1)");
					break;
				case 4:
					$(".img1:nth-of-type(6)").css("transform","scale(1)");
					break;
				case 5:
					$(".img1:nth-of-type(7)").css("transform","scale(1)");
					break;
				case 6:
					$(".img1:nth-of-type(8)").css("transform","scale(1)");
					break;
			}
			proIndex ++;
			if(proIndex == 7){
				clearInterval(proData);
				proIndex = 0;
			}
		},500);
	}
	proAnimate();
	
	
	var lifeData;
	var lifeIndex = 0;
	//生活动画
	function lifeAnimate(){
		lifeData = setInterval(function(){
			switch (lifeIndex){
				case 0:
					$(".img2").eq(0).css("bottom",-($(".img2").eq(0).height()*0.73)+"px");
					break;
				case 1:
					$(".monkey").eq(1).css("bottom",($(".img2").eq(0).height()*0.28)+"px");
					break;
				case 2:
					$(".img2:nth-of-type(6)").css("left","-5%");
					break;			
				case 3:
					$(".img2:nth-of-type(7)").css("right","-5%");
					break;
				case 4:
					$(".img2:nth-of-type(8)").css("opacity","1");
					break;
				case 5:
					$(".img2:nth-of-type(3)").css("transform","scale(1)");
					break;
				case 6:
					$(".img2:nth-of-type(4)").css("transform","scale(1)");
					break;
				case 7:
					$(".img2:nth-of-type(5)").css("transform","scale(1)");
					break;
			}
			lifeIndex ++;
			if(lifeIndex == 8){
				lifeIndex = 0;
				clearInterval(lifeData);
			}
		},500);
	}
	
	var wData;
	var wIndex = 0;
	//女神动画
	function wAnimate(){
		wData = setInterval(function(){
			switch (wIndex){
				case 0:
					$("#ct1").css("left","-26%");
					$("#ct2").css("right","-31%");
					break;
				case 1:
					$(".img3:nth-of-type(4)").css("transform","scale(1)");
					break;
				case 2:
					$(".monkey").eq(3).css("left",(scrWid-$(".monkey").eq(3).width())/2+"px");
					break;
				case 3:
					$(".img3:nth-of-type(1)").css("height","5.5%");
					break;
				case 4:
					$(".img3:nth-of-type(2)").css("height","3.3%");
					break;
				case 5:
					$(".img3:nth-of-type(3)").css("height","3.6%");
					break;
			}
			wIndex ++;
			if(wIndex == 6){
				wIndex = 0;
				clearInterval(wData);
			}
		},500);
	}
	
	var mData;
	var mIndex = 0;
	//男神动画
	function mAnimate(){
		mData = setInterval(function(){
			switch (mIndex){
				case 0:
					$("#ct1").css("left","-26%");
					$("#ct2").css("right","-31%");
					$(".img3:nth-of-type(4)").css("transform","scale(1)");
					break;
				case 1:
					$(".monkey").eq(5).css("left",(scrWid-$(".monkey").eq(5).width())/2+"px");
					break;
				case 2:
					$(".monkey").eq(6).css("left",(scrWid-$(".monkey").eq(6).width())/2+"px");
					break;
				case 3:
					$(".img4:nth-of-type(1)").css('transform',"rotateZ(0deg) translateX(0%) translateY(0%)");
					break;
				case 4:
					$(".img4:nth-of-type(2)").css('transform',"rotateZ(0deg) translateX(0%) translateY(0%)");
					break;
				case 5:
					$(".img4:nth-of-type(3)").css('transform',"rotateZ(0deg) translateX(0%) translateY(0%)");
					break;
				case 6:
					//产生花
					flowerInt = setInterval(function(){
						//创建花朵
						var flower = document.createElement("img");
						flower.setAttribute("src","img/5/flower.png");
						flower.className = "flower";
						//产生随机数来设置花朵的大小
						var num = parseInt(Math.random()*10);
						if(num > 0 && num <=3){
							flower.style.height = "5%";
						}
						if(num > 3 && num <=6){
							flower.style.height = "4%";
						}
						if(num > 6 && num <=10){
							flower.style.height = "3%";
						}
						//设置流星的开始位置
						flower.style.left = Math.random()*100+"%";
						
						document.querySelector(".num:nth-of-type(4)").appendChild(flower);
						setTimeout(function(){
							flower.style.opacity = "0";
							flower.style.transform = "translateY("+scrHei*0.7+"px) rotateZ(720deg)";
							setTimeout(function(){
								flower.className = "meteor ff";
							},3000);
						},100);
					},200);
					break;
			}
			mIndex ++;
			if(mIndex == 8){
				mIndex = 0;
				clearInterval(mData);
			}
		},500);
	}
	
	var whatData;
	var whatIndex = 0;
	//什么玩意儿动画
	function whatAnimate(){
		whatData = setInterval(function(){
			switch (whatIndex){
				case 0:
					//产生流星（上方）
					meteorInt1 = setInterval(function(){
						//创建流星
						var meteor = document.createElement("img");
						meteor.setAttribute("src","img/6/meteor.png");
						meteor.className = "meteor";
						//产生随机数来设置流星的大小
						var num = parseInt(Math.random()*10);
						if(num > 0 && num <=1){
							meteor.style.height = "10%";
						}
						if(num > 1 && num <=6){
							meteor.style.height = "6%";
						}
						if(num > 6 && num <=10){
							meteor.style.height = "4%";
						}
						//设置流星的开始位置
						meteor.style.top = "-10%";
						meteor.style.left = (num/10)*100+20+"%";
						
						document.querySelector(".num:nth-of-type(5)").appendChild(meteor);
						setTimeout(function(){
							meteor.style.transform = "translate(-"+scrWid*1.4+"px,"+scrHei*1.4+"px)";	
							setTimeout(function(){
								meteor.className = "meteor pp";
							},3000);
						},100);
					},200);
					//产生流星（右方）
					meteorInt2 = setInterval(function(){
						//创建流星
						var meteor = document.createElement("img");
						meteor.setAttribute("src","img/6/meteor.png");
						meteor.className = "meteor";
						//产生随机数来设置流星的大小
						var num = parseInt(Math.random()*10);
						if(num > 0 && num <=1){
							meteor.style.height = "10%";
						}
						if(num > 2 && num <=6){
							meteor.style.height = "6%";
						}
						if(num > 6 && num <=10){
							meteor.style.height = "4%";
						}
						//设置流星的开始位置
						meteor.style.right = "-20%";
						meteor.style.top = (num/10)*100-10+"%";
						
						document.querySelector(".num:nth-of-type(5)").appendChild(meteor);
						setTimeout(function(){
							meteor.style.transform = "translate(-"+scrWid*1.4+"px,"+scrHei*1.4+"px)";
							setTimeout(function(){
								meteor.className = "meteor pp";
							},3000);
						},100);
					},200);
					break;
				case 1:
					$(".img5").eq(0).css("opacity","1");
					break;
				case 2:
					$(".img5").eq(1).css("opacity","1");
					break;
				case 3:
					$(".img5").eq(2).css("opacity","1");
					break;
				case 4:
					$(".img5").eq(3).css("opacity","1");
					break;
				case 5:
					$(".img5").eq(4).css("opacity","1");
					break;
				case 6:
					$(".img5").eq(5).css("opacity","1");
					break;
				case 7:
					$(".img5").eq(6).css("opacity","1");
					break;
				case 8:
					$(".img5").eq(7).css("opacity","1");
					break;
				case 9:
					$(".img5").eq(8).css("opacity","1");
					break;
				case 10:
					$(".img5").eq(9).css("opacity","1");
					break;
				case 11:
					$(".img5").eq(10).css("opacity","1");
					break;
				case 14:
					for(var i=1;i<=10;i++){
						(function(i){
							$(".img5").eq(i).css("opacity","0");
						})(i)
					}
					break;
				case 15:
					$(".img5").eq(11).css("opacity","1");
					break;
				case 16:
					$(".img5").eq(12).css("opacity","2");
					break;
				case 17:
					$(".img5").eq(13).css("opacity","2");
					break;
				case 18:
					$(".img5").eq(14).css("opacity","2");
					break;
				case 19:
					$(".img5").eq(15).css("opacity","2");
					break;
				case 20:
					$(".img5").eq(16).css("opacity","2");
					break;
				case 21:
					$(".img5").eq(17).css("opacity","2");
					break;
				case 22:
					$(".img5").eq(18).css("opacity","2");
					break;
				case 23:
					$(".img5").eq(19).css("opacity","2");
					break;
				case 24:
					$(".img5").eq(20).css("opacity","2");
					break;
			}
			whatIndex ++;
			if(whatIndex == 25){
				whatIndex = 0;
				clearInterval(whatData);
			}
		},300);
	}
	
	var moreData;
	var moreIndex = 0;
	//了解更多动画
	function moreAnimate(){
		moreData = setInterval(function(){
			switch (moreIndex){
				case 0:
					$(".img6").eq(3).css("bottom",-($(".img6").eq(3).height()*0.73)+"px");
					break;
				case 1:
					$(".img6").eq(4).css("right","-6%");
					break;
				case 2:
					$(".img6").eq(5).css("left","-14%");
					break;
				case 3:
					$(".img6").eq(6).css("transform","rotateZ(720deg)");
					$(".img6").eq(6).css("-webkit-transform","rotateZ(720deg) scale(1)");
					break;
				case 8:
					$(".img6:last-child").css("opacity","1");
					break;
				case 6:
					$(".img6").eq(7).css("opacity","1");
					break;
				case 7:
					$(".img6").eq(8).css("opacity","1");
					break;
				case 4:
					$(".img6").eq(0).css("left","23%");
					$(".img6").eq(1).css("left","29%");
					$(".img6").eq(2).css("left","7%");
					break;
			}
			moreIndex ++;
			if(moreIndex == 11){
				moreIndex = 0;
				clearInterval(moreData);
			}
		},500);
	}
	
	
	
	//初始化
	function goInit(){
		//程序员
		$(".img1:nth-of-type(1)").css("transform","translateY(100%)");
		$(".img1:nth-of-type(2),.img1:nth-of-type(3),.img1:nth-of-type(4)").css("left","-100%");
		$(".img1:nth-of-type(5),.img1:nth-of-type(6),.img1:nth-of-type(7),.img1:nth-of-type(8)").css("transform","scale(0)");
		clearInterval(proData);
		proIndex = 0;
		//生活
		$(".img2").eq(0).css("bottom","-100%");
		$(".monkey").eq(1).css("bottom","-100%");
		$(".img2:nth-of-type(6)").css("left","-50%");
		$(".img2:nth-of-type(7)").css("right","-50%");
		$(".img2:nth-of-type(8)").css("opacity","0");
		$(".img2:nth-of-type(3),.img2:nth-of-type(4),.img2:nth-of-type(5)").css("transform","scale(0)");
		clearInterval(lifeData);
		lifeIndex = 0;
		//女神
//		$(".ct1").eq(0).css("left","3%");
//		$(".ct2").eq(0).css("right","-3%");
//		$(".img3:nth-of-type(4)").css("transform","scale(0)");
		$(".img3:nth-of-type(5)").css("left","-100%");
		$(".img3:nth-of-type(1),.img3:nth-of-type(2),.img3:nth-of-type(3)").css("height","0");
		wIndex = 0;
		clearInterval(wData);
		//男神
//		$(".ct1").css("left","3%");
//		$(".ct2").css("right","-3%");
		$(".img4:nth-of-type(4)").css("transform","scale(0)");
		$(".img4:nth-of-type(5)").css("left","-100%");
		$(".img4:nth-of-type(6)").css("left","-100%");
		$(".img4:nth-of-type(1)").css("transform","rotateZ(-90deg) translateX(-100%) translateY(-1000%)");
		$(".img4:nth-of-type(2)").css("transform","rotateZ(-90deg) translateX(-100%) translateY(-1000%)");
		$(".img4:nth-of-type(3)").css("transform","rotateZ(-90deg) translateX(-100%) translateY(-1000%)");
		mIndex = 0;
		clearInterval(mData);
		clearInterval(flowerInt);
		//什么玩意儿
		$(".img5").each(function(){
			$(this).css("opacity","0");
		});
		whatIndex = 0;
		clearInterval(whatData);
		clearInterval(meteorInt1);
		clearInterval(meteorInt2);
		//了解更多
		$(".img6").eq(3).css("bottom","-100%");
		$(".img6").eq(4).css("right","-50%");
		$(".img6").eq(5).css("left","-50%");
		$(".img6").eq(6).css("transform","rotateZ(0deg) scale(0)");
		$(".img6").eq(7).css("opacity","0");
		$(".img6").eq(8).css("opacity","0");
		$(".img6:last-child").css("opacity","0");
		$(".img6").eq(0).css("left","-100%");
		$(".img6").eq(1).css("left","110%");
		$(".img6").eq(2).css("left","-100%");
		moreIndex = 0;
		clearInterval(moreData);
	}
	
	//执行动画
	function exeAnimate(index){
		//初始化
		goInit();
		switch (index){
			//程序员
			case 0:
				proAnimate();
				break;
			//生活
			case 1:
				lifeAnimate();
				break;
			//女神
			case 2:
				wAnimate();
				break;
			//男神
			case 3:
				mAnimate();
				break;
			//什么玩意儿
			case 4:
				whatAnimate();
				break;
			//了解更多
			case 5:
				moreAnimate();
				break;
			
		}
	}
	
	
	

});
		
	


		
		
		
		//横屏处理
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
	        var time="";
                var nonc="";
                var sign="";
		var lt = location.href;
                $.post("/h5-programmer/Default.aspx",{"Code":"1001","url":lt},function(data){
                       
                       var s=new Array();
                       s=data.split("=");
                       time=s[0];
                        nonc=s[1]; 
                        sign=s[2];

                });   
	
	
	
	
	setTimeout(function(){
		//微信配置
		wx.config({
		   debug: false, 
		   appId: 'wxe6410c68c43bed1d', // 公众号的唯一标识
		   timestamp: time, // 生成签名的时间戳 
		   nonceStr: nonc, // 生成签名的随机串 
		   signature: sign,// 签名
		   jsApiList: [ // 需要使用的JS接口列表
		   	'onMenuShareTimeline',
		   	'onMenuShareAppMessage'
		   ]
		});
		//微信config之后进入read方法
		wx.ready(function () {
			//检测接口
			wx.checkJsApi({
	            jsApiList: [
	                'onMenuShareTimeline',
	                'onMenuShareAppMessage'
	            ]
	        });

			//分享到朋友圈
			wx.onMenuShareTimeline({
			    title: '程序猿的那些事儿', // 分享标题
			    link: 'http://m.weiyunzuo.com/h5-programmer/', // 分享链接
			    imgUrl: 'http://m.weiyunzuo.com/h5-programmer/img/head.gif', // 分享图标
			    success: function () {
			        // 用户确认分享后执行的回调函数
			    },
			    cancel: function () {
			        // 用户取消分享后执行的回调函数
			    }
			});
			
			
			//分享给朋友
			wx.onMenuShareAppMessage({
			    title: '程序猿的那些事儿', // 分享标题
			    desc: '微运作倾情奉献', // 分享描述
			    link: 'http://m.weiyunzuo.com/h5-programmer/', // 分享链接
			    imgUrl: 'http://m.weiyunzuo.com/h5-programmer/img/head.gif', // 分享图标
			    type: '', // 分享类型,music、video或link，不填默认为link
			    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			    }
			});
			
			//分享到QQ
			wx.onMenuShareQQ({
			    title: '程序猿的那些事儿', // 分享标题
			    desc: '微运作倾情奉献', // 分享描述
			    link: 'http://m.weiyunzuo.com/h5-programmer/', // 分享链接
			    imgUrl: 'http://m.weiyunzuo.com/h5-programmer/img/head.gif', // 分享图标
			    success: function () { 
			       // 用户确认分享后执行的回调函数
			    },
			    cancel: function () { 
			       // 用户取消分享后执行的回调函数
			    }
			});
			
			//分享到腾讯微博
			wx.onMenuShareWeibo({
			    title: '程序猿的那些事儿', // 分享标题
			    desc: '微运作倾情奉献', // 分享描述
			    link: 'http://m.weiyunzuo.com/h5-programmer/', // 分享链接
			    imgUrl: 'http://m.weiyunzuo.com/h5-programmer/img/head.gif', // 分享图标
			    success: function () { 
			       // 用户确认分享后执行的回调函数
			    },
			    cancel: function () { 
			       // 用户取消分享后执行的回调函数
			    }
			});
			
			//分享到QQ空间
			wx.onMenuShareQZone({
			    title: '程序猿的那些事儿', // 分享标题
			    desc: '微运作倾情奉献', // 分享描述
			    link: 'http://m.weiyunzuo.com/h5-programmer/', // 分享链接
			    imgUrl: 'http://m.weiyunzuo.com/h5-programmer/img/head.gif', // 分享图标
			    success: function () { 
			       // 用户确认分享后执行的回调函数
			    },
			    cancel: function () { 
			       // 用户取消分享后执行的回调函数
			    }
			});
			
			
			
		});
		
	},1000);
		
		
		
		
		
		
		
		
/************************************************       禁止微信下拉出现空白      ************************************************/
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
    
    
/************************************************       禁止微信下拉出现空白      ************************************************/