const main=document.querySelector(".main");
const cursor=document.querySelector(".cursor");
const imagediv=document.querySelector(".image")

main.addEventListener("mousemove",function(dets)
{
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
  })
})

imagediv.addEventListener("mouseenter",function(dets)
{
  cursor.innerHTML="view more"
  gsap.to(cursor,{
    scale:5,
    backgroundColor:"#ffffff5c"
  })
})

imagediv.addEventListener("mouseleave",function(dets)
{
  cursor.innerHTML="";
  gsap.to(cursor,{
    scale:1,
    backgroundColor:"#fff"
  })
})