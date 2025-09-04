export default function TextInput({ name, type, placeholder, value, id}) {
    const availableTypes = ["text", "number", "password"]
    const selectedType = availableTypes.find(availableType => availableType == type)
    return (<input className="grow px-2 w-full border-1 border-neutral-300 rounded bg-neutral-200" name={name} type={selectedType ?? availableTypes[0]} placeholder={placeholder} value={value} id={id}/>)
}