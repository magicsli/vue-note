const mongoose = require('mongoose');

 mongoose.connect("mongodb://127.0.0.1:27017/note")

    const note = mongoose.connection

    note.on('connected', () => {
        console.log("db connect success");
    })

    const noteSchema = mongoose.Schema({
        username:{type:String, require: true},              // 用户标识
        recordTime: {type:Number, require: true},   // 记录的时间
        message: {type:String, require: true},      // 记录内容
        state: {type: Boolean, require: true},      // 完成状态
        toTime: { type: Number, require: true }     // 截止时间
    })
const NoteModel = mongoose.model('noteList', noteSchema) 


const userSchema = mongoose.Schema({
    username: { type: String, require: true },              // 用户标识
})
const UserModel = mongoose.model('user', userSchema) 


exports.NoteModel = NoteModel;
exports.UserModel = UserModel;