import { buildFeedbackPath, extractFeedback } from './index';

function handler(req, res) {
	const feedbackId = req.query.feedbackId;
	const filePath = buildFeedbackPath();
	const fetchData = extractFeedback(filePath);
	const selectedFeedback = fetchData.find(({ id }) => id === feedbackId);
	res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
