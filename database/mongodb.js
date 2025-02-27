import mongoose from "mongoose";import {DB_URI, NODE_ENV} from "../config/env.js";if (!DB_URI) {    throw new Error("MongoDB URI doesn't exist. Please define the MongoDB URI environment variable inside .env.<development/production>.local");}const connectToMongoDB = async () => {    try {        await mongoose.connect(DB_URI);        console.log(`MongoDB Connected to MongoDB in ${NODE_ENV} mode`);    } catch (error) {        console.error('MongoDB connection failed:', error);        process.exit(1);    }}export default connectToMongoDB;