import React from 'react';
import useSelect from './Hooks/useSelect';

const Filter = ({guardarCategoria}) => {

    const opciones = [
        {value: '', label: '--Seleccione--'},
        {value: 'MLA1743', label: 'Vehiculos'},
        {value: 'MLA5726', label: 'Electrodomesticos'},
        {value: 'MLA1051', label: 'Celulares y telefonos'},
        {value: 'MLA1459', label: 'Inmuebles'},
        {value: 'MLA1574', label: 'Hogar'},
        {value: 'MLA1276', label: 'Deportes'},
        {value: 'MLA1132', label: 'Juguetes'},
        {value: 'MLA1430', label: 'Moda'},
        {value: 'MLA1512', label: 'Agro'},
        {value: 'MLA1367', label: 'Antigüedades y Colecciones'},
        {value: 'MLA1368', label: 'Arte, librería y otros'},
        {value: 'MLA1144', label: 'Consolas y VideoJuegos'},
    ]

    const [categoria, SeleccionarCategoria] = useSelect('MLA1953', opciones)

    const buscarCategoria = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return (
        <div className="row">
            <div className="input-field col s6">
                <form
                onSubmit={buscarCategoria}
                >
                    <SeleccionarCategoria />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className="waves-effect waves-light btn-small yellow accent-3"
                            value="Buscar"
                        />
                    </div>
                </form>
                </div>
                <div className="input-field col s6">
                    <input id="buscar" type="text" className="validate"></input>
                    <label>Buscar</label>
                 </div>
        </div>
    );
}
 
export default Filter;