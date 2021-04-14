import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import Spinner from "../pages/Spinner";


const Header = ({history}) => {
    const [search, setSearch] = useState('')
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            history.push(`/browse/${search}`)
        }
    }

    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-dark p-6">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <div>
                        <i className="fas fa-glass-cheers"></i>
                    </div>
                    <span className="font-semibold  tracking-tight ">The cocktail!</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="header_menu">
                        <Link to ="/"
                              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-white mr-4">
                            Home
                        </Link>
                        <Link to ="/drinks"
                              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-white mr-4">
                            Drinks
                        </Link>

                    </div>
                   <div className="ml-auto">
                       <input
                           className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none mb-4"
                           type="search" name="search" placeholder="Search"
                           onChange={(e) => setSearch(e.target.value)}
                           onKeyPress={handleSearch}/>
                   </div>
                </div>
            </nav>
        </header>
    );
};

export default withRouter (Header);