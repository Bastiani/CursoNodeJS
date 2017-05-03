class Noticias {
  getNoticias(connection, callback) {
    return connection.query('select * from noticias', callback);
  }

  getNoticia(connection, callback) {
    return connection.query('select * from noticias where id = 4', callback);
  }

  salvarNoticia(noticia, connection, callback) {
    return connection.query('insert into noticias set ?', noticia, callback);
  }
}

module.exports.Noticias = new Noticias();
