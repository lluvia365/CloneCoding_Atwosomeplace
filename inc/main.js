

    var slideNo = 0;  // 슬라이드 번호
    var loop;  // setInterval 제어용(자동실행 제어)
    
    function slide(no){
        slideNo += no;  // 슬라이드 번호를 전달받은 값만큼 변화시킴 (1 or -1)
        
        if(slideNo>1) slideNo=0; 
        if(slideNo<0) slideNo=1;
        
        console.log(slideNo);
        
        // 1. 모든 슬라이드 이미지 숨기기
        $('.hslide').hide();
        
        // 1. 모든 서클버튼 초기화(투명)
        $('.circle').css('background','transparent');
        
        
        // 2. 현재 슬라이드 이미지만 보이기
        $('.hslide').eq(slideNo).css('display','block');
        
        //2. 현재 서클버튼 흰색 배경
        $('.circle').eq(slideNo).css('background','#fff');

        
    }  // function slide(no)
    
    
    function playSlide(){  // 슬라이드 자동 실행 시작
        loop = setInterval('slide(1)',3000);  // 3초 간격으로 slide() 실행
    }
    
    function stopSlide(){  // 슬라이드 자동 실행 중지
        clearInterval(loop);
    }
    
    
    $(function(){
        
        // 헤더에 마우스 닿으면 슬라이드 재생 중지
        $('#header').mouseenter(function(){
           stopSlide(); 
        });
        
        // 헤더에 마우스 떠나면 슬라이드 재생 시작
        $('#header').mouseleave(function(){
            playSlide();
        });
        
        // 이전 버튼 클릭하면 슬라이드를 이전으로 되돌림
        $('.left').click(function(){
           slide(-1); 
        });
        
        // 다음 버튼 클릭하면 슬라이드를 다음으로 넘김
        $('.right').click(function(){
            slide(1);
        });
        
        // 서클버튼 클릭하면 해당 순번의 슬라이드로 맞추기
        $('.circle').click(function(){
            slideNo = $(this).index();  // 슬라이드 번호 맞추기
            slide(0);     // 슬라이드 변경하기
        });
        
        
        
    });  // $(function())


