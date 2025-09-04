import Button from "./button";

export default function TodoList({title, time, description, onClick}) {
    return (
        <>
        <div className="flex flex-row w-full p-4 bg-neutral-50 rounded-lg">
            <div className="flex flex-col justify-content-center grow">
            <b>{title} - {time}</b>
            <p>{description}</p>
            </div>
            <div>
            <Button onClick={onClick} color="danger">Delete</Button>
            </div>
        </div>
    </>
    )
}