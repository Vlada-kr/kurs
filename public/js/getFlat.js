function getFlat(){

  document.getElementById('vi').style.display="none";
  document.getElementById('vis').style.display="flex";
  var u = '1';
  let user = JSON.stringify([u]);
  const request = new XMLHttpRequest();
  const url = "/flats"
  request.open('POST',url, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.addEventListener("load", function(){
    if(request.readyState === 4 && request.status===200)
    {
      let resuser = JSON.parse(request.response);
    //  console.log(Array.isArray(JSON.parse(resuser)));
      var newJson = JSON.parse(resuser);
      let checkboxChecked = new Array(4);
      for(var i=0; i<checkboxChecked.length;i++){
        if(document.getElementById("one").checked) checkboxChecked[0]=true;
        else {
          checkboxChecked[0]=false;
        }
        if(document.getElementById("two").checked) checkboxChecked[1]=true;
        else {
          checkboxChecked[1]=false;
        }
        if(document.getElementById("three").checked) checkboxChecked[2]=true;
        else {
          checkboxChecked[2]=false;
        }
        if(document.getElementById("thour").checked) checkboxChecked[3]=true;
        else {
          checkboxChecked[3]=false;
        }
      }

      var newMas = newJson.filter(function(e){
              var price_from =+ document.getElementById('cost_from').value;
              var price_to =+ document.getElementById('cost_to').value;
              var sq_from =+ document.getElementById('sq_from').value;
              var sq_to =+ document.getElementById('sq_to').value;
              console.log(sq_to);
              var flagPrice=true;
              var flagPrice_to=true;
              var flagPriceBoth=true;
              var flagRoom=true;
              var flagSquare = true;
              var flagSquare_to = true;
              var flagSquareBoth = true;
              //Комнатность
              for(var i=0; i<checkboxChecked.length;i++){
                if(checkboxChecked[i])
                {
                  flagRoom=false;
                  break;
                }
              }
              if(!flagRoom)
              {
                var index =+ e.NUMBER_OF_ROOMS;
                flagRoom = checkboxChecked[index-1];
              }
              if(!flagRoom)
              {
               return false;}

               //Цена от
               if(price_from!=0)
               {
                 flagPrice=false;
               }
               if(!flagPrice)
               {
                 var price_get =+ e.PRICE;
                 flagPrice = price_get>=price_from;
               }
               if(!flagPrice)
               {
                return false;}
              //Цена до
              if(price_to!=0)
              {
                flagPrice_to=false;
              }
              if(!flagPrice_to)
              {
                var price_get =+ e.PRICE;
                flagPrice_to = price_get<=price_to;
              }
              if(!flagPrice_to)
              {
               return false;}
              //Цена от и до
              if(price_from!=0 && price_to!=0)
              {
                flagPriceBoth=false;
              }
              if(!flagPriceBoth)
              {
                var price_get =+ e.PRICE;
                flagPriceBoth = price_get>=price_from && price_get<=price_to;
              }
              if(!flagPriceBoth)
              {
               return false;}

              //Площадь от
              if(sq_from!=null)
              {
                flagSquare=false;
              }

              if(!flagSquare)
              {
                var sq_get =+ e.LIVING_SPACE;
                flagSquare = sq_get>=sq_from;
              }
              if(!flagSquare)
              {
               return false;}


             //Площадь до
             if(sq_to!=0)
             {
               flagSquare_to=false;
             }

             if(!flagSquare_to)
             {
               var sq_get =+ e.LIVING_SPACE;
               flagSquare_to = sq_get<sq_to;
             }
             if(!flagSquare_to)
             {
              return false;}

              //Площадь от и до
              if(sq_to!=0 && sq_from!=0)
              {
                flagSquareBoth=false;
              }

              if(!flagSquareBoth)
              {
                var sq_get =+ e.LIVING_SPACE;
                flagSquareBoth = sq_get<=sq_to && sq_get>=sq_from;
              }
              if(!flagSquareBoth)
              {
               return false;}

      return flagRoom && flagPrice && flagSquare_to && flagSquare && flagSquareBoth && flagPrice_to && flagPriceBoth;
              /*

              if(price_get>=price_from && price_get<=price_to) return true;
              /*


              if(sq_get>=sq_from && price_get<=price_to) return true;*/
          });

          function render(el){
            return `<div class="box-item">
                      <img src='images/${el.PHOTO1}'>
                      <p class="price" id="price">${el.PRICE} ₽</p>
                      <p class="floor">${el.NUMBER_OF_ROOMS} комнаты |  ${el.LIVING_SPACE} м² |  ${el.FLOOR}</p>
                      <p class="address">${el.ADDRESS} </p>
                      <p class="district">${el.DISTRICT}</p>
                      <div class="box-btn"><a class="detail" href="detail/${el.ID_APARTMENT}/">Подробнее</a></div>
                    </div>`
          }
          const container = document.getElementById('vis');
          container.innerHTML='';
          for(let el of newMas){
            container.innerHTML+=render(el);
      }
      let elements = document.getElementsByClassName('price');
      //console.log(elements);
      for(let i=0; i<elements.length; i++)
      {//document.getElementById('price').innerHTML = elem.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

        elements[i].innerHTML=elements[i].textContent.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      }
  }
  });

  request.send(user)
};
