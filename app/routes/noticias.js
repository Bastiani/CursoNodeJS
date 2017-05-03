module.exports = (application) => {
  application.get('/noticias', (req, respond) => {
    const noticiasModel = application.app.models.noticiasModel.Noticias;
    const connection = application.config.database;
    noticiasModel.getNoticias(connection, (error, result) => {
      respond.render('noticias/noticias', { noticias: result });
    });
  });
};
