import mongoose from 'mongoose';
import { recycleInfoSchema } from '@database/schemas/recycleInfo';

export const RecycleInfo =
  mongoose.models.RecycleInfo ||
  mongoose.model('RecycleInfo', recycleInfoSchema);
