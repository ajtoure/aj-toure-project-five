import React, { Component } from 'react';


class Blog extends Component {
    render() {
        return (
            <div class="wrapper">
                <form action="" method="" class="blogEntryForm" name="blogEntryForm">

                    <label for="date" class="date" name="date">date:</label>
                    <input type="date" class="date" name="date" />

                    <label for="oneGoodThing" class="oneGoodThing" name="oneGoodThing">One good thing that happened today was:</label>
                    <input type="text" name="oneGoodThing" placeholder="(i.e. 'I got my app to render to the page' " required />

                    <label for="thankFul" class="thankFul" name="thankFul">Today I'm thankful for:</label>
                    <input type="text" name="thankFul" placeholder="(i.e. 'my cat who always cheers me up')" required />

                    <label for="toMorrow" class="toMorrow" name="toMorrow">Tomorrow, one thing I'll do better is:</label>
                    <input type="text" placeholder="(i.e. 'be brave enough to ask more questions!')" required />

                    <label for="finalThoughts">A final thought:</label>
                    <textarea name="finalThoughts" id="finalThoughts" cols="30" rows="10"></textarea>

                    <label for="emoji">Pick an emoji that represents your day!</label>
                    <select name="emoji" id="emoji">
                        <option value="">:devil:</option>
                        <option value="">:butterfly:</option>
                        <option value="">:sunflower:</option>
                        <option value="">:flower:</option>
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