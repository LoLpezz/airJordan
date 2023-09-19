function SelectField(props){
    return(
        <div>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
            <label>{props.label}</label>
            <input name={props.name} type="text"/>
        </div>
    )
}

export default SelectField