module.exports = (app) => {
  app.get('/noticia', (req, respond) => {
    const noticiasModel = app.app.models.noticiasModel;
    const connection = app.config.database;
    noticiasModel.getNoticia(connection, (error, result) => {
      respond.render('noticias/noticia', { noticia: result });
    });
  });
};
