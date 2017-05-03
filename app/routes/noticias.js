//const pool = require('../../config/database');

module.exports = (app) => {
  app.get('/noticias', (req, respond) => {
    const noticiasModel = app.app.models.noticiasModel;
    const connection = app.config.database;
    noticiasModel.getNoticias(connection, (error, result) => {
      respond.render('noticias/noticias', { noticias: result });
    });
  });
};
