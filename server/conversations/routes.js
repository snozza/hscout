import { Router } from 'express';
import loadConversations from './loadConversations';
import json2csv from 'json2csv';
import moment from 'moment';

const router = Router();

function formatConversation(conversation) {
  const closedAt = conversation.closedAt;
  if (closedAt) {
    conversation.closedBy = conversation.closedBy.email;
    const startTime = moment(conversation.createdAt);
    const endTime = moment(closedAt);
    const duration = moment.duration(endTime.diff(startTime));
    conversation.totalDuration = duration.asHours().toFixed(2);
  } else {
    conversation.totalDuration = null;
  }
  return conversation;
}

async function constructConversationReport(req, res) {
  const conversationDetails = await loadConversations();
  const conversations = conversationDetails.items.map(formatConversation);
  const fields = ['id', 'createdAt', 'closedAt', 'closedBy', 'totalDuration'];
  const fieldNames = ['id', 'Created At', 'Closed At', 'Closed By', 'Total Duration (hours)'];
  const csvOutput = json2csv({ data: conversations, fields, fieldNames });
  res.attachment('conversations.csv');
  return res.send(csvOutput);
}

router.route('/conversations')
  .get(constructConversationReport);

export default router;
