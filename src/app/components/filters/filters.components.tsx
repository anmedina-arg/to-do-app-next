const FilterContainer = ({children}:any) => {
  return (
    <div>
      {children}
    </div>
  )
};

const ItemsLeft = ({total = 0}:any) => {
  return (
    <div>
      <span>{total} Items left</span>
    </div>
  )
};

const FilterButtonContainer = ({ children }: any) => {
  return (
    <div>
      {children}
    </ div>
  )
};

const FilterButton = ({action, active, filter}:any) => {
  return (
    <button onClick={action} className={`hover:text-white cursor-pointer` + (active?.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-500' : 'text-gray-500')}>
      {filter}
    </button>
  )
}

export { FilterContainer, ItemsLeft, FilterButtonContainer, FilterButton };