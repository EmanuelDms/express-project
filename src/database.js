import mongoose from 'mongoose';

class Database{
  constructor(){
    this.init();
  }

  init(){
    mongoose.connect('mongodb://localhost/mydb',
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
      console.log('MongoDB connected')
    );
  }
}

export default new Database();