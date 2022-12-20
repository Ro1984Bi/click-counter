import '../css/Button.css'

function Button({ text, isButtonClick, handleClick }) {
  return (
    <button
   className={isButtonClick ? 'button-click' : 'reset-button'} 
   onClick={handleClick} >
    
    { text }
    </button>
  )
}

export default Button