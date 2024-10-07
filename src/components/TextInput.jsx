import PropTypes from "prop-types"  

TextInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

export default function TextInput ({label, value, setValue}){

    return(
        <div>
        <label htmlFor="title">{label}</label>
        <input 
        type="text" 
        id="title" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        />
      </div>
    )
}