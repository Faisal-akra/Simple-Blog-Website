const mongoose = required('mongoose');

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    }
})


const userSchema = mongoose.model("users", userModel);

module.exports = userModel();