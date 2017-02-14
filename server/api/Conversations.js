import Base from './Base';

export default class ConversationsAPI extends Base {
  list(params, headers, json) {
    return this.apiClient.get('mailboxes/84639/conversations.json', {}, params, headers, json);
  }
}
