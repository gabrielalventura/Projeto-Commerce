db.produtos.updateMany({},
{
  $pull: {
    ingredientes: "cebola",
  },
});

db.produtos.find({},
{
  nome: 1, ingredientes: 1, _id: 0,
});

// base: https://github.com/tryber/sd-025-b-live-lectures/blob/back/lecture/11.5/11.5/codigo-aula/app-superMarket/02%20pull.mongodb