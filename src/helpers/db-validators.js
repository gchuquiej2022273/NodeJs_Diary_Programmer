import Comment from "../comment/comment.model.js"

export const isNamevalid =async (name = '') => {
    const existName = await Comment.findOne({name});

        if (existName) {
            throw new Error(`The name: ${name} no exist in the database`)
        }

}