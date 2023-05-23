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
      <FilterContainer>
        <ItemsLeft total={total} />
        <FilterButtonContainer>
          <FilterButton action={() => showAll()} active={activeFilter} filter='all'/>
          <FilterButton action={() => showActive()} active={activeFilter} filter='active'/>
          <FilterButton action={() => showCompleted()} active={activeFilter} filter='completed'/>
        </FilterButtonContainer>
        <button onClick={() => handleClearComplete()}>
          Clear completed
        </button>
      </FilterContainer>
    </>
  )
};

export default Filter;