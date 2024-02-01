import * as tmImage from '@teachablemachine/image';
import { PredictionType } from '../types/types';

const teachableMachineURL = process.env.NEXT_PUBLIC_TEACHABLE_MACHINE_URL;

async function useTeachableModelPredict(
  image: HTMLImageElement
): Promise<PredictionType> {
  const modelURL = `${teachableMachineURL}model.json`;
  const metadataURL = `${teachableMachineURL}metadata.json`;
  const model = await tmImage.load(modelURL, metadataURL);
  const predictions = await model.predictTopK(image, 10);
  const maximumPrediction = predictions.reduce((prevPredict, targetPredict) => {
    return prevPredict.probability > targetPredict.probability
      ? prevPredict
      : targetPredict;
  });
  return {
    category: maximumPrediction.className,
    probability: maximumPrediction.probability,
  };
}

export default useTeachableModelPredict;
