import ApiClient from './ApiClient';
import ConversationsAPI from './Conversations';

export default function ({ apiPrefix } = {}) {
  if (!apiPrefix) {
    throw new Error('[apiPrefix] required');
  }

  const api = new ApiClient({ prefix: apiPrefix });

  return {
    apiClient: api,
    conversations: new ConversationsAPI({ apiClient: api }),
  };
}
