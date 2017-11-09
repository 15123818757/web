// JavaScript Document
$(function(){
	$(".game-cross").hide();
	$(window).load(function(){
		GameShou();
		/*选择人物*/
		$(".game-figureImg figure").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
		})
		/*$(".game-button").click(function(){
			//var gameInput=$(".game-input input").val();
			if(gameInput==""){
				alertT("请输入正确的手机号码");
				return false;
				}
			window.location="game.html";
			})*/
		$(".game-fx").click(function(){
			$(".gameEnd-fx").addClass("gameEnd-fxvisible");
			})
		$(".gameEnd-fx figure").click(function(){
			$(".gameEnd-fx").removeClass("gameEnd-fxvisible");
			})
		})
	$(window).resize(function(){
		GameShou();
		$("input").focus(function(){
			$(".game-cross").hide();
			})
		})
	})

function GameShou(){
	var GameWidth=$(window).width(),
		GameHeight=$(window).height();
		if(GameWidth>GameHeight){
			if(GameWidth-GameHeight<100){
				$(".game-cross").hide();
				}else{
					$(".game-cross").show();
				}
		}else{
			$(".game-cross").hide();
			}
	/*gameEnd*/
	var gameEndlogo=$(".gameEnd-logo").height(),
		gameEndCj=$(".gameEnd-Cj").height(),
		gameEndtext=$(".gameEnd-text").height(),
		gameEndbutton=$(".gameEnd-button").height(),
		gameH=gameEndlogo+gameEndCj+gameEndtext+gameEndbutton;
		if(GameHeight>gameH){
			$(".gameEnd-logo ,.gameEnd-Cj ,.gameEnd-text ,.gameEnd-button").css({"margin-top":(GameHeight-gameH)/8,"margin-bottom":(GameHeight-gameH)/8});
			$(".gameEnd-logo").css({"width":"100px"});
			}else {
				$(".gameEnd-logo").css({"width":"60px"});
				}
	$(".preach-mian").height(GameHeight/1.1).css({"margin-top":GameHeight/22});
	var preachMian=$(".preach-mian").height();
	$(".preach-section").height(preachMian/1.9).css({"overflow-y":"scroll"});
	}
	
function alertT(str){
	$(".registeredText").text(str).slideDown();
	setInterval(function(){
		$(".registeredText").slideUp();
		},3000);
	}
	