import axiosClient from "./axiosClient";

export const rickandmortyapi = {
  getCharacters(params) {
    return axiosClient.get("character", { params });
  },
  getCharacter(id) {
    return axiosClient.get(`character/${id}`);
  },
  getLocations(id) {
    return axiosClient.get(`location/${id}`);
  },
};
