function routes(app) {
  app.use('/', require('./index'));

  app.use('/cliente', require('./cliente/rotasCliente'))
  app.use('/produto', require('./produto/rotasProduto'))
  app.use('/estoque', require('./estoque/rotasEstoque'))
  app.use('/venda', require('./venda/rotasVenda'))
  //app.use('/pedido', require('./pedido/rotasPedido'))
}

module.exports = routes;