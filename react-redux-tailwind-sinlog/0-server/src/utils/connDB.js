import mongoose from 'mongoose';

export const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/sinlog-15');

    // Test connection
    // const CollectionName = mongoose.model('CollectionName', { name: String, email:String, date: { type: Date, default: Date.now }});
    // const CollectionData = new CollectionName({ name: 'Test Data Enter', email: 'Test@email.com'});
    // CollectionData.save().then(() => console.log('Data saved to DB'));

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });
}