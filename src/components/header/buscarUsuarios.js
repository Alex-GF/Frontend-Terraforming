import {useRef, useEffect} from 'react';

import "../../static/css/header.css";

const BuscarUsuarios = () => {
    
    let headerSearch = useRef();
    
    useEffect(() => {
        headerSearch.current.addEventListener('mouseover', function(){
            this.style.background = "url('../images/lens-edited.png')";
            this.style.fontWeight = "bold";
        }, false);
        headerSearch.current.addEventListener('mouseout', function(){
            this.style.background = "url('../images/lens.png')";
            this.style.fontWeight = "normal";
        }, false);
    }, [])

    return (

        <div className="col-auto" id="buscUser">
            <form className="form-inline float-left my-2 my-lg-0 justify-content-xl-center" id="searchForm">
                <input id="header-search" ref={headerSearch} className="class-search input-icono" name="search" list="searchDatalist" type="Search"
                    placeholder="Buscar usuarios" title=" Busca por usuarios" required />
                <datalist id="searchDatalist"></datalist>
            </form>
        </div>

    );
}

export default BuscarUsuarios;