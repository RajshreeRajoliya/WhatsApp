import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb://admin:admin123@ac-9dr7dfq-shard-00-00.xesp75j.mongodb.net:27017,ac-9dr7dfq-shard-00-01.xesp75j.mongodb.net:27017,ac-9dr7dfq-shard-00-02.xesp75j.mongodb.net:27017/?ssl=true&replicaSet=atlas-52tevd-shard-0&authSource=admin&retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;