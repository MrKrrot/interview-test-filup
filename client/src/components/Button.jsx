export const Button = ({ handleClick, color, children }) => {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded ml-2`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
