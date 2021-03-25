import { buildFeedbackPath, extractFeedback } from '../api/feedback/index';
import { useState, Fragment } from 'react';

function FeedbackPage(props) {
	const [ feedbackData, setFeedbackData ] = useState();

	function loadFeedbackHandler(id) {
		fetch(`/api/feedback/${id}`).then((response) => response.json()).then((data) => {
			setFeedbackData(data.feedback);
		});
	}

	return (
		<Fragment>
			<div className="container">
				{feedbackData && (
					<div className="text-center my-4">
						<h1>{feedbackData.email}</h1>
					</div>
				)}
				<ul className="list-group my-4">
					{props.feedbackItems.map(({ id, text }) => (
						<li key={id} className="list-group-item d-flex justify-content-between">
							<div>{text}</div>
							<div>
								<button onClick={loadFeedbackHandler.bind(null, id)} className="btn btn-primary btn-sm">
									Show Details
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</Fragment>
	);
}

export async function getStaticProps() {
	const filePath = buildFeedbackPath();
	const data = extractFeedback(filePath);
	return {
		props: {
			feedbackItems: data
		}
	};
}

export default FeedbackPage;
