import PropTypes from "prop-types"  

TextInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    id: PropTypes.string
}

export default function TextInput ({id, label, value, setValue}){

    return(
        <div>
        <label htmlFor={id}>{label}</label>
        <input 
        type="text" 
        name={id}
        id={id} 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        />
      </div>
    )
}