import apiSingleton from '../apiSingleton';
import config from '../../config';

const { conversations: conversationsApi } = apiSingleton;

const headers = {
  Accept: 'application/json',
  Authorization: config.helpscoutAuth
};

export default async function loadConversations() {
  const conversations = await conversationsApi.list({}, headers, true);
  return conversations;
}
