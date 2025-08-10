import { PodcastModel } from "../models/podcast-model";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";
import { serviceFilterEpisodesByCategory } from "./filter-episodes-category-service";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  console.log('entrou em serviceFilterEpisodes')
  //define a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  //buscando os dados

  const queryString = podcastName?.split("?")[1] || "";
  console.log("queryString:", queryString);
  const params = new URLSearchParams(queryString);
  console.log("params:", Array.from(params.entries()));
  const entries = Array.from(params.entries());
  const [key, value] = entries[0];
  let data;
  switch (key.toLowerCase()) {

    case 'c':
      data = await serviceFilterEpisodesByCategory(value);
      break;
    case 'p':
    default:
      data = await repositoryPodcast(value || undefined);
  }

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };

  return responseFormat;
};
