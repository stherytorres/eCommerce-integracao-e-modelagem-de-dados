function routes(app) {
    app.use('/', require('./index'));

    app.use('/cliente', require('./cliente/rotasCliente'))
  }
  
  module.exports = routes;