import React from 'react';

class Comment extends React.Component {
	render() {
		return (
			<div className="form-group">
			<label className="text-uppercase">
			   about project
			</label>
			<textarea
			   id="commentTextarea"
			   name="comment"
			   className="form-control"
			   rows={5}
			   maxLength= {500}        
			   placeholder="comments"
			   disabled={false}
			/>
		 </div>
		)
	}
}

export default Comment;