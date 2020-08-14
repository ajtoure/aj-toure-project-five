import React, { Component } from 'react';


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:'',
            goodThing: '',
            thankFul: '',
            toMorrow: '',
            finalThoughts: '',
            emoji: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        let date = this.refs.date.value;
        let goodThing = this.refs.goodThing.value;
        let thankFul = this.refs.thankFul.value;
        let toMorrow = this.refs.toMorrow.value;
        let finalThoughts = this.refs.finalThoughts.value;

        const value = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: value
        });
        console.log(this.state)
    }

    
    render() {
        return (
        
            <div class="wrapper">
                <form action="submit" name="blogEntryForm">

                    <label htmlFor="date" name="date">
                        date:
                    </label>
                    <input type="date" name="date" value={this.state.userInput}/>

                    <label name="goodThing">
                        One good thing that happened today was:
                    </label>
                    <input type="text" name="goodThing" placeholder="(i.e. 'I got my app to render to the page' " onChange={this.handleChange} value={this.state.userInput} required />

                    <label htmlFor="thankFul" name="thankFul">
                        Today I'm thankful for:
                    </label>
                    <input type="text" name="thankFul" placeholder="(i.e. 'my cat who always cheers me up')" onChange={this.handleChange} value={this.state.userInput} required />

                    <label htmlFor="toMorrow"  name="toMorrow">
                        Tomorrow, one thing I'll do better is:
                    </label>
                    <input type="text" placeholder="(i.e. 'be brave enough to ask more questions!')" onChange={this.handleChange} value={this.state.userInput} required />

                    <label htmlFor="finalThoughts">
                        A final thought:
                    </label>
                    <textarea name="finalThoughts" id="finalThoughts" cols="30" rows="5" onChange={this.handleChange}></textarea>

                    <label for="emoji">
                        Pick an emoji that represents your day!
                    </label>
                    <select name="emoji" id="emoji" value={this.state.userInput}>
                        <option value="">
                            🌸 
                        </option>
                        <option value="">🦋</option>
                        <option value="">🌻</option>
                        <option value="">
                            🌊 
                        </option>
                    </select>

                    <button type="submit">
                        Submit
                    </button>

                    <button type="submit">
                        Reset
                    </button>
                </form>
            </div>
        )
    }
}

export default Blog;