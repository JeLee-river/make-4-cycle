import mongoose from 'mongoose';
import { recycleInfoSchema } from '../schemas/recycleInfo';

export const RecycleInfo =
  mongoose.models.RecycleInfo ||
  mongoose.model('RecycleInfo', recycleInfoSchema);
