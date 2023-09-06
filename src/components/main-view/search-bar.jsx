import { useState } from "react";
import { PropTypes } from "prop-types";
import Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

function SearchBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    return (
        <Form className="d-flex mt-5 mb-5">
            <Form.Control 
            className="ellipsis me-2" arial-aria-label="Search" 
            onChange={ (event) => {
                setSearchInput(event.target.value);
                if (!event.target.value) { onSearch('') }
            }}
            placeholder="Search Movie by Title, Genre, Director" type="search" value={searchInput}
             />
            <Button className="btn-secondary" variant="warning" 
            onClick={function(event) { event.preventDefault(); onSearch(searchInput); }} >
                Search
            </Button>
        </Form>
    )
}

export { SearchBar };