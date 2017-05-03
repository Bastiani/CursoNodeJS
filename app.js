const app = require('./config/server');
const msg = require('./mod_teste');
//require('./app/routes/noticias')(app);
//require('./app/routes/home')(app);
//require('./app/routes/formulario_inclusao_noticias')(app);

app.listen(3000, () => {
  console.log('Servidor com express!!! nodemon!');
  console.log(msg);
});
