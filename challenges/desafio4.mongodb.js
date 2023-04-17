use("produtos")
db.produtos.find({ nome: 1, vendidos: { $gt: 50, $lt: 100 }, _id: 0 }).sort({ vendidos: 1 });