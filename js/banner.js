(function($){
	$.fn.banner = function(Onit){
		return this.each(function(){
			return banner(Onit,this)
		})
	}
	
	var banner = function(options,obj){
		var imgLength,			//传入参数个数
			num = 0,			
			loadImgDiv,			//html代码生成方法定义
			scroll,			  	//自动切换方法定义
			init;             	//初始化方法定义
		var settings = $.extend({},$.fn.banner.defaults,options);
		imgLength = settings.imgTotal.length;
		console.log(settings);
		
		loadImgDiv = function(){
			var imgListDiv = "",
				imgListIconDiv = "";
			if(settings.imgTotal != undefined)
			{
				$.each(settings.imgTotal,function(){
					imgListDiv += '<dd><img src='+this.imgUrl+'/></dd>';
					imgListIconDiv += '<span></span>';
				})
			}
			var bannerHtml = '<dl class="imgList">'+imgListDiv+'</dl><div class="imgListIcon icon">'+imgListIconDiv+'</div>';
			return bannerHtml;
		}
		
		scroll = function(){
			num < imgLength-1 ? num ++ : num = 0;
	    	$(obj).find("span").eq(num).addClass("cur").siblings().removeClass("cur");
	    	$(obj).find("dd").eq(num).fadeIn(1000).siblings().fadeOut(1000);
		}
		
		init = function(){
			$(obj).empty().append(loadImgDiv());
			$(obj).find("span").eq(0).addClass("cur");
			$(obj).on("click",function(e){
				var _this = $(e.target) || $(window.event.target);
				if(_this.is("span"))
				{
					var i = _this.index();
		  			_this.addClass("cur").siblings().removeClass("cur");
		  			_this.parent().siblings("dl").find("dd").eq(i).fadeIn(1000).siblings().fadeOut(1000);
				}
			});
			int1 = setInterval(scroll,3000);
	  		$(obj).mouseover(function(){
	  			clearInterval(int1);
	  		});
	  		$(obj).mouseout(function(){
	  			int1 = setInterval(scroll,3000);
	  		})
		}
		return init();
	}
	
	
	$.fn.banner.defaults = {
		imgTotal:[{
					imgUrl:"img/pic1.png",
					imgTxt:"进入夏季以来,气温逐渐升高,对于爱车也是不小的考验。面临夏季的酷暑爱车我们又需要注意哪些安全事项呢?下面我们就来聊一聊夏季用车那些事。 严防水温过高 在夏季..."
				},
				{
					imgUrl:"img/pic2.png",
					imgTxt:"进入夏季以来,气温逐渐升高,对于爱车也是不小的考验。面临夏季的酷暑爱车我们又需要注意哪些安全事项呢?下面我们就来聊一聊夏季用车那些事。 严防水温过高 在夏季..."
				},
				{
					imgUrl:"img/pic3.png",
					imgTxt:"进入夏季以来,气温逐渐升高,对于爱车也是不小的考验。面临夏季的酷暑爱车我们又需要注意哪些安全事项呢?下面我们就来聊一聊夏季用车那些事。 严防水温过高 在夏季..."
				},
				{
					imgUrl:"img/pic1.png",
					imgTxt:"进入夏季以来,气温逐渐升高,对于爱车也是不小的考验。面临夏季的酷暑爱车我们又需要注意哪些安全事项呢?下面我们就来聊一聊夏季用车那些事。 严防水温过高 在夏季..."
				},
				{
					imgUrl:"img/pic2.png",
					imgTxt:"进入夏季以来,气温逐渐升高,对于爱车也是不小的考验。面临夏季的酷暑爱车我们又需要注意哪些安全事项呢?下面我们就来聊一聊夏季用车那些事。 严防水温过高 在夏季..."
				},
				{
					imgUrl:"img/pic3.png",
					imgTxt:"进入夏季以来,气温逐渐升高,对于爱车也是不小的考验。面临夏季的酷暑爱车我们又需要注意哪些安全事项呢?下面我们就来聊一聊夏季用车那些事。 严防水温过高 在夏季..."
				}]
	}
	
}(jQuery))