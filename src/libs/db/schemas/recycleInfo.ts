import { Schema } from 'mongoose';

const recycleInfoSchema = new Schema({
  className: {
    type: String,
    required: true,
  },
  classImageSource: {
    type: String,
    required: true,
  },
  recycleInfo: {
    type: String,
    required: true,
  },
});

export { recycleInfoSchema };
