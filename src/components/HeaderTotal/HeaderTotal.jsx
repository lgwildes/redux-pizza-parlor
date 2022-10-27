import { useSelector } from 'react-redux';



function HeaderTotal() {
    const currentCost = useSelector(store => store.total)
    return (
        <h5>Total: {currentCost}</h5>
    )
}

export default HeaderTotal;