import React from 'react';


const Search = ({ select }) => {
    let input = null;
    const submitHandler = e => {
        e.preventDefault();
        const value = input.value;
        if(value){
            select(value);
            input.value = ""
        }

    }
    return (

        <form className="ui form" onSubmit={submitHandler}>
            <div className="field">
                <label>Search</label>
                <input 
                    type="text" 
                    name="first-name" 
                    placeholder="Please enter the name"
                    ref={node => {input = node}} 
                />
            </div>
        </form>
    )
}
export default Search;
