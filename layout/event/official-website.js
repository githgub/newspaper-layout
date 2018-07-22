/*全局变量*/
/*导航栏*/ function aclick(obj) {
  var e = document.getElementsByTagName("a");
  for (var i = 0; i < e.length; i++) {
    e[i].className = "navbarlink";
  }
  //obj.className="aClick";
  obj.classList.add("aClick");
}
function clickA() {
  var e = document.getElementsByTagName("a");
  for (var i = 0; i < e.length; i++) {
    var n = i + 1;
    e[i].onclick = function() {
      aclick(this);
    };
  }
}
/*下拉列表*/
/*下拉按钮点击事件*/
function menuBtClick(obj) {
 
  var e = document.getElementsByClassName("dropdownmenu");
  for (var i = 0; i < e.length; i++) {
  
    if (e[i].parentNode == obj.parentNode) {
      if (e[i].style.display == "none") {
        e[i].style.display = "block";
        obj.style.border="1px solid red";
      } else {
        e[i].style.display = "none";
        obj.style.border="0px";
      }
    }
  }
}
/*为所有下拉按钮设置点击事件*/
function allMenuBt() {
  var e = document.getElementsByClassName("clickbutton");
  for (var i = 0; i < e.length; i++) {
    e[i].onclick = function() {
      menuBtClick(this);
    }
  }
}
/*设置所有下拉菜单为display：none*/
function alldropdownMenu(){
  var e = document.getElementsByClassName("dropdownmenu");
  for (var i = 0; i < e.length; i++) {
    e[i].style.display = "none";
    };
  }
/*下拉列表选择事件*/
function menuListClick(obj){
    
    var siblingLis=obj.parentNode.childNodes;
    for(var j=0;j<siblingLis.length;j++)
    {
      console.log(siblingLis[j]);
      if(siblingLis[j].nodeType==3 && /^\s+/.test(siblingLis[j].nodeValue)){ //去除空白节点的影响  
  }
  else{
    siblingLis[j].style.border="0px";
  }    
    }
    obj.style.border="1px solid red";
  var e=document.getElementsByClassName("clickbutton");
  for (var i = 0; i < e.length; i++) {
      if(e[i].parentNode==obj.parentNode.parentNode)
      {
        e[i].innerHTML=obj.innerHTML;
      }
    }
}
/*为所有li设置点击事件*/
function allMenuLi() {
  var e = document.getElementsByClassName("dropdownmenu");
  for (var i = 0; i < e.length; i++) {
    var li=e[i].childNodes;
    for (var j=0;j<li.length;j++)
    {
      li[j].onclick = function() {
        menuListClick(this);
    }

    }
  }
}
//打印页面的URL 域名 当前页面链接
function coutURL(){
  console.log("URL"+document.URL);
  console.log("域名"+document.domain);
  console.log("当前页面的来源页面的URL"+document.referrer);
}
//轮播图切换按钮事件
function slidEvent(obj){
  var slidboxs=document.getElementsByClassName("slidebox")
  
  if(obj.id=="slideBtn1")
  {
    document.getElementById("slide-ul").style.left="0";
  }
  else if(obj.id=="slideBtn2")
  {
    document.getElementById("slide-ul").style.left="-100%";
  }
  else if(obj.id=="slideBtn3")
  {
    document.getElementById("slide-ul").style.left="-200%";
  }
  else if(obj.id=="slideBtn4")
  {
    document.getElementById("slide-ul").style.left="-300%";
  }

}

//为所有轮播图切换按钮(小圆点)设置事件
function allSlidBtn(){
var slidBtns=document.getElementsByClassName("slideBtn");
for (var i=0;i<slidBtns.length;i++)
{
  slidBtns[i].onclick=function (){slidEvent(this)};
}
}


function iconSlidEvent(){
  var slidLeftIcon=document.getElementsByClassName("lefticon")[0];
  var slidRightIcon=document.getElementsByClassName("righticon")[0];

  slidLeftIcon.onclick=function (){
    var urlleft=Number(document.getElementById("slide-ul").style.left.split("%")[0]);
    var left1=urlleft+100;
    console.log(left1.toString()+"%");
    if(left1==100)
    {
      document.getElementById("slide-ul").style.left="-300%";
    }
    else
    {
      document.getElementById("slide-ul").style.left=left1.toString()+"%";
    }
    
  }
  slidRightIcon.onclick=function (){
    var urlleft;
    
    if(document.getElementById("slide-ul").style.left=="0px")
    {
      urlleft=0;
      console.log(document.getElementById("slide-ul").style.left);
    }
    else{
      urlleft=Number(document.getElementById("slide-ul").style.left.split("%")[0]);
    }
  
    var left2=urlleft-100;
    console.log(left2.toString()+"%");
    if(left2==-400)
    {
      console.log(left2);
      document.getElementById("slide-ul").style.left="0";
    }
    else{
      document.getElementById("slide-ul").style.left=left2.toString()+"%";
    }
    
  }
  }

window.onload = function() {
  clickA();
  alldropdownMenu();
  allMenuBt();
  allMenuLi();
  coutURL();
  allSlidBtn();
  iconSlidEvent();
}
