import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const devPath = path.resolve(process.cwd(), "src", "repositories", "podcasts.json");
const prodPath = path.resolve(process.cwd(), "dist", "repositories", "podcasts.json");

const pathData = fs.existsSync(prodPath) ? prodPath : devPath;

const loadData = (): PodcastModel[] => {
  const rawData = fs.readFileSync(pathData, "utf-8");
  return JSON.parse(rawData);
};

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  console.log("entrou em repositoryPodcast");
  const data = loadData();

  if (podcastName) {
    return data.filter(
      (podcast) => podcast.podcastName === podcastName
    );
  }

  return data;
};

export const repositoryPodcastByCategory = async (
  categoryName: string
): Promise<PodcastModel[]> => {
  const data = loadData();
  return data.filter(
    (podcast) => podcast.categories.includes(categoryName)
  );
};
