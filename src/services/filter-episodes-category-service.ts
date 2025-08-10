import { PodcastModel } from "../models/podcast-model";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast, repositoryPodcastByCategory } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodesByCategory = async (
  podcastCategory: string | undefined
): Promise<PodcastModel[]> => {
  //define a interface de retorno
  console.log('entrou em serviceFilterEpisodesByCategory')
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  //buscando os dados
  const data: PodcastModel[] = await repositoryPodcastByCategory(podcastCategory || '');
  return data
};
