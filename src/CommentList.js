class CommentList{
	constructor(){
		this.comments = []
	}


	render(){
		this.comments.map(function(comment){
			return `<ul>${comment.render()}</ul>`

		})
	}

	addComment(text){
		const comment = new Comment(text)
		this.comments.push(comment)

	}
}