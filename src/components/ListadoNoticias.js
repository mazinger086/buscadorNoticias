import React from 'react';
import Noticia from './Noticia';
import styles from './ListNoticia.module.css';
import PropTypes from 'prop-types';

const ListadoNoticias = ({noticias}) => {
    return ( 
        <div className={`row ${styles.wrap}`}>
        {noticias.map(noticia => (
            <Noticia 
                key={noticia.url}
                noticia={noticia}
            />
        ))}
        
        </div>

     );
}

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
 
export default ListadoNoticias;