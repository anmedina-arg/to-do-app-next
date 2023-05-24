const FilterContainer = ({children}:any) => {
  return (
    <div className="flex justify-between">
      {children}
    </div>
  )
};

const ItemsLeft = ({total = 0, active}:any) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <span>Tienes {total} tareas en: {active}</span>
    </div>
  )
};

const FilterButtonContainer = ({ children }: any) => {
  return (
    <div className="">
      {children}
    </ div>
  )
};

const FilterButton = ({action, active, filter}:any) => {
  return (
    <button onClick={action} className={`mx-1 border-solid border-gray-400 border-2 rounded-full px-1 hover:bg-gray-300 cursor-pointer` + (active?.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-500' : 'text-gray-500')}>
      {filter}
    </button>
  )
}

export { FilterContainer, ItemsLeft, FilterButtonContainer, FilterButton };