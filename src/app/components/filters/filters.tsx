import { FilterButton, FilterButtonContainer, FilterContainer, ItemsLeft } from './filters.components'

export const Filter = ({
  total,
  activeFilter,
  showAll,
  showActive,
  showCompleted,
  handleClearComplete
}: any) => {
  return (
    <>
      <ItemsLeft total={total} active={activeFilter} />
      <FilterContainer>
        <FilterButtonContainer>
          <FilterButton action={() => showAll()} active={activeFilter} filter='todas' />
          <FilterButton action={() => showActive()} active={activeFilter} filter='activas' />
          <FilterButton action={() => showCompleted()} active={activeFilter} filter='completas' />
        </FilterButtonContainer>
        <button
          onClick={() => handleClearComplete()}
          className='border-solid border-red-500 px-1 border-2 rounded-full text-sm text-red-500 hover:bg-red-400 hover:text-white'
        >
          Borrar terminadas
        </button>
      </FilterContainer>
    </>
  )
};

export default Filter;