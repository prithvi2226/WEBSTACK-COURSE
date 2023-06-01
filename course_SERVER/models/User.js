import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const schema = new mongoose.Schema({
  // Name type, required
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },

  // Email
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: validator.isEmail,
  },
  // Password
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password Must be at least 8 characters"],
    select: false,
  },
  // Role
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  subscription: {
    id: String,
    status: String,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  playlist: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      poster: String,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },

  ResetPasswordToken: String,
  ResetPasswordExpire: String,
});

schema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

export const User = mongoose.model("User", schema);
