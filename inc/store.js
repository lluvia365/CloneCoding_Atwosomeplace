

    
    $(window).scroll(function(){  // 화면을 스크롤할 때
        // 스크롤 위치가 100픽셀을 넘으면 'top'버튼 보이기
        // 그렇지 않으면(100픽셀 이하) 'top'버튼 숨기기
        
        if($(this).scrollTop()>100)
            $('#gotop').css('transform','scale(1)')
        else
            $('#gotop').css('transform','scale(0)');
    });
    


	$(function(){  // 페이지 열릴 때 

        
        $('#gotop').click(function(){  // 'top'버튼 클릭할 때
            // 화면의 스크롤 위치를 맨 상단으로 변경
            $('body,html').stop().animate({'scrollTop':'0'},500)
            
        });        
                

	});  //$(function()






