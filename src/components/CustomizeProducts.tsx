const CustomizeProducts = () => {
    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-medium">Choose a color</h4>
            <ul className="flex items-center gap-3">
                <li className="w-8 h-8 rounded-full ring-1 ring-gray"></li>
            </ul>
            <h4 className="font-medium">Choose a size</h4>
            <ul className="flex items-center gap-3"></ul>
        </div>
    )
}
export default CustomizeProducts