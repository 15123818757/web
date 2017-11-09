$(function(){
	var btnFn = function( e ){
	alert( e.target );
	return false;
};
	$("#demoBtn1").click(function(){
		easyDialog.open({
		container : {
			content :"<div class='pop'><h2>追浪网络 微信号:zhuilangcn</h2><div class='poptiele'>如有疑问或者寻求合作请联系客服<br />工作时间9:00-18:00</div><div><div id='closeBtn' class='back close_btn'>返回</div><div class='tel'><a href='tel:8008208295'>拨打800-820-8295</a></div></div></div>",
			yesFn : btnFn,
			noFn : true
		},
		fixed : false
	});
		})
	})
	