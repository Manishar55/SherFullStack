
const NoteCard = ({note})=>{
    return (
        <div className="w-[31%] border border-blue-700 bg-blue-50 p-3 flex flex-col gap-4 rounded-xl">

            <h1 className="font-bold">{note.title}</h1>

            <p className="text-xs">
                {note.description.length>20 ? note.description.substring(0, 20): note.description}
            </p>

            <div className="flex justify-between">
                <button className="p-2 bg-yellow-500 text-white rounded ">Update</button>
                <button className="p-2 bg-red-500 text-white rounded ">Delete</button>
            </div>
        </div>
    );
};

export default NoteCard;