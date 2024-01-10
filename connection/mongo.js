const mongo=require('mongoose')
mongo.connect('mongodb+srv://skypaul2000:akash123@cluster0.upycpmr.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("MongoDB Connected"))