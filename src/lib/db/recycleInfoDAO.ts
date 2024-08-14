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

  addRecycleInfo: async (recycleResource: RecycleInformationType[]) => {
    await RecycleInfo.create(recycleResource);

    const categoryList = recycleResource.map((resources) => resources.category);
    return categoryList;
  },
};

export { recycleInfoDAO };
