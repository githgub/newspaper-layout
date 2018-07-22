//轮播图next切换事件2
function nextSlidEvent(){
  var slidboxs=document.getElementsByClassName("slidebox")
  
  for(var i=0;i<slidboxs.length;i++)
  {  
    if(slidboxs[i].style.display=="block")
    {
      console.log("yesss");
      var sib=slidboxs[i].nextSibling;
      while(sib.nodeType===3)
      {
        sib=sib.nextSibling;//查找下一个不是空节点的同胞元素
        console.log("yes");
        console.log(sib.nodeType);
      }
      
      sib.style.display="block";//下一个同胞元素设置为block
      document.getElementById("slide-ul").style.left="-100%";
      setInterval(function(){slidboxs[i].style.display="none";},2000);//延时两秒后执行
      
      break;
    }
  
  }

}


//
function btnSlidEvent(obj){
  var slidboxs=document.getElementsByClassName("slidebox")
  var a=[1,2,3,4];
  
  for(var i=0;i<slidboxs.length;i++)
  {  
    if(slidboxs[i].attributes["active"]=="true"){
      var ida=slidboxs[i].id.split("slidebox")[1];
      var idb=obj.id.split("slidebox")[1];

     if(ida<idb)
     {
      a[ida+1]=idb;
      
     }
     else
     {
      
     }
    }
    
  }
}

function getattributes(){
  document.getElementById("1").setAttribute("a","b");
  var value=document.getElementById("1").attributes["a"].nodeValue;//attributes可访问自定义属性
  console.log(value);
}
function setSlideAttribute(){
  var slidboxs=document.getElementsByClassName("slidebox")
  slidboxs[0].setAttribute("active","true");
  for(var i=1;i<slidboxs.length;i++)
  {  
    slidboxs[i].setAttribute("active","false");
  }
}
window.onload=function (){
  getattributes();
  setSlideAttribute();
}




