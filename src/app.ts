import * as http from "http";

import {
  getListEpisodes,
  getFilterEpisodes,
} from "./controllers/podscasts-controller";

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];
  if (request.method === HttpMethod.GET) {
    switch (baseUrl) {
      case Routes.LIST:
        await getListEpisodes(request, response);
        break;
      case Routes.ESPISODE:
        await getFilterEpisodes(request, response);
        break;
    }
  }
};
