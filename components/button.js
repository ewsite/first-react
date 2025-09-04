export default function Button({ color, onClick, children }) {
    
    const availableColors = {
        primary: "bg-blue-400",
        secondary: "bg-neutral-500",
        danger: "bg-red-500"
    }
    
    let targetColor = availableColors[color]

    return (
        <button className={`text-neutral-50 cursor-pointer ${targetColor} px-3 py-2 rounded`} onClick={onClick}>{children}</button>
    )
}