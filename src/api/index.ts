import axios from 'axios';

const baseURL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

export type Dragon = {
  id?: number;
  createdAt: Date;
  name: string;
  type: 'water' | 'air' | 'earth' | 'fire';
};

export const DragonService = {
  getList: async () => {
    const response = await axios.get(baseURL);
    return response.data;
  },

  getDetails: async (id: number) => {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  },

  createDragon: async (dragonData: Dragon) => {
    const response = await axios.post(baseURL, dragonData);
    return response.data;
  },

  editDragon: async (id: number, dragonData: Dragon) => {
    const response = await axios.put(`${baseURL}/${id}`, dragonData);
    return response.data;
  },

  deleteDragon: async (id: number) => {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
  },
};
