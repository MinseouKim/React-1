export default function square({value,onsquareClick}){
    return(
        <div>
            <button
            className="square" onClick={onsquareClick}>{value}
            </button>
        </div>
    )
}
