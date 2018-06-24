window.onload=function(){
    let banner=document.querySelector(".banner");
    let list=document.querySelectorAll(".box li");
    let point=document.querySelectorAll(".point li");
    let currenindex=0;
    let t=setInterval(move,2500);
    list[0].style.zIndex=10;
    point[0].style.className="hot";
    function move(){
        currenindex++;
        if(currenindex==list.length){
            currenindex=0;
        }
        list.forEach(function(element,index,obj){
            element.style.zIndex=5;
        })
        point.forEach(function(element,index,obj){
            element.className="";   
        })
        list[currenindex].style.zIndex=10;
        point[currenindex].className="hot";
    }
    function moveL(){
        currenindex--;
        if(currenindex<0){
            currenindex=list.length-1;
        }
        list.forEach(function(element,index,obj){
            element.style.zIndex=5;
        })
        point.forEach(function(element,index,obj){
            element.className="";   
        })
        list[currenindex].style.zIndex=10;
        point[currenindex].className="hot";
    }
 //鼠标移入
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        t=setInterval(move,2500);
    }

    //轮播点
    for(let i=0;i<point.length;i++){
       point[i].onclick=function(){
            list.forEach(function(element){
                element.style.zIndex=5;
            })
            point.forEach(function(element){
                element.className="";   
            })
            list[i].style.zIndex=10;
            point[i].className="hot";
            currenindex=i;
       }
    }
}