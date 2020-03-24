const mongoose = require('mongoose');


const profileSchema = mongoose.Schema({
    uid: mongoose.Schema.Types.ObjectId,
    name: String,
    imgPath: {
        type: String,
    },
    imgName: {
        type: String,
    },
    bio: {
        type: String,
    },
    title: {
        type: String,
    }
})

module.exports = mongoose.model('Profile',profileSchema);