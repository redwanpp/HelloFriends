import mongoose from "mongoose";

const messageScheam = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.types.ObjectId,
        ref: "User",
        requieed: true
    },
    receiverId: {
        type: mongoose.Schema.types.ObjectId,
        ref: "User",
        requieed: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Message = mongoose.model("Message", messageScheam);

export default Message;