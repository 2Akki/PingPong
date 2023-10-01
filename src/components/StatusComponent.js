function StatusComponent({ItemsObject}) {
    const numItems = ItemsObject.length;
    const PackedItems = ItemsObject.filter((item) => item.packed).length;
    return (
        <footer className="stats">
            <em>You have {numItems} {numItems>1?"items":"item"} on your List, and You already Packed {PackedItems} ({PackedItems>0?(PackedItems/numItems).toFixed(2)*100:"0"}%)</em>   
        </footer>
    )
}

export default StatusComponent
