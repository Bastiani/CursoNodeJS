module.exports.noticias = (application, req, res) => {
  const noticiasModel = application.app.models.noticiasModel.Noticias;
  const connection = application.config.database;
  noticiasModel.getNoticias(connection, (error, result) => {
    res.render('noticias/noticias', { noticias: result });
  });
};

module.exports.noticia = (application, req, res) => {
  const noticiasModel = application.app.models.noticiasModel;
  const connection = application.config.database;
  noticiasModel.getNoticia(connection, (error, result) => {
    res.render('noticias/noticia', { noticia: result });
  });
};
