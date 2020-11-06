function number(){
  let elements = document.getElementsByClassName('price');
  console.log(elements);
  for(let i=0; i<elements.length; i++)
  {//document.getElementById('price').innerHTML = elem.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

    elements[i].innerHTML=elements[i].textContent.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }
}
