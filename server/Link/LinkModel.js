import mongoose from 'mongoose'

const LinkModel = new mongoose.Schema({
    short: {type: String, required: true},
    full: {type: String, required: true},
})

export default mongoose.model('Link', LinkModel)