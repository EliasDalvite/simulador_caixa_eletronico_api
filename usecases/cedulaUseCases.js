const { pool } = require('../config');
const Cedulas = require('../entities/cedulas');

const getCedulasDB = async () => {
    try {
        const { rows } = await pool.query(`SELECT * FROM cedulas order by id, nome`);
        return rows.map((cedula) => new Cedulas(cedula.codigo, cedula.nome,cedula.quantia));
    } catch (err){
        throw "Erro ao buscar quantia de cedulas: " + err;
    }
}

const updateCedulasDB = async (body) => {
    try {
      const cedulasAtualizadas = []; // Array para armazenar as cédulas atualizadas
  
      for (const cedula of body) {
        const { nome, quantia } = cedula;
        const results = await pool.query(
          `UPDATE cedulas SET quantia = $2 WHERE nome = $1 RETURNING id, nome, quantia`,
          [nome, quantia]
        );
  
        if (results.rowCount === 0) {
          throw `A cédula de nome ${nome} não existe`;
        }
  
        const cedulaAtualizada = results.rows[0];
        cedulasAtualizadas.push(
          new Cedulas(cedulaAtualizada.id, cedulaAtualizada.nome, cedulaAtualizada.quantia)
        );
      }
  
      return cedulasAtualizadas; // Retorna o array de cédulas atualizadas
    } catch (err) {
      throw "Erro ao alterar a quantia de cédulas: " + err;
    }
  };

module.exports = {
    getCedulasDB, updateCedulasDB
}