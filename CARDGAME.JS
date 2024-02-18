let body = document.querySelector(".body");
let cardE = document.querySelector(".cards");
let cards= [];
let imgs = ['alien', "amaze", "amazed", "angel"]
let pa = document.querySelector(".para")
for(let i=0; i<8; i++){
let el= document.createElement('div'); // js mai div create karna 
el.classList.add('card');
el.innerHTML = `<img class='hide' src=${imgs[i%4]}.png alt=${imgs[i%4]}/>`
cards.push(el);
}
// i%4 ki wajah sirf 3 bar chale ga or iska rule check karo online 
// for append 
cards.sort(()=>{   
return Math.random() - 0.5; // agar negative mai ho to shuffle karni ki trick 
})
for(let c of cards){
    cardE.append(c);
}
let firstcardflip = null;
let secondcardflip= null;

let counts = 0;
for(let c of cards){
c.addEventListener('click', async function(){
counts++;
console.log(counts)
pa.textContent = counts;

  if(firstcardflip == null && secondcardflip == null ){
    c.children[0].classList.remove('hide') 
   firstcardflip = c;
} 
  else if (firstcardflip && secondcardflip == null){
    c.children[0].classList.remove('hide') 
secondcardflip = c;
if(
  firstcardflip.children[0].src !== secondcardflip.children[0].src
){
  await new Promise((r) => setTimeout(r, 1000))
firstcardflip.children[0].classList.add('hide');
secondcardflip.children[0].classList.add('hide');
}
else{
  let iswin = checkwin();
  if(iswin){
  window.location.href = 'win.html'
  }
}
firstcardflip = null;
secondcardflip = null;

  }
})   }

let checkwin = ()=>{
for(let c of cards){
  if(c.children[0].classList.contains("hide")){
    return false;
  }
}
return true;
};
// children ki bari mai parho 