

    
    var slideNo=0;
    var loop;
    
    // 슬라이드 메인 스크립트
    function slide(no){
        slideNo += no;  // 텍스트, 서클버튼용
        
        if(slideNo > 1) slideNo=0;
        if(slideNo < 0) slideNo=1;
        
        
        if(no==1)  // 다음 버튼을 클릭했을 때
            toLeft();  // 왼쪽으로 이동하는 함수 실행
        else
            toRight();  // 오른쪽으로 이동하는 함수 실행
                
        
        // 모든 서클버튼 투명 배경, 현재 서클버튼만 흰색배경
        $('.circle').css({'background':'transparent','width':'15px'})
        $('.circle').eq(slideNo).css({'background':'#FFF','width':'30px','border-radius':'20px'});
        
        
    };  // 슬라이드 메인 스크립트 slide(no)
    
        
        // WOW 스크립트
            wow = new WOW( {
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       0,          // default
                mobile:       true,       // default
                live:         true        // default
            } );

            wow.init();	//WOW 초기화
    
    
    // 슬라이드를 왼쪽으로 이동하는 함수(다음 버튼용)
    function toLeft(){
        // 1. 슬라이드 박스를 왼쪽으로 이동(헤더 폭만큼)
        $('#slideBox').stop().animate({'margin-left':'-100%'},1000,function(){
            // 2. 첫 번째 슬라이드를 슬라이드 박스 맨 뒤로 보내기
            $('.slide:first').appendTo('#slideBox');
            // 3. 슬라이드 박스를 원래 위치로 맞춤
            $('#slideBox').css('margin-left','0');
        });
        
    };
    
    
    // 슬라이드를 오른쪽으로 이동하는 함수 (이전 버튼용)
    function toRight(){
        //1. 마지막 슬라이드를 박스의 맨 앞으로 가져오기
        $('.slide:last').prependTo('#slideBox');
        // 2. 슬라이드 박스를 왼쪽으로 이동(헤더 폭만큼)
        $('#slideBox').css('margin-left','-100%');
        // 3. 슬라이드 박스를 오른쪽으로 이동하는 애니메이션
        $('#slideBox').stop().animate({'margin-left':'0'},1000);
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
        loop = setInterval('slide(1)',3000);
    }
    
    
    function stopSlide(){
        clearInterval(loop);
    }
    
	$(function(){  // 페이지 열릴 때 

		$('.left').click(function(){
            slide(-1);   
        });
                
		$('.right').click(function(){
            slide(1);   
        });
        
                        
        $('.circle').click(function(){  // 서클버튼 클릭할 때
            var no = $(this).index()  // 슬라이드 번호 맞추기
            slideNo = no;  // 서클버튼의 순번과 슬라이드 번호 맞춤
            slide(0);  // 슬라이드 실행
        });
        
        
        $('#gotop').click(function(){  // 'top'버튼 클릭할 때
            // 화면의 스크롤 위치를 맨 상단으로 변경
            $('body,html').stop().animate({'scrollTop':'0'},500)
            
        });     
        
        
        
        $('.thumb1').click(function(){  // 섬네일1 이미지 클릭할 때
            /*
            1. 모달창 보이기
            2. 모달창 제목 내용 변경(클릭한 이미지의 alt값)
            3. 모달창 이미지 변경(클릭한 이미지의 src값)
            */
            $('#modal1').css('display','flex');
            
            $('#modalTitle1').html($(this).attr('alt'));
            
             $('#modalImage1');
            
        });
           
        
        $('.thumb2').click(function(){  // 섬네일2 이미지 클릭할 때
            /*
            1. 모달창 보이기
            2. 모달창 제목 내용 변경(클릭한 이미지의 alt값)
            3. 모달창 이미지 변경(클릭한 이미지의 src값)
            */
            $('#modal2').css('display','flex');
            
            $('#modalTitle2').html($(this).attr('alt'));
            
            $('#modalImage2');
            
        });
        
        
        $('#modalClose1').click(function(){  //모달창 닫기버튼 클릭할 때
        
            $('#modal1').fadeOut(300);  // 모달창 서서히 사라짐
            
        });
        
        $('#modalClose2').click(function(){  //모달창 닫기버튼 클릭할 때
            $('#modal2').fadeOut(300);  // 모달창 서서히 사라짐
        });
                

	});  //$(function()



    // 화면 해상도별 슬라이드 이미지 변경
    function autoChange(){
        if($(window).width() < 500) {  // 화면폭이 500미만일 때
            $('.slide').eq(0).attr('src','images/mini1.jpg');
            $('.slide').eq(1).attr('src','images/mini2.jpg');
            $('.new').attr('src','images/new.png');

        }
        else {  // 그렇지 않으면(500이상일 때)
            $('.slide').eq(0).attr('src','images/main1.jpg');
            $('.slide').eq(1).attr('src','images/main2.jpg');
            $('.new').attr('src','images/new2.png');
        }
    };

    // 창 열릴때, 창크기 조절할때 autoChange 실행하기
    $(document).ready(autoChange);
    $(window).resize(autoChange);







