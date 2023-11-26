import mongoose from 'mongoose';

const Connection = async (username = 'harsh07natu', password = 'Apexpredator7*') => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.zypxmxw.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;