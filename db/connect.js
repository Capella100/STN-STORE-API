// creating a connectdb function in a folder to connect to database (mongoose)
// require mongoose
const mongoose = require('mongoose');

// creating connectdb function
const connectDB = (url) => {
    return mongoose.connect(url, {
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
    })
}

module.exports = connectDB;