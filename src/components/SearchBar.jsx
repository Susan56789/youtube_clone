import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); //useNavigate is a hook that allows us to navigate to a different route

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
        }
    }


    return (
        <Paper
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2, //padding left
                boxShadow: 'none',
                mr: { sm: 5 } //margin right on small devices
            }}
        >
            <input className='search-bar'
                placeholder='Search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>

    )
}

export default SearchBar