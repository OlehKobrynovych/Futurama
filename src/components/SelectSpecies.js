import { Form } from "react-bootstrap";

const SelectSpecies = ({age, setSpecies, search, setSearch, setSearchAge}) => {

    return (
        <Form className='d-flex mb-4'>
            <>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Filter Name</Form.Label>
                    <Form.Control onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Filter Name' />
                </Form.Group>
                <Form.Group className='ms-3' controlId="formBasicAge">
                    <Form.Label>Filter by age</Form.Label>
                    <Form.Control onChange={(e) => setSearchAge(e.target.value)} value={age} placeholder='Filter by age' />
                </Form.Group>
            </>
            <Form.Group className='ms-3'>
                <Form.Label>Search species</Form.Label>
                <Form.Select onChange={(e) => setSpecies(e.target.value)} >
                    <option value="" >Search species</option>
                    <option value='Human' >Human</option>
                    <option value='Mutant' >Mutant</option>
                    <option value='Robot' >Robot</option>
                    <option value='Martian' >Martian</option>
                    <option value='Decapodian' >Decapodian</option>
                    <option value='Omicronian' >Omicronian</option>
                    <option value='Amphibiosans' >Amphibiosans</option>
                </Form.Select>
            </Form.Group>
        </Form>
    )
}

export default SelectSpecies;