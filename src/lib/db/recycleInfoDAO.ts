import { RecycleInformationType } from '@/app/types/types';
import { RecycleInfo } from '@database/model';

const recycleInfoDAO = {
  findRecycleInfo: async (category: string, subCategory?: string) => {
    const categorizedRecycleInfo = await RecycleInfo.find({ category });

    if (subCategory) {
      const targetRecycleInfo = categorizedRecycleInfo.find(
        (information) => information.subCategory === subCategory
      );

      return targetRecycleInfo;
    }

    return categorizedRecycleInfo;
  },

  addRecycleInfo: async (recycleResource: RecycleInformationType) => {
    const { category } = recycleResource;
    await RecycleInfo.create(recycleResource);
    return category;
  },
};

export { recycleInfoDAO };
