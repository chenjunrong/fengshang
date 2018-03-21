		$(window).load(function(){       
            $(".paoguang-List li").on("click",".bigBtn",function(){
                 $(this).parent().siblings().find('img').click();
            })
            
		});