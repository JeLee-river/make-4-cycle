import mongoose from 'mongoose';
import { recycleInfoSchema } from '../schemas/recycleInfo';

export const RecycleInfo = mongoose.model('RecycleInfo', recycleInfoSchema);
