class CommentList{
	constructor(){
		this.comments = []
	}


	render(){
		this.comments.map(function(comment){
			//comment = comment obj  w/ txt
			//comment.text = "comment string"
			debugger
			return `<ul>${comment.text.render(this)}</ul>`
			//comment.render() returns "<li>[object Object]</li>"
			//comment.text.render() returns "<li>Yay</li>"

		})
		//y do u return undefined!??!!?

	}

	addComment(text){
		const comment = new Comment(text)
		this.comments.push(comment)

	}
}