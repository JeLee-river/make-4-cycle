import { RecycleInfo } from '@/libs/db/model';

type RecycleResource = {
  className: string;
  classImageSource: string;
  recycleInfo: string;
};

const recycleInfoDAO = {
  findRecycleInfo: async (className: string) => {
    const recycleInfo = await RecycleInfo.findOne({ className });
    return recycleInfo;
  },

  addRecycleInfo: async (recycleResource: RecycleResource) => {
    const { className, classImageSource, recycleInfo } = recycleResource;
    await RecycleInfo.create({ className, classImageSource, recycleInfo });
    return className;
  },
};

export { recycleInfoDAO };
