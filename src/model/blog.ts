import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    frontMatter: {
        banner: {
            type: String,
        },
        title: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String
        },
        date: { 
            type: Date,
            defualt: new Date().toLocaleDateString()
        },
        slug: { 
            type: String, 
            required: true, 
            unique: true 
        },
        author: {
            type: String,
        },
        authorImage: {
            type: String,
        },
        tags: [
            { 
                type: String 
            }
        ],
        privacy: {
            type: String,
            default: "public",
            enum: ["public","unlisted", "private"],
        },
        views: {
            type: Number,
            default: 0,
        },
        likes: {
            type: Number,
            default: 0,
        },
        readtime: {
            type: String,
            required: true,
        },
    },
    content: { 
        type: String, 
        required: true 
    },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);