import { Comanda } from '../models/Comanda.js';

export const crear_comanda = async (req, res) => {
  const comanda = await Comanda.create({ texto: req.body.texto });
  res.json(comanda);
};

export const listar_comandas = async (req, res) => {
  const comandas = await Comanda.findAll({
    order: [['fecha_creacion', 'ASC']]
  });
  res.json(comandas);
};

export const marcar_lista = async (req, res) => {
  const comanda = await Comanda.findByPk(req.params.id);
  comanda.estado = 'lista';
  comanda.fecha_lista = new Date();
  await comanda.save();
  res.json(comanda);
};
