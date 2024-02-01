import { RecycleInformationType } from '@/app/types/types';
import { RecycleInfo } from '@/lib/db/model';

const recycleInfoDAO = {
  findRecycleInfo: async (className: string) => {
    const recycleInfo = await RecycleInfo.findOne({ className });
    return recycleInfo;
  },

  addRecycleInfo: async (recycleResource: RecycleInformationType) => {
    const { category, imageSource, description } = recycleResource;
    await RecycleInfo.create({ category, imageSource, description });
    return category;
  },
};

export { recycleInfoDAO };
