var tl=gsap.timeline();
var full = document.querySelector(".full");
var home = document.querySelector(".nav i");
var close = document.querySelector(".full i");


  tl.to(full,{
    right:0,
  })


  tl.from(".full h4",
    {
      x:150,
      opacity:0,
      duration:0.4,
      stagger:0.2
    }
  )

  tl.pause();
  home.addEventListener("click",function()
  {
    tl.play();
  })

  close.addEventListener("click",function()
{
  tl.reverse();
})



