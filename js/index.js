// 鼠标移动到按钮上切图，和换背景色
window.onload=function(){
//banner效果  
  	var btns=document.getElementsByClassName("btn");
  	var tu=document.getElementsByClassName("banner-item");
  	var bg=document.getElementsByClassName("banner-box")[0];
  	var arr=["#00baff","#e9e7ea","#fb0102","#e8e8e8","#2cb1f6","#ffffff"]
  	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;  //给每个按钮对象添加一个index属性 值为他在集合中的下标。
		btns[i].onmouseover=function(){
			num=this.index;
			for (var i = 0; i < btns.length; i++) {
				tu[i].style.zIndex="1";
				btns[i].style.border="2px solid #999";
                btns[i].style.backgroundColor="#999";
			};
              tu[this.index].style.zIndex="2";
              btns[this.index].style.border="2px solid #555" 
              bg.style.backgroundColor=arr[this.index];
              btns[this.index].style.backgroundColor="#fff";
		}
	}
	   //自动切换效果
    	var num=0;
    	var t=setInterval(move,3000)
    	function move(){
            num++;
            if (num==tu.length) {
                num=0;
            };
    	    for (var i = 0; i < btns.length; i++){
    		tu[i].style.zIndex="1";
    		btns[i].style.border="2px solid #999";
    		btns[i].style.backgroundColor="#999"
    	};
          tu[num].style.zIndex="2";
          btns[num].style.border="2px solid #555";
          btns[num].style.backgroundColor="#fff"
          bg.style.backgroundColor=arr[num];
    	}
        bg.onmouseover=function(){
            clearInterval(t)
        }
        bg.onmouseout=function(){
        	t=setInterval(move,3000)
        }
       //banner文字
      var left1s=$(".biao");
      var bannertext=$(".banner-text");
      for (var i = 0; i < left1s.length; i++) {
         left1s[i].index=i;
         hover(left1s[i],function(){
         bannertext[this.index].style.display="block";
         },function(){
          bannertext[this.index].style.display="none";
          })
        }
        for (var i = 0; i < bannertext.length; i++) {
          bannertext[i].index=i;
          hover(bannertext[i],function(){
          bannertext[this.index].style.display="block";
         },function(){
          bannertext[this.index].style.display="none";
          })
        };
//遮罩效果
    	var maxs=document.getElementsByClassName("max");
    	var zzs=document.getElementsByClassName("zz");
    	for (var i = 0; i < maxs.length; i++){
    		maxs[i].index=i;
    		maxs[i].onmouseover=function(){
    		zzs[this.index].style.opacity="0.8"
    			};
            maxs[i].onmouseout=function(){
            zzs[this.index].style.opacity="0";
            }
    		}
// 左侧导航效果
		var left1s=document.getElementsByClassName("left1")
		var arr1=["#f7a945","#19c8a9","#f15453","#64c333","#0aa6e8","#ea5f8d","#000","#000"]
		for (var i = 0; i < left1s.length; i++) {
			left1s[i].index=i;
			left1s[i].onmouseover=function(){
               this.style.backgroundColor=arr1[this.index]
			}
			left1s[i].onmouseout=function(){
               this.style.backgroundColor="";
		};
	   }
	   // 导航的滚动条效果
	   var left_header=$(".left-header")[0];
	   var show=$(".show-box")[0];
	   document.documentElement.scrollTop=1
	   var flag1=true;
	   var flag2=true;
	   if (document.documentElement.scrollTop==1) {
        	var	scrollTopobj=document.documentElement;
        	}else{
        	var	scrollTopobj=document.body 
        	}
	   addEvent(window,"scroll",function(){
           var st=scrollTopobj.scrollTop;
           if (st>650) {
           	if (flag1) {
           	 flag1=false;flag2=true;
           	animate(left_header,{width:36,height:370},500)
           	animate(show,{top:0},200)
           	};
           }else{
           	if (flag2) {;
           	flag1=true;flag2=false;
           	animate(left_header,{width:0,height:0},500)
           	animate(show,{top:-50},500)
           	}
           }
	   })
	    //楼层跳转效果
         var floor=$(".floor");
         var floorbtn=$(".left1");
         var arr2=["#f7a945","#19c8a9","#f15453","#64c333","#0aa6e8","#ea5f8d","#dd2727","#dd2727"];
         for (var i = 0; i < floorbtn.length; i++) {
         	floorbtn[i].index=i;
          floorbtn[i].onclick=function(){
          var ot=floor[this.index].offsetTop;
          	animate(scrollTopobj,{scrollTop:ot})
          }
          };
          addEvent(window,"scroll",function(){
            var up=scrollTopobj.scrollTop;
            for (var i = 0; i < floor.length; i++) {
             // floor[i].index=i;
             var op=floor[i].offsetTop;
             if (up+500>op){
              for (var j = 0; j < floor.length; j++) {
                floorbtn[j].style.backgroundColor="";
              }
              floorbtn[i].style.backgroundColor=arr2[i];
             };
            };
          })
	   //回到顶部
	   var totop=$(".left0")[0];
       totop.onclick=function(){
       var obj=document.body.scrollTop==0?document.documentElement:document.body;
         animate(obj,{scrollTop:0},200)
       }
// 右侧导航效果
   //飞入效果
   var item_r=$(".item-r");
   var names=$(".name");
   var t;
   for (var i = 0; i < item_r.length; i++) {
    item_r[i].index=i;
    hover(item_r[i],function(){
    var that=this;
    clearTimeout(t);
    t=setTimeout(function(){
    names[that.index].style.display="block";
    animate(names[that.index],{left:-80,opacity:1},200) 
   },200);
    },function(){
    clearTimeout(t);
    animate(names[this.index],{left:-120,opacity:0.7},200,function(){
    this.style.display="none";
     }) 
    },200)
    }
    //回到顶部
   var totop1=$(".right10")[0];
     totop1.onclick=function(){
       var obj=document.body.scrollTop==0?document.documentElement:document.body;
         animate(obj,{scrollTop:0},200)
       }
      //滚动条事件（当滚动条高度大于500，totop1显现，小于500，隐藏）
      addEvent(window,"scroll",function(){
      var obj=document.body.scrollTop==0?document.documentElement:document.body;
       if(obj.scrollTop>650) {
        animate(totop1,{opacity: 1},200);
       }else{
        animate(totop1,{opacity: 0},200);
       }
      })
    // 二维码效果
    var er=$(".right9")[0];
    var ers=$(".er-box")[0];
    er.onmouseover=function(){
      ers.style.display="block";
    }
    er.onmouseout=function(){
    ers.style.display="none";
    }
  // 顶部效果
    //手机版效果
    var phone=$(".myphone")[0];
    var conter=$(".phone")[0];
    hover(phone,function(){
      conter.style.display="block";
    },function(){
      conter.style.display="none";
    },200)
    hover(conter,function(){
      conter.style.display="block";
    },function(){
      conter.style.display="none";
    },200)
    //我的淘宝效果
    var tao=$(".tao")[0];
    var taobao=$(".taobao")[0]
    hover(tao,function(){
      tao.style.backgroundColor="#fff"
      taobao.style.display="block";
    },function(){
      taobao.style.display="none";
      tao.style.backgroundColor=""
    },200)
     hover(taobao,function(){
      tao.style.backgroundColor="#fff"
      tao.style.color= '#c40000'
      taobao.style.display="block";
    },function(){
      taobao.style.display="none";
      tao.style.backgroundColor=""
      tao.style.color= '';
    },200)
    // 收藏夹效果
     var jia=$(".jia")[0];
     var jiabox=$(".jia-box")[0]
     hover(jia,function(){
      jia.style.backgroundColor="#fff"
      jiabox.style.display="block";
    },function(){
      jiabox.style.display="none";
      jia.style.backgroundColor=""
    },200)
     hover(jiabox,function(){
      jia.style.backgroundColor="#fff"
      jia.style.color= '#c40000'
      jiabox.style.display="block";
    },function(){
      jiabox.style.display="none";
      jia.style.backgroundColor=""
      jia.style.color='';
    },200)
   // 商家支持效果
   var shop=$(".shop")[0];
   var shopp=$(".shopping")[0];
    hover(shop,function(){
      shop.style.backgroundColor="#fff"
      shopp.style.display="block";
    },function(){
      shopp.style.display="none";
      shop.style.backgroundColor=""
    },200)
     hover(shopp,function(){
      shop.style.backgroundColor="#fff"
      shop.style.color= '#c40000'
      shopp.style.display="block";
    },function(){
      shopp.style.display="none";
      shop.style.backgroundColor=""
      shop.style.color= '';
    },200)
     //网站导航效果
   var wang=$(".wang")[0];
   var wangs=$(".wang-box")[0];
    hover(wang,function(){
      wang.style.backgroundColor="#fff"
      wangs.style.display="block";
    },function(){
      wangs.style.display="none";
      wang.style.backgroundColor=""
    },200)
     hover(wangs,function(){
      wang.style.backgroundColor="#fff"
      wang.style.color= '#c40000'
      wangs.style.display="block";
    },function(){
      wangs.style.display="none";
      wang.style.backgroundColor=""
      wang.style.color= '';
    },200)
  //潮流效果
  var images=$(".chao")
  // console.log(images)
  var trenditem=$(".trend");
  // console.log(trenditem)
  for (var i = 0; i < trenditem.length; i++) {
    trenditem[i].index=i;
    trenditem[i].onmouseover=function(){
    animate(images[this.index],{width:140,height:140,marginLeft:49,marginTop:5},200)
   }
   trenditem[i].onmouseout=function(){
   animate(images[this.index],{width:120,height:120,marginLeft:59,marginTop:15},200)
   }
 }
 //按需加载
   var onloads=$(".onload");
  // console.log(onloads)
  var onls=[];
  for (var i = 0; i <onloads.length; i++) {
    onls.push(onloads[i].offsetTop)
  };
  var doc=getDoc()
  doc.scrollTop=1;
  h=document.documentElement.clientHeight;
  addEvent(window,"scroll",function(){
    var op=doc.scrollTop;
    // console.log(op)
    for (var i = 0; i < onloads.length; i++) {
      if(op+h>onls[i]&&onloads[i].getAttribute("flag")!="true"){
         var imgs=$("img",onloads[i]);
        // console.log(imgs)
        for (var j = 0; j < imgs.length; j++) {
         imgs[j].src=imgs[j].getAttribute("asrc")
       }
       onloads[i].setAttribute("flag",true);
      }
    };
  })
}