/*function addTextToInput(){
  var u="flats_test"; //получили ФИО
  console.log(u);
  let user = JSON.stringify([u]);
  const request_f = new XMLHttpRequest();
  const url1 = "/detail/:id/"
  request_f.open('GET',url1, false);
  //request_f.setRequestHeader("Content-Type", "application/json");
  /*request_f.addEventListener("load", function(){
    if(request_f.readyState === 4 && request_f.status===200)
    {
      let resuser = JSON.parse(request_f.response);
      console.log(resuser);
    }
  });
  request_f.send(user);
  if (request_f==200)
  console.log(request_f.response);
}*/
function Recive(){
  document.getElementById('clients').style.display="block";
  document.getElementById('btn').style.display="block";
  var u=document.getElementById('s1').value; //получили ФИО
  console.log(u);
  let user = JSON.stringify([u]);
  const request = new XMLHttpRequest();
  const url = "/clients"
  request.open('POST',url, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.addEventListener("load", function(){
    if(request.readyState === 4 && request.status===200)
    {
      let resuser = JSON.parse(request.response);
      console.log(resuser);
       id = JSON.parse(resuser)[0].ID_CLIENT;
       name= JSON.parse(resuser)[0].FULL_NAME;
       address= JSON.parse(resuser)[0].ADDRESS;
       dob= new Date(JSON.parse(resuser)[0].DATE_OF_BIRTH).toLocaleDateString();
       email= JSON.parse(resuser)[0].EMAIL;
       home= JSON.parse(resuser)[0].HOME_PHONE;
       mobile= JSON.parse(resuser)[0].MOBILE_PHONE;
       ps= JSON.parse(resuser)[0].PASSPORT_SERIES;
       pn= JSON.parse(resuser)[0].PASSPORT_NUMBER;
       doi= new Date(JSON.parse(resuser)[0].DATE_OF_ISSUE).toLocaleDateString();;
       pia= JSON.parse(resuser)[0].PASSPORT_ISSUING_AUTHORITY;
       document.getElementById('id').value = id;
       document.getElementById('date').value = new Date().toLocaleDateString();
       document.getElementById('name').innerHTML =name;
       document.getElementById('address').innerHTML =address;
       document.getElementById('dob').innerHTML =dob;
       document.getElementById('email').innerHTML =email;
       document.getElementById('home').innerHTML =home;
       document.getElementById('mobile').innerHTML =mobile;
       document.getElementById('ps').innerHTML =ps;
       document.getElementById('pn').innerHTML =pn;
       document.getElementById('doi').innerHTML =doi;
       document.getElementById('pia').innerHTML =pia;
      console.log(address);
    }
  });
  request.send(user);
};
