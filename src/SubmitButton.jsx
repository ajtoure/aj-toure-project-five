import React from 'react';

class SubmitButton extends Component {
    
    handleSubmit(){
        alert("Submitted!");
        let nam = form.input
        this.state.entries.newEntry.date = 
    }

    addBlog(e){
        e.preventDefault();
        dbRef.database().ref('entries').push(this.)
    }

    render() {
        return (
            <button onClick={this.handleClick.addBlog}>Submit</button>
        )
    }
}