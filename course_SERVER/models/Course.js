import mongoose from "mongoose";
import { config } from "dotenv";

config();

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Course Title"],
    minLength: [4, "Title Must Be At Least 4 Characters"],
    maxLength: [80, "Can't Exceed 80 Characters"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Course Description"],
    minLength: [20, "Description Must Be At Least 20 Characters"],
  },
  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      video: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
  ],
  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  views: {
    type: Number,
    default: 0,
  },
  numOfVideos: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: [true, "Enter Creator name"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Course = mongoose.model("Course", schema);

export default Course;
