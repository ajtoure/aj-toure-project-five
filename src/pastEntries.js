import React, { Component } from "react";
import Firebase from './firebase';

class PastEntries extends Component {

    constructor() {
        super() {
            super();
            this.state = {
                diaryEntries: [];
            }
        }
    }
    render() {
        return (
            <div>
                <aside class="prevEntries">
                    <ul>
                        <li>
                            <img src="" alt=""> previous entry
                        </li>
                        <li>
                            <img src="http://placekitten.com/100/100" alt=""> previous entry
                        </li>
                        <li>
                            <img src="http://placekitten.com/100/100" alt=""> previous entry
                        </li>
                        <li>
                            <img src="http://placekitten.com/100/100" alt=""> 
                            <p>previous entry</p> 
                        </li>
                    </ul>
                </aside>
            </div>
        )
    }
}