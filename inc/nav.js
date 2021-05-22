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
        
        
    });  // $(function()
    


    
    $(window).resize(function(){  /* 화면폭을 조절할 때 */
        /* 화면폭이 500을 넘으면 메뉴를 초기화 하고, 검정 배경 숨김 */
       if($(this).width() > 500){ 
           $('#menu').removeAttr('style'); /* 메뉴의 style 속성 제거(초기화) */
           $('#blackBox').hide();  /* 검은배경 숨김 */
           
       };

    });



    