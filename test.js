require('dotenv').config();
const mongoose = require('mongoose');

console.log("---------------------------------------------------");
console.log("Testing MongoDB Connection...");
console.log("Target:", process.env.MONGO_URI); 

mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => {
        console.log("✅ SUCCESS! Connected.");
        process.exit(0);
    })
    .catch(err => {
        console.log("❌ FAILED.");
        console.log("REASON:", err.message);

        if (err.message.includes('bad auth')) {
            console.log("👉 FIX: Your password 'ktag1251' is wrong or user 'SideLinePro' does not exist.");
        } else if (err.message.includes('ETIMEDOUT') || err.message.includes('querySrv')) {
            console.log("👉 FIX: Your IP Address is blocked. Go to MongoDB Atlas -> Network Access -> Add IP -> Allow Anywhere.");
        }
        console.log("---------------------------------------------------");
        process.exit(1);
    });