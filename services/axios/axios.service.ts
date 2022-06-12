import { SERVER_BASE_URL } from '@env';
import axios from 'axios';
import { LOGIN_ENDPOINT } from '../../common/constants';

const loginUrl = `${SERVER_BASE_URL}/${LOGIN_ENDPOINT}`;

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(loginUrl, { username, password });
    return { accessToken: response.data.access_token };
  } catch (error) {
    console.error(error);
    return null;
  }
};
