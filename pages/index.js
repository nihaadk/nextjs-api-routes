import { useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
	const emailInput = useRef();
	const feedbackInput = useRef();
	const [ feedbackItems, setFeedbackItems ] = useState([]);

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredEmail = emailInput.current.value;
		const feedbackText = feedbackInput.current.value;

		const reqBody = {
			email: enteredEmail,
			text: feedbackText
		};

		fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify(reqBody),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	return (
		<div className="container p-5">
			<div className="row text-center my-2">
				<h1>Home Page</h1>
			</div>
			<div className="row my-2">
				<div className="col-6 offset-3">
					<form onSubmit={submitFormHandler}>
						<div className="form-group">
							<labe htmlFor="email">Your Email Adresse</labe>
							<input className="form-control" id="email" type="email" ref={emailInput} />
						</div>
						<div className="form-group">
							<labe htmlFor="feedback">Your feedback</labe>
							<textarea className="form-control" id="feedback" rows="5" ref={feedbackInput} />
						</div>
						<button type="submit" className="btn btn-primary my-2">
							Send
						</button>
					</form>
				</div>
				<hr />
				<div className="col-6 offset-3">
					<Link href="/feedback">
						<button className="btn btn-primary btn-bock">Load Feedbacks</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
