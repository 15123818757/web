$(function () {
  "use strict";
  var console = window.console || { log: function () {} },
      $alert = $(".docs-alert"),
      $message = $alert.find(".message"),
      showMessage = function (message, type) {
        $message.text(message);

        if (type) {
          $message.addClass(type);
        }

        $alert.fadeIn();

        setTimeout(function () {
          $alert.fadeOut();
        }, 3000);
      };

  // Overview
  // -------------------------------------------------------------------------

  (function () {
    var $image = $(".img-container > img"),
        $dataX = $("#dataX"),
        $dataY = $("#dataY"),
        $dataHeight = $("#dataHeight"),
        $dataWidth = $("#dataWidth"),
        options = {
          aspectRatio: 16 / 9,
          data: {
            x: 480,
            y: 60,
            width: 640,
            height: 360
          },
          preview: ".img-preview",
          done: function (data) {
            $dataX.val(Math.round(data.x));
            $dataY.val(Math.round(data.y));
            $dataHeight.val(Math.round(data.height));
            $dataWidth.val(Math.round(data.width));
          }
        };

    $image.cropper(options).on({
      "build.cropper": function (e) {
//      console.log(e.type);
      },
      "built.cropper": function (e) {
//      console.log(e.type);
      }
    });

    $(document).on("click", "[data-method]", function () {
      var data = $(this).data();

      if (data.method) {
        $image.cropper(data.method, data.option);
      }
    });

    var $inputImage = $("#inputImage"),
        blobURL;

    if (window.URL) {
      $inputImage.change(function () {
        var files = this.files,
            file;

        if (files && files.length) {
          file = files[0];

          if (/^image\/\w+$/.test(file.type)) {
            if (blobURL) {
              URL.revokeObjectURL(blobURL); // Revoke the old one
            }

            blobURL = URL.createObjectURL(file);
            $image.cropper("reset", true).cropper("replace", blobURL);
            $inputImage.val("");
          } else {
            showMessage("Please choose an image file.");
          }
        }
      });
    } else {
      $inputImage.parent().remove();
    }

    $("#download").click(function () {
      window.open($image.cropper("getDataURL"));
    });

    var $zoomWith = $("#zoomWith");

    $("#zoom").click(function () {
      $image.cropper("zoom", $zoomWith.val());
    });


    var $rotateWith = $("#rotateWith");

    $("#rotate").click(function () {
      $image.cropper("rotate", $rotateWith.val());
    });


    var $getDataInto = $("#getDataInto");

    $("#getData").click(function () {
      var data = $image.cropper("getData"),
          val = "";

      try {
        val = JSON.stringify(data);
      } catch (e) {
        console.log(data);
      }

      $getDataInto.val(val);
    });


    var $setDataX = $("#setDataX"),
        $setDataY = $("#setDataY"),
        $setDataWidth = $("#setDataWidth"),
        $setDataHeight = $("#setDataHeight");

    $("#setData").click(function () {
      var data = {
            x: $setDataX.val(),
            y: $setDataY.val(),
            width: $setDataWidth.val(),
            height: $setDataHeight.val()
          };

      $image.cropper("setData", data);
    });


    var $setAspectRatioWith = $("#setAspectRatioWith");

    $("#setAspectRatio").click(function () {
      $image.cropper("setAspectRatio", $setAspectRatioWith.val());
    });
		$image.cropper("setAspectRatio", "auto");

    var $replaceWith = $("#replaceWith");

    $("#replace").click(function () {
      $image.cropper("replace", $replaceWith.val());
    });


    var $getImageDataInto = $("#getImageDataInto");

    $("#getImageData").click(function () {
      var data = $image.cropper("getImageData"),
          val = "";

      try {
        val = JSON.stringify(data);
      } catch (e) {
        console.log(data);
      }

      $getImageDataInto.val(val);
    });


    var $dataURLInto = $("#dataURLInto"),
        $dataURLView = $("#dataURLView");

    $("#getDataURL").click(function () {
      var dataURL = $image.cropper("getDataURL");

      $dataURLInto.text(dataURL);
      $dataURLView.html('<img src="' + dataURL + '">');
    });

    $("#getDataURL2").click(function () {
      var dataURL = $image.cropper("getDataURL", "image/jpeg");

      $dataURLInto.text(dataURL);
      $dataURLView.html('<img src="' + dataURL + '">');
    });

    $("#getDataURL3").click(function () {
      var dataURL = $image.cropper("getDataURL", {
            width: 160,
            height: 90
          });

      $dataURLInto.text(dataURL);
      $dataURLView.html('<img src="' + dataURL + '">');
    });

    $("#getDataURL4").click(function () {
      var dataURL = $image.cropper("getDataURL", {
            width: 320,
            height: 180
          }, "image/jpeg", 0.8);

      $dataURLInto.text(dataURL);
      $dataURLView.html('<img src="' + dataURL + '">');
    });

    $(".docs-options :radio").on("change", function () {
      var $this = $(this);

      if ($this.is(":checked")) {
        options[$this.attr("name")] = $this.val() === "true" ? true : false;
        $image.cropper("destroy").cropper(options);
      }
    });

    $("[data-toggle='tooltip']").tooltip();
  }());

  // Sidebar
  // -------------------------------------------------------------------------

  // Examples
  // -------------------------------------------------------------------------

  // Example 1
  $(".fixed-dragger-cropper > img").cropper({
    aspectRatio: 640 / 320, // 2 / 1
    autoCropArea: 0.6, // Center 60%
    multiple: false,
    dragCrop: false,
    dashed: false,
    movable: false,
    resizable: false,
    built: function () {
      $(this).cropper("zoom", 0.5);
    }
  });


  // Example 2
  var $image = $(".bootstrap-modal-cropper > img"),
      originalData = {};

  $("#bootstrap-modal").on("shown.bs.modal", function () {
    $image.cropper({
      multiple: true,
      data: originalData,
      done: function (data) {
        console.log(data);
      }
    });
  }).on("hidden.bs.modal", function () {
    originalData = $image.cropper("getData"); // Saves the data on hide
    $image.cropper("destroy");
  });


	
	$(".first>a").click(function(){
	if(check()) {
		$(".content>img").attr("src", "img/step2.jpg");
		$(this).parent().hide();
		$(".second").show();
	}
});
$(".second>a").eq(0).click(function(){
	$(".content>img").attr("src","img/step1.jpg");
	$(this).parent().hide();
	$(".first").show();
});

$(".third>a").eq(0).click(function(){
	$(".content>img").attr("src","img/step2.jpg");
	$(this).parent().hide();
	$(".second").show();
});
$("#sub").click(function(){
	$(".content>img").attr("src","img/step4.jpg");
	$(this).parent().hide();
	$(".subLoading").show().children("p").text("提交中");;
	setTimeout(function(){
		$(".fourth").show();
		$(".subLoading").hide();
	},2000);
});
//  监听回车事件
$(".first input").keyup(function(e){
	check();
	if(e.keyCode == 13){
		if(!check()){
			$(".content>img").attr("src","img/step2.jpg");
			$(this).parent().hide();
			$(".second").show();
		}
	}
});


$(".file_1").click(function(){
	$(".choseImg_1").show();
	$(".choseImg_1 .imgBoxyulan").height($(".choseImg_1 .imgBoxyulan").width()/1.57);
	$(".choseImg_1 .imgBox").height($(".choseImg_1 .imgBox").width()/1.57);
});
$(".file_2").click(function(){
	$(".choseImg_2").show();
	$(".choseImg_2 .imgBoxyulan").height($(".choseImg_2 .imgBoxyulan").width()/1.57);
	$(".choseImg_2 .imgBox").height($(".choseImg_2 .imgBox").width()/1.57);
});

//  失去焦点
$(".first input").blur(function(){
	check();
});

//  检验姓名、电话号码、身份证号
function check(){
	var flag_name = false;
	var flag_tel = false;
	var flag_num = false;
	if( /[\u3400-\u9FFF\s]+$/.test($(".name").val()) ){
		if($(".name").val().length >1 && $(".name").val().length <= 8 ){
			$(".tip_name").css("opacity","0");
			flag_name = true;
		}else{
			$(".tip_name").css("opacity","1");
		}
	}else{
		$(".tip_name").css("opacity","1");
	}
	if(!(/^[0-9\-]{8,20}$/.test($(".tel").val()))){
		$(".tip_tel").css("opacity","1");
	}else{
		$(".tip_tel").css("opacity","0");
		flag_tel = true;
	}
	if($(".num").val() == "" || $(".num").val() == null){
		$(".tip_num").css("opacity","1");
	}else{
		if(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test($(".num").val()) || /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/.test($(".num").val()) ){
			$(".tip_num").css("opacity","0");	
			flag_num = true;
		}else{
			$(".tip_num").css("opacity","1");	
		}
	}
	if(flag_name && flag_tel && flag_num){
		$(".first>a").css("background","#ff8315");
		return true;
	}else{
		$(".first>a").css("background","#777777");
		return false;
	}
}

$(".subLoading").css("left",(document.body.clientWidth-$(".subLoading").width()-40)/2+"px");


$("#imgReplaceBtn").click(function(){
	$(".container").show();
	$("#getDataURL2").attr("data-index","1");
});

$("#imgReplaceBtn_2").click(function(){
	$(".container").show();
	$("#getDataURL2").attr("data-index","2");
});



// 确定按钮
$("#getDataURL2").click(function(){
	var index = $(this).attr("data-index");
	$(".container").hide();
	$(".subLoading").show().children("p").text("裁剪中");
	setTimeout(function(){
		if(index == 1) $(".myimg").attr("src",$("#dataURLView>img").attr("src"));
		if(index == 2) $(".myimg_2").attr("src",$("#dataURLView>img").attr("src"));
		$(".subLoading").hide();
	},2000);
	setTimeout(function(){
		$(".img-container>img").attr("src","");
		$(".cropper-container").remove();
		
		if($(".myimg").attr("src") != '' && $(".myimg_2").attr("src") != ''){
			$(".second>a").eq(1).css("background","#ff8315");
			$(".second>a").eq(1).click(function(){
				$(".content>img").attr("src","img/step3.jpg");
				$(this).parent().hide();
				$(".third").show();
				$(".third>img").eq(0).attr("src",$(".myimg").attr("src"));
				$(".third>img").eq(1).attr("src",$(".myimg_2").attr("src"));
				$(".third>p").eq(0).children("span").text($(".name").val());
				$(".third>p").eq(1).children("span").text($(".tel").val());
				$(".third>p").eq(2).children("span").text($(".num").val());
			})
		}	
	},2100);
});

// 关闭裁剪框
$("#close").click(function(){
	$(".container").hide();
	$(".img-container>img").attr("src","");
	$(".cropper-container").remove();
});


});
