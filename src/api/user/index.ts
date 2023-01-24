import { BASE_URL, fetchData } from '../config';
import { HomeWidget } from './types';

const headers = {
  authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2NmMDk4MWMyMDc5MDMyYmIxZmQ5ZTIiLCJpYXQiOjE2NzQ1MTI3NzMsImV4cCI6MTcwNjA3MDM3M30.Zj5j4rvyhVNAaAtbX9KITOeqFByv49PRY04jgGa1g_0',
};

const getHomeWidgets = async (): Promise<Array<HomeWidget>> =>
  fetchData
    .get(`${BASE_URL}/user/home/widget`, {
      headers,
    })
    .then((response) => response.data);

const updateHomeWidgets = async (widgets: Array<HomeWidget>) =>
  fetchData.put(
    `${BASE_URL}/user/home/widget`,
    { widgets },
    {
      headers,
    }
  );

const user = { getHomeWidgets, updateHomeWidgets };
export default user;
