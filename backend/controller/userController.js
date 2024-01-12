import db from "../ConnectDb.js";

class UserController  {
    static getUsers  = (req,res)=>{
try {
    const sql = `SELECT * FROM users`
    db.query(sql, function (err, result) {
        if (err) {

            res.status(500).json({message:err})
        }else{
            res.status(200).json({message:"Fetched user Successfully",result})

        }
      
      });
    // const data  =   db.query(sql)
    // if(data){
    //     res.status(200).json({message:"Data Fetched successfully", data:data})
    // }else{
    //     res.status(400).json({message:"Not fetched"})

    // }
} catch (error) {
    res.status(500).json({message:"Internal server Error", error})
}
    }
    static createUsers  = (req,res)=>{
       console.log("data", req.body)
       const {name,country,id} = req.body
        var sql = `INSERT INTO users (id,name, country) VALUES (${id}, '${name}', '${country}')`;
        db.query(sql, function (err, result) {
          if (err) {

              res.status(500).json({message:err})
          }else{
              res.status(200).json({message:"Inserted Successfully",result})

          }
          console.log("1 record inserted");
        });
    }
    static updateUsers  = (req,res)=>{
       console.log("data", req.body)
       const {name,id} = req.body
       var sql = `UPDATE users SET name = '${name}' WHERE id=${id}`
        // var sql = "INSERT INTO users (id,name, country) VALUES (2,'Compan', 'Highway')";
        db.query(sql, function (err, result) {
          if (err) {
              res.status(500).json({message:err})
          }else{
              res.status(200).json({message:"update user successfully",result})

          }
        });
    }
    static deleteUsers  = (req,res)=>{
       console.log("data", req.body)
       const {id} = req.body
       const deleteQuery = `DELETE FROM users WHERE id = ${id}`;
        db.query(deleteQuery, function (err, result) {
          if (err) {
              res.status(500).json({message:err})
          }else{
              res.status(200).json({message:" user deleted successfully",result})

          }
        });
    }
}
export default UserController