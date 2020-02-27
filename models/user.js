const mongoose = require('mongoose');

const userSchema = new mongoose({
    email: {
        type: String
    },
    password: {
        type: String
    }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User',userSchema);