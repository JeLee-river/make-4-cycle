import mongoose from 'mongoose';

const DB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

async function connectDB() {
  try {
    if (!DB_URI) {
      throw new Error('db uri가 올바르지 않습니다.');
    }
    await mongoose.connect(DB_URI);
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;
