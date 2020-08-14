import React, { Component } from 'react';

class DisplayEntry extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        date: 
                        {this.date}
                    </li>
                    <li>
                        emoji: 
                        {this.emoji}
                    </li>
                    <li>
                        One good thing that happened today was: {this.goodThing}
                    </li>
                    <li>
                        One thing I'm thankful for: 
                        {this.thankFul}
                    </li>
                    <li>
                        My goal for tomorrow: 
                        {this.toMorrow}
                    </li>
                    <li>
                        I'll leave you with this: 
                        {this.finalThought}
                    </li>
                </ul>
            </div>
        )
    }
}

export default DisplayEntry;