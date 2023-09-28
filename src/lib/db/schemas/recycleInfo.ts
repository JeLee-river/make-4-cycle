import { Schema } from 'mongoose';

const recycleInfoSchema = new Schema({
  recycleInfo: {
    type: String,
    required: true,
  },
});

export { recycleInfoSchema };
