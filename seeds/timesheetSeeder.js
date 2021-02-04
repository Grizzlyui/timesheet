const mongoose = require('mongoose');
const Timesheet = require('../models/timesheet');

mongoose.connect('mongodb://localhost:27017/timesheetApp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => {
    console.log('Database Connected...')
});

const seedDB = async () => {
    await Timesheet.deleteMany({})
    
    const timesheet = new Timesheet ({
        month: 'TEST 2021',      
    })
    await timesheet.save()
    
}

seedDB().then(() => {
    console.log('Database seeded...')
    mongoose.connection.close();
})