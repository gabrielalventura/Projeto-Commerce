db.produtos.updateOne({
  nome: "Big Mac",
},
{
  $currentDate: {
    ultimaModificacao: true,
  },
});

db.produtos.find({
  ultimaModificacao: { $exists: true },
},
{
  nome: 1, _id: 0,
});

// base: https://github.com/tryber/sd-025-b-live-lectures/blob/back/lecture/11.4/11.4/codigo-aula/14-currentDate.mongodb 
// para depois: tentar usar "Type: date "