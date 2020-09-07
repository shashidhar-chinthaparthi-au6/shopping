const mongoose = require('mongoose')

const Schema = mongoose.Schema
const productSchema = new Schema({
    name:{
        type: String,
        required: true,
      //  message: `{VALUE} is required`
    },
    price:{
        type: String,
        required: true,
       // message: `{VALUE} is required`
    }
})

productSchema.methods ={
    toJSON(){
        return{
            _id: this._id,
            name: this.name,
            price: this.price,
        }
    }
}
const Product = mongoose.model('Product', productSchema)

module.exports = Product