import React from 'react';
import '../App.css';

export class Menu extends React.Component {
    render() {
        return (
            <form>
                <input type='radio' name='src' value='fast' /> Fast
                <input type='radio' name='src' value='slow' /> Slow
                <input type='radio' name='src' value='cute' /> Cute
                <input type='radio' name='src' value='eek' /> Eek

            </form>
        );
    }

}