const express = require ("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
//forming our mongoDB connection
const kalp ="mongodb://localhost:27017/GroceryApp"
mongoose.connect(kalp,({useNewUrlParser:true , useUnifiedTopology: true }))
.then(console.log("connectded to our Database"))
.catch(err => console.log(err))

//by using mongoose.schema method we created a database schema
const grocerySchema = new mongoose.Schema({
      groceryItem:{type:String},
      isPurchased : {
            type:Boolean,
            default:false
      }
})
//by using mongoose.model metheod we created collection in mongoadb
const Groc = mongoose.model('item' , grocerySchema)

//by using get method we get our items which we added
app.get("/grocery",(req,res)=>{
   Groc.find().then(groc => res.json(groc)) 
})

//this is to update aour nw data into the database
app.post("/grocery" , (req,res) =>{
      const newGroc = new Groc({
            groceryItem:req.body.groceryItem
      })
      newGroc.save().then(groc => res.json(groc))
})

//this is to delet our data 
app.delete("/grocery/:id",(req,res)=>{
     Groc.findByIdAndDelete(req.params.id)
     .then(()=>res.json({result:true}))
   })


   //by using app.listen method we form the connection on port 300
app.listen(5000, () => {
      console.log("server is running on 5000")
});