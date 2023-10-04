import { RecycleInfo } from '@/libs/db/model';

const recycleInfoDAO = {
  findRecycleInfo: async (className: string) => {
    const recycleInfo = await RecycleInfo.findOne({ className });
    return recycleInfo;
  },
};

export { recycleInfoDAO };
