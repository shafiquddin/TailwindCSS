export default function Button({ children, ...props }) {
    return <button className=" px-4 py-2 font-semibold text-stone-900 uppercase bg-amber-400 rounded hover:bg-amber-500" {...props}>{children}</button>
}