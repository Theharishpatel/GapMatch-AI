const mangoose = require("mongoose")




async function connectToDB() {
    
    try{
        await mangoose.connect(process.env.MONGO_URI)

        console.log("COnnected to Database")
    }
    catch (err){
        console.error("Message:", err);
        
    }
}

module.exports = connectToDB