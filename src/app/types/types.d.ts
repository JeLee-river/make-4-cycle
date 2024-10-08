export interface RecycleInformationType {
  category: string;
  subCategory?: string;
  imageSource: string;
  recycleInfo: string;
}

export type MaterialType = Pick<RecycleInformationType, 'category'> & {
  subCategory?: RecycleInformationType['subCategory'][];
};

export interface PredictionType extends MaterialType {
  probability: number;
}
