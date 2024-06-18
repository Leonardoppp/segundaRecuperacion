import pool from "../modules/mysql";

export const buscar = async (req, res) => {
  const response = await pool.query("call sp_search()");
  res.json(response[0][0]);
};

export const buscarUno = async (req, res) => {
  const response = await pool.query(
    "call sp_buscar_por_id(?)",
    req.body.id
  );
  res.json(response[0][0][0]);
};
 
export const add = async (req, res) => {
  const response = await pool.query(
    "call sp_insert(?,?)",
    [req.body.name, req.body.edad]
  );
  res.json("todo ok")
};

export const update = async (req, res) => {
  const response = await pool.query(
    "call sp_update(?,?,?)",
    [req.body.name, req.body.id, req.body.edad]
  );
  res.json("actualizado");
};

export const drop = async (req, res) => {
  const response = await pool.query(
    "call sp_delete(?)",
    req.body.id
  ); 
  res.json("adios");
};
























// import pool from "../modules/mysql";

// export const buscar = async (req, res) => {
//   const response = await pool.query("call sp_search()");
//   console.log(response[0][0]);
// };

// export const buscarUno = async (req, res) => {
//   const response = await pool.query(
//     "select * from usuario where id=?",
//     req.body.id
//   );
//   console.log(response[0][0]);
// };

// export const add = async (req, res) => {
//   const response = await pool.query(
//     "insert into usuario(usuario) values (?)",
//     req.body.name
//   );
//   console.log("todo ok");
// };

// export const update = async (req, res) => {
//   const response = await pool.query(
//     "update usuario set usuario = ? where id=?",
//     [req.body.name, req.body.id]
//   );
//   console.log("actualizado");
// };

// export const drop = async (req, res) => {
//   const response = await pool.query(
//     "delete from usuario where id=?",
//     req.body.id
//   );
//   console.log("adios");
// };
