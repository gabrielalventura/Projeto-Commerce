// use("commerce");
// parametro vazio no updateMany pois para realizar updates em documentos é necessario atomic operators;
// https://www.mongodb.com/docs/manual/tutorial/model-data-for-atomic-operations/#:~:text=In%20MongoDB%2C%20a%20write%20operation,fields%20can%20be%20updated%20atomically.

db.produtos.updateMany({},
  {
    $set: {
      criadoPor: "Ronald McDonald",
    },
  });

db.produtos.find({},
  {
    nome: 1, criadoPor: 1, _id: 0,
  });