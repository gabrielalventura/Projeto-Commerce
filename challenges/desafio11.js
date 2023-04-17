// usar $nin ao inves de $ne pois utilizarei array com os dois nomes que desejo excluir da consulta e o $ne lê somente 1 valor;

db.produtos.find({
  nome: { $nin: ["Big Mac", "McChicken"] },
},
{
  nome: 1, curtidas: 1, vendidos: 1, _id: 0,
});