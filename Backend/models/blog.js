const mongoose = required("mongoose");



const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },
    image: {
        type: Image,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
})


const blogModel = blogSchema('blogs', blogSchema);