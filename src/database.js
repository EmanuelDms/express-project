import mongoose from 'mongoose';


class Database{
  constructor() {
    this.init();
  }
  
  init(){
    mongoose.set('useCreateIndex', true)

    mongoose.connect('mongodb://localhost/mydb',
    { useNewUrlParser: true, useUnifiedTopology: true },
      console.log('MongoDB connected')
    );
  }
}

export default new Database();