 $(function(){  // 페이지가 열리면
        
        // 메인메뉴에 마우스 닿으면 서브메뉴 보이게
        $('.main').on({
            mouseenter:function(){
                // 화면의 폭이 500이하면 서브메뉴가 각각 펼쳐짐
                $(this).children('.subMenu').stop().slideDown(300);
            },
            
            // 메인메뉴에 마우스 떠나면 서브메뉴 안보이게
            mouseleave:function(){
                $('.subMenu').stop().slideUp(200);    
            }
        });   
        
        // view 버튼으로 메뉴 보이기/숨기기
        $('#view,#blackBox').click(function(){
            $('#menu,#blackBox').fadeToggle();  // 천천히 열리고 닫히게 
        });
     
     
    
		//서브메뉴의 링크값에 따라 스타일 변경

		var no = $('.sub').length;   //서브메뉴의 총 개수

		var x;
		for(x=0;  x<no;  x++){
			var url = $('.sub').eq(x).attr('href');   //서브메뉴의 링크값
			if(url)   //링크값 여부에 따라 각각의 스타일 적용하기
				$('.sub').eq(x).addClass('menuActive');
			else
				$('.sub').eq(x).addClass('menuInactive');
		}   //end for()


		$('.sub, .main').click(function(){
			var url = $(this).attr('href');   //서브메뉴의 링크값

			//링크값이 있을 때만 해당 페이지로 이동하기
			if(url)
				window.location.href=url; 
		});   //$('.sub').click() 
        
        
    });  // $(function()
    


    
    $(window).resize(function(){  /* 화면폭을 조절할 때 */
        /* 화면폭이 500을 넘으면 메뉴를 초기화 하고, 검정 배경 숨김 */
       if($(this).width() > 500){ 
           $('#menu').removeAttr('style'); /* 메뉴의 style 속성 제거(초기화) */
           $('#blackBox').hide();  /* 검은배경 숨김 */
           
       };

    });

   // 페이지의 모든 내용(텍스트, 이미지, 동영상 등)이 읽혀지면 
    //  (preload사용할땐 (window).on('load)를 사용해야함)
    $(window).on('load',function(){  
        $('#preload').fadeOut();  // 프리로딩 화면 사라짐
        $('body').css('overflow','auto');  // 화면 스크롤 생김
        $('body').css('scrollTop','0');  // 화면 스크롤 생김
        
    });



    