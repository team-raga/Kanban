import { createClient } from 'newt-client-js';

const newtClient = createClient({
  spaceUid: "kanban",
  token: "3lBpJQMgk-8rhwCDln44Zq_UCe3E-uKLPB2hRNSQ4FM",
  apiType: "cdn"
});

export { newtClient as n };
