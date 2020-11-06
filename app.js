
let express = require('express'); //подключаем express
let app = express();
let multer = require('multer');
let bodyParser = require('body-parser');
const flash = require('express-flash')
let session = require('express-session');
let passport = require('passport');
let localStrategy = require('passport-local').Strategy
var fs = require('fs');

const bcrypt = require('bcrypt')

let urlencodedParser = bodyParser.urlencoded({
  extended:false
});
const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)
const jsonParser = express.json();
app.use(express.static('public'));
const storageConfig = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null, 'public/images');
  },
  filename: (req,file,cb)=>{
    cb(null,file.originalname);
  }
});
var upload = multer({storage: storageConfig});
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: 'catik',
  resave: false,
  saveUninitialized: false,
  unset:'destroy'}))
app.use(passport.initialize())
app.use(passport.session())
//отключение кэша
app.use((req,res,next)=>{
  res.header('Cache-Control','private, no-cache, no-store, must-revalidate');
  res.header('Expries','-1');
  res.header('Pragma','no-cache');
  next()
})
app.set('view engine', 'pug');
app.listen(3040,function()
 {
     console.log('Node is work 3000');
 });
 var fb = require('firebird');
 var cfg = require("./config").cfg;
 var users = [];
 var cfg = require("./config").cfg;
 var conn = fb.createConnection();
 var operations = require("./db_person_ops")(conn)
//здесь была функция
conn.connect(cfg.db, cfg.user, cfg.password, cfg.role, function() {
console.log("Connected to database!");
var salt = bcrypt.genSaltSync(10);
var crypted = bcrypt.hashSync('54321', salt);
conn.query( 'select r.ID_REALTOR, d.PASSWORD, r.EMAIL, r.FULL_NAME FROM DATA d, REALTORS r WHERE d.ID_REALTOR=r.ID_REALTOR',
    function(error,result){
       if(error) throw err;
       var r = result.fetchSync("all",true)
       console.log(r);
       for(let i=0; i<r.length;i++)
         {
           users.push({
             id: r[i].ID_REALTOR,
             email: r[i].EMAIL,
             password: r[i].PASSWORD,
             name: r[i].FULL_NAME
           });
         }});
})

//получение почты и пароля
app.get('/',checkAuthenticated,(req,res)=>
{         req.isAuthenticated()?res.render('main', {name: req.user.name}):res.redirect('/login')
});

//Вход на сайт
app.get('/login', checkNotAuthenticated, (req,res)=>
{
    res.render('login.pug')
})

//действие при успешном входе
app.post('/login',checkNotAuthenticated, passport.authenticate('local',{
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

//выход
app.get('/logout', (req, res) => {
  req.session.destroy(()=>res.redirect('/login'))
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

function checkNotAuthenticated(req, res,next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
 next()
}
//Вывод риэлторов
app.get("/realtors",checkAuthenticated,function(req,res){
  conn.query('SELECT * FROM REALTORS',
  function(error, result){
    if (error) throw err;
    var r = result.fetchSync("all",true)
    var realtors = [];
    for (let i=0; i<r.length; i++)
    {
      realtors.push(r[i]);

    };
    let RD = realtors.map(realtor=>{
      return{
        ...realtor,
        DATE_OF_BIRTH: new Date(realtor.DATE_OF_BIRTH).toLocaleDateString(),
        HIRING_DATE: new Date(realtor.HIRING_DATE).toLocaleDateString()
      }});

      req.isAuthenticated()?res.render('realtor',{RD,name: req.user.name}):res.redirect('/login')
})
});

//список квартир
app.get('/flats', checkAuthenticated, function(req,res){
  conn.query(`select A.ID_APARTMENT, A.PRICE, A.NUMBER_OF_ROOMS, A.LIVING_SPACE, A.FLOOR, A.ADDRESS, A.DISTRICT, A.PHOTO1 from APARTMENTS A where (A.ID_APARTMENT not in (SELECT ID_APARTMENT FROM CONTRACTS))`,
    function(error,result){
      if(error) throw err;
      var r = result.fetchSync('all',true);
      var flats = [];
      for(let i=0; i<r.length; i++)
      {
        flats.push(r[i]);
      }
      req.isAuthenticated()?res.render('flats',{flats, name: req.user.name}):res.redirect('/login')
  })
})

app.post('/flats',jsonParser,function(req,res){
  name = req.body;
  if(!req.body) return res.sendStatus(400);
  conn.query(`select A.ID_APARTMENT, A.PRICE, A.NUMBER_OF_ROOMS, A.LIVING_SPACE, A.FLOOR, A.ADDRESS, A.DISTRICT, A.PHOTO1 from APARTMENTS A where (A.ID_APARTMENT not in (SELECT ID_APARTMENT FROM CONTRACTS))`,
  function(error,result){
    var flats = [];
    if(error) throw err;
    var r =result.fetchSync('all',true);
    for(let i=0; i<r.length; i++)
    {
      flats.push(r[i]);
    }
    res.json(JSON.stringify(flats));
  }
   )
})

var id_f
//подробнее о квартире
app.get('/detail/:id/', checkAuthenticated,function(req,res){
   id_f = +req.params.id;
   const flat = operations.detailFlat();
   res.render('detail',{flat:flat[0],name: req.user.name});
})

app.post('/detail/:id/', jsonParser, function(req,res){
  Resname = req.body;
  id_f = +req.params.id;
  console.log(id_f);
  if(!req.body) return res.sendStatus(400);

  res.json(req.params.id);
  }
)

//квартиры риэлтора
app.get('/flats/realtor/:id/',  checkAuthenticated,  function(req,res){
  const id = +req.params.id;
  const flat = operations.fltasRealtor(id);
  console.log(id);
  res.render('flats_realtor.pug',{flat,name: req.user.name});
})

//покупка квартиры
app.get('/buy/:id/', checkAuthenticated, function(req,res){
  const id = +req.params.id;
  var flat = operations.flats(id);
  var owners = operations.owner(id);
  let owner= owners.map(owners=>{
    return{
      ...owners,
      DATE_OF_BIRTH: new Date(owners.DATE_OF_BIRTH).toLocaleDateString(),
      DATE_OF_ISSUE: new Date(owners.DATE_OF_ISSUE).toLocaleDateString()
    }});
  fs.open("Договор №  "+id, 'w', (err)=>{
    if(err) throw err;
    console.log('Файл успешно создан!');
  })
  conn.query('SELECT * FROM CLIENTS WHERE ID_CLIENT not in (SELECT ID_OWNER FROM APARTMENTS)',
  function(error,result){
    if(error) throw err;
    var r =result.fetchSync('all',true);
    var NewClients = [];
    for(let i=0; i<r.length; i++)
    {
      NewClients.push(r[i]);
    }

    req.isAuthenticated()?res.render('buy.pug',{flat:flat[0], owner:owner[0], NewClients, name: req.user.name}):res.redirect('/login');
  })
})

app.post("/buy/:id/", urlencodedParser, function(req,res){
  const ida = +req.params.id;
  console.log("flatss "+ida);
  const buyer = +req.body.buyer;
  console.log(buyer);
  const date = req.body.date;
  console.log(date);
  name = req.user.name;
  var realtor = operations.idRealtor(name);
  var id_realtor = realtor[0].ID_REALTOR
  operations.buy(ida,buyer,id_realtor, date);
  conn.commitSync();
  res.redirect("/");
})
app.get("/create", function(req,res){
  req.isAuthenticated()?res.render('createClient',{name: req.user.name}):res.redirect('/login');
})

//создание клиента
app.post("/create", urlencodedParser, function(req,res){
    const id=req.body.id;
    name=req.body.name;
    address=req.body.address;
    dob=req.body.dob;
    email=req.body.email;
    home_phone=req.body.home_phone;
    mobile_phone = req.body.mobile_phone;
    passport_series=req.body.passport_series;
    passport_number = req.body.passport_number;
    doi=req.body.doi;
    pia=req.body.pia;
    operations.createClients(name,address,dob,email,home_phone, mobile_phone, passport_series, passport_number, doi, pia);
    conn.commitSync();
    res.redirect('/clients');
})

//изменение клиента
app.get('/edit/:id/',  checkAuthenticated,  function(req,res){
  const id = +req.params.id;
   const client = operations.Client(id);
   let NewClient=client.map(clients=>{
     return{
       ...clients,
       DATE_OF_BIRTH: new Date(clients.DATE_OF_BIRTH).toLocaleDateString(),
       DATE_OF_ISSUE: new Date(clients.DATE_OF_ISSUE).toLocaleDateString()
     }
   })
   console.log(NewClient);
  res.render('editClient.pug',{NewClient:NewClient[0],name: req.user.name});
})

//изменение клиента
app.post("/edit/:id/", urlencodedParser, function(req,res){
    name=req.body.name;
    address=req.body.address;
    dob=req.body.dob;
    email=req.body.email;
    home_phone=req.body.home_phone;
    mobile_phone = req.body.mobile_phone;
    passport_series=req.body.passport_series;
    passport_number = req.body.passport_number;
    doi=req.body.doi;
    pia=req.body.pia;
    operations.editClients(id,name,address,dob,email,home_phone, mobile_phone, passport_series, passport_number, doi, pia);
    conn.commitSync();
    res.redirect("/clients")
})

//получение клиентов
app.get('/clients',checkAuthenticated,function(req,res){
  conn.query('SELECT * FROM CLIENTS',
  function(error,result){
    if(error) throw err;
    var r =result.fetchSync('all',true);
    var clients = [];
    for(let i=0; i<r.length; i++)
    {
      clients.push(r[i]);
    }
    let NewClients=clients.map(client=>{
      return{
        ...client,
        DATE_OF_BIRTH: new Date(client.DATE_OF_BIRTH).toLocaleDateString(),
        DATE_OF_ISSUE: new Date(client.DATE_OF_ISSUE).toLocaleDateString()
      }
    })
    req.isAuthenticated()?res.render('clients.pug',{NewClients, name: req.user.name}):res.redirect('/login')

  })
})

app.get('/test',function(req,res){
  res.render('test.pug');
})

app.post('/clients', jsonParser, function(req,res){
  Resname = req.body;
  name = Resname.join('');
console.log(name);
  if(!req.body) return res.sendStatus(400);
  conn.query(`SELECT * FROM CLIENTS WHERE FULL_NAME='${name}'`,
  function(error,result){
    var clients = [];
    if(error) throw err;
    var r =result.fetchSync('all',true);
    for(let i=0; i<r.length; i++)
    {
      clients.push(r[i]);
    }
    console.log(clients);
    res.json(JSON.stringify(clients));
  }
   )
})

app.get("/create/:id/", function(req,res){
  req.isAuthenticated()?res.render('createClient',{name: req.user.name}):res.redirect('/login');
})

//создание клиента
app.post("/create/:id/", urlencodedParser, function(req,res){
    const id = +req.params.id;
    console.log("клиент "+id);
    const id_cl=req.body.id;
    name=req.body.name;
    address=req.body.address;
    dob=req.body.dob;
    email=req.body.email;
    home_phone=req.body.home_phone;
    mobile_phone = req.body.mobile_phone;
    passport_series=req.body.passport_series;
    passport_number = req.body.passport_number;
    doi=req.body.doi;
    pia=req.body.pia;
    operations.createClients(name,address,dob,email,home_phone, mobile_phone, passport_series, passport_number, doi, pia);
    conn.commitSync();
    res.redirect('/buy/'+id+'/');
})

app.get('/createFlat/Seller', checkAuthenticated,function(req,res){
  req.isAuthenticated()?res.render('crFlat',{name: req.user.name}):res.redirect('/login');
})
app.post("/createFlat/Seller", urlencodedParser, function(req,res){
    name=req.body.name;
    address=req.body.address;
    dob=req.body.dob;
    email=req.body.email;
    home_phone=req.body.home_phone;
    mobile_phone = req.body.mobile_phone;
    passport_series=req.body.passport_series;
    passport_number = req.body.passport_number;
    doi=req.body.doi;
    pia=req.body.pia;
    operations.createClients(name,address,dob,email,home_phone, mobile_phone, passport_series, passport_number, doi, pia);
    conn.commitSync();
    res.redirect('/createFlat');
})
app.get('/createFlat', checkAuthenticated,function(req,res){
  req.isAuthenticated()?res.render('cr',{name: req.user.name}):res.redirect('/login');
})
app.post('/createFlat', upload.fields([
  {name: 'photo1', maxCount: 1},
  {name: 'photo2', maxCount:1},
  {name: 'photo3', maxCount: 1},
  {name: 'photo4', maxCount:1},
  {name: 'photo5', maxCount: 1},
  {name: 'photo6', maxCount:1}]),function(req,res,next){
  let filedata = req.files;
  if(!filedata)
    res.send('Error download');
    else {
      res.redirect('/');
    }
})
