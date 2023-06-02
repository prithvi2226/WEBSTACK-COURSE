import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import crypto from  "crypto"; 


config();


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

  resetPasswordToken: String,
  resetPasswordExpire: String,
});


schema.pre("save", async function(next){
  if(!this.isModified("password")){
    return next()
  } 
  this.password = await bcrypt.hash(this.password, 10);
  next();
  
});


schema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

schema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password)
};

schema.methods.getResetToken = function() {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};



export const User = mongoose.model("User", schema);
