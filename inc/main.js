

    
    var w;  // 슬라이드의 가로폭 계산용
    
    var loop;  // 자동 슬라이드 제어용
    
    // 화면 크기에 따라 슬라이드 폭 계산
    function autoWidth(){
        
        // 슬라이드 폭 계산 : 섹션의 3등분(화면에 3장씩 보이게)
        w = $('#secA').width() / 3;
        
        // 700px 미만 화면에서 슬라이드 1장씩 보이게 (100%)
        if($(window).width() < 700)
            w = $('#secA').width();
        
        
        
        // 슬라이드 폭 변경(계산된 크기로 맞춤)
        $('.slide').css('width',w);  // = ('.slide').width(w)
        
        // 슬라이드 박스의 폭 변경(슬라이드폭(1장당폭)*개수)
        $('#slideBox').css('width',w*6);
        
    };  // autoWidth()
    
    
    // 페이지가 열리거나 창의 크기가 변경될 때 슬라이드 폭 자동 조절하기
    $(document).ready(autoWidth);
    $(window).resize(autoWidth);
    
    
    
    // 페이지 로드/다음 버튼용 슬라이드를 왼쪽으로 이동
    function toLeft(){
        
        // 화면의 폭이 700px 이상이면 가운데 슬라이드를 줌 인(확대)
        // 700px 미만이면 동일한 크기로 맞춤
        if($(window).width() >= 700){
        $('.slide').css('transform','scale(.9)');  // 전체 슬라이드 10% 축소후
        $('.slide').eq(2).css('transform','scale(1.1)');  // 중앙으로 들어올 슬라이드(3번슬라이드) 10% 확대
        }
        
        else
             $('.slide').css('transform','scale(1)');  // 전체 슬라이드를 원래 크기로 맞춤
        
        // 슬라이드 왼쪽으로 진행후 마지막으로 이동
        $('#slideBox').stop().animate({'margin-left':-w},600,function(){
            // 첫번째 슬라이드를 슬라이드 박스 맨뒤로 이동
           $('.slide:first').appendTo('#slideBox');
            // 슬라이드 박스를 원래위치로 되돌림
            $('#slideBox').css('margin-left',0);
        });
    };  // toLeft()
      
    
    // 페이지 로드/이전 버튼용 슬라이드를 오른쪽으로 이동
    function toRight(){
        
        // 화면의 폭이 700px 이상이면 가운데 슬라이드를 줌 인(확대)
        // 700px 미만이면 동일한 크기로 맞춤
        if($(window).width() >= 700){        
        
        $('.slide').css('transform','scale(.9)');  // 전체 슬라이드 10% 축소후
        $('.slide').eq(0).css('transform','scale(1.1)');  // 중앙으로 들어올 슬라이드(1번슬라이드) 10% 확대
        }
        
        else
            $('.slide').css('transform','scale(1)');  // 전체 슬라이드를 원래 크기로 맞춤
        
        // 마지막 슬라이드를 슬라이드 박스 맨앞으로 이동 후 슬라이드 진행
        $('.slide:last').prependTo('#slideBox');
        // 슬라이드 박스를 왼쪽으로 이동(슬라이드 1장값)
        $('#slideBox').css('margin-left',-w);
        // 슬라이드 박스를 헤더 안으로(원래위치로) 이동
        $('#slideBox').stop().animate({'margin-left':0},600);  
    };


    
    $(window).scroll(function(){  // 화면을 스크롤할 때
        // 스크롤 위치가 100픽셀을 넘으면 'top'버튼 보이기
        // 그렇지 않으면(100픽셀 이하) 'top'버튼 숨기기
        
        if($(this).scrollTop()>100)
            $('#gotop').css('transform','scale(1)')
        else
            $('#gotop').css('transform','scale(0)');
    });
    

   
    function playSlide(){
        loop = setInterval('toLeft()',3000);
    }
    
    
    function stopSlide(){
        clearInterval(loop);
    }
    
	$(function(){  // 페이지 열릴 때 

		$('.right').click(function(){  // 다음 버튼 클릭
            // 만약 슬라이드박스가 애니메이션중이 아니면(안움직이면)
            if(!$('#slideBox').is(':animated'))
            toLeft();  // 다음 슬라이드 보기 (슬라이드 왼쪽으로 이동)
        });
        
		$('.left').click(function(){  // 이전 버튼 클릭
            // 만약 슬라이드박스가 애니메이션중이 아니면(안움직이면)
            if(!$('#slideBox').is(':animated'))
            toRight();  // 이전 슬라이드 보기 (슬라이드 오른쪽으로 이동)
        });   
        
        
        $('#gotop').click(function(){  // 'top'버튼 클릭할 때
            // 화면의 스크롤 위치를 맨 상단으로 변경
            $('body,html').stop().animate({'scrollTop':'0'},500)
            
        });        
                

	});  //$(function()






