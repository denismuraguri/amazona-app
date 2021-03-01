import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    orderItems: [{
        name: { type: String, required:true},
        qty: { type: Number, required: true},
        price: { type: Number, required: true},
        product:{ type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
    },
    },
],
    shippingAddress: {
        fullName: { type: String, required: true},
        address: { type: String, required: true},
        postalCode: { type: String, required: true},
        country: { type: String, required: true},
    },
    paymentMethod: {type: String, required: true},
    itemsPrice:{type: Number, required: true},
    shippingPrice:{type: Number, required: true},
    taxPrice:{type: Number, required: true},
    totalPrice:{type: Number, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    isPaid: {type: Date},
    isDelivered: { type: Boolean, default: false},
    deliveredAt: { type: Date},
},
    {
        timeStamps: true,
    }
);
const Order = mongoose.model('Oder', orderSchema)
export default Order;