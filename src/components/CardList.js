export const CardList = ({items,resourceName, itemComponent: ItemComponent}) => {
    return (
        <>
            {items.map((item, i)=>(
                <ItemComponent key={i} {...{ [resourceName]: item }}/>
            ))}
        </>
    )
}