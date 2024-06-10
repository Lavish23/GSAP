function breakTheElement()
{
  var h1=document.querySelector("h1");
  
  var splittedtext=h1.textContent.split("");

  var halflength=Math.floor(splittedtext.length/2);

  
  var clutter="";
  
  splittedtext.forEach(function(dets,ind)
  {
    if(ind<halflength)
      {
        clutter+=`<span class="a"
        >${dets}</span>`;
      }

      else
      {
        clutter+=`<span class="b"
        >${dets}</span>`;
      }
  })
  
  h1.innerHTML=clutter;

}

breakTheElement();


gsap.from("h1 .a",
  {
    y:70,
    duration:0.6,
    delay:0.4,
    stagger:0.1
  }
)

gsap.from("h1 .b",
  {
    y:70,
    duration:0.6,
    delay:0.4,
    stagger:-0.1
  }
)
