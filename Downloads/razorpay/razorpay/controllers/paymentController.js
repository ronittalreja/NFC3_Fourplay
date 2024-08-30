const Razorpay = require('razorpay'); 
const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY
});

const renderProductPage = async (req, res) => {
    try {
        res.render('product');
    } catch (error) {
        console.log(error.message);
    }
}

const createOrder = async (req, res) => {
    try {
        const amount = req.body.amount * 100; // Convert to paise
        const options = {
            amount: amount,
            currency: 'INR',
            receipt: `receipt_${Math.floor(Math.random() * 1000000)}`, // Dynamic receipt
        };

        razorpayInstance.orders.create(options, (err, order) => {
            if (!err) {
                // Ensure the server returns the form input data
                res.status(200).send({
                    success: true,
                    msg: 'Order Created',
                    order_id: order.id,
                    amount: amount,
                    key_id: RAZORPAY_ID_KEY,
                    product_name: req.body.name,
                    description: req.body.description,
                    contact: req.body.donor_phone, // Use form data here
                    name: req.body.donor_name, // Use form data here
                    email: req.body.donor_email // Use form data here
                });
            } else {
                res.status(400).send({ success: false, msg: 'Something went wrong!' });
            }
        });
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    renderProductPage,
    createOrder
}
