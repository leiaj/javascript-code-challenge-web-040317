class CommentList{
	constructor(){
		this.comments = []
	}


	render(){
		this.comments.map(function(comment){
			//comment = comment obj  w/ txt
			//comment.text = "comment string"
			return `<ul>${comment.text.render()}</ul>`
			//comment.render() returns "<li>[object Object]</li>"
			//comment.text.render() returns "<li>Yay</li>"

		})
	}

	addComment(text){
		const comment = new Comment(text)
		this.comments.push(comment)

	}
}