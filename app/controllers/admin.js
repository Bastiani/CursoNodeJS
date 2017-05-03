module.exports.formulario_inclusao_noticia = (application, req, res) => {
  res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
};

module.exports.noticias_salvar = (application, req, res) => {
  const noticiaBody = req.body;

  req.assert('titulo', 'Título é obrigatório').notEmpty();

  const erros = req.validationErrors();

  if (erros) {
    res.render('admin/form_add_noticia', { validacao: erros, noticia: noticiaBody });
    return;
  }

  const noticiasModel = application.app.models.noticiasModel.Noticias;
  const connection = application.config.database;
  noticiasModel.salvarNoticia(noticiaBody, connection, (error, result) => {
    res.redirect('/noticias');
  });
};
