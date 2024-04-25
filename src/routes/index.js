const express = require('express');
const router = express.Router();

router.get('', async (req, res) => {
  try {
    res.status(200).send(`
      <p>Rotas disponíveis:</p>
      <ul>
        <li><a href="/produtos">/produto</a></li>
        <li><a href="/estoque">/estoque</a></li>
        <li><a href="/clientes">/cliente</a></li>
        <li><a href="/vendas">/venda</a></li>
      </ul>
    `);
  } catch (error) {
    res.status(500).send('Estamos enfrentando algum problema');
  }
});

module.exports = router;