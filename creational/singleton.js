class Database {

  constructor(data) {

    if (Database.exists) {
      return Database.instance;
    }

    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getDate() {
    return this.data
  }
}


const mongo = new Database('Mongo');
console.log(mongo.getDate());;

const sql = new Database('SQL');
console.log(sql.getDate());
