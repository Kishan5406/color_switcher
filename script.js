const body=document.querySelector("body");
const buttons=document.querySelectorAll('.button');
buttons.forEach(function(button){
button.addEventListener('click',function(e){
  const color=e.target.id;
  //using only if 
  
  // if(color==='grey'||color==='white'||color==='yellow'||color==='blue'){
  //   body.style.backgroundColor=e.target.id;
  // }


  //if-else
    if (color ==='dark'){
  body.style.backgroundColor='#212121';
}else if(color==='yellow'){
  body.style.backgroundColor=color;
}
else if(color==='blue'){
  body.style.backgroundColor=color;
}
else 
body.style.backgroundColor=color;

  //by switch case
  // switch(e.target.id){
  //   case 'grey':
  //   body.style.backgroundColor=e.target.id;
  //   break;
  //   case 'blue':
  //   body.style.backgroundColor=e.target.id;
  //   break;
  //   case 'yellow':
  //   body.style.backgroundColor=e.target.id;
  //   break;
  //   case 'white':
  //   body.style.backgroundColor=e.target.id;
  //   break;

  //   default:
  //   body.style.backgroundColor='green';
  // }
})
})