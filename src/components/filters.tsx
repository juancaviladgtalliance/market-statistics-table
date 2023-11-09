import { CityList, PropertyTypesObject } from "../types";
import {
  monthRanges,
  neighborhoodstitle,
  propertyTypes,
  propertyStyles,
  priceRanges,
} from "../constants";
import styled from "styled-components";
import {
  hooks,
  setRanges,
  setTypes,
  setStyles,
  setNeighborhood,
  setPrice,
} from "../lib/redux";
import { sortArrayByList } from "../helpers/sortByList";

const FilterWrapper = styled.div`
  .ms-wrapper-filters-list {
    order: 1 !important;
  }
`;

const FiltersComponent = ({
  neighborhoodList,
}: {
  neighborhoodList: CityList;
}) => {
  const dispatch = hooks.useAppDispatch();
  const { range, type, style, neighborhood, price } = hooks.useAppSelector(
    (state) => state.filters
  );

  const rangesinputs = Object.values(monthRanges);
  const typesinputs: PropertyTypesObject[] = Object.values(propertyTypes);
  const propertyStylesOptions = Object.values(propertyStyles);
  const priceRangesOptions = Object.values(priceRanges);

  const list = neighborhoodstitle;

  const result = sortArrayByList(neighborhoodList, list);
  return (
    <FilterWrapper id="wrap-subfilters">
      <div className="gwr">
        <div className="ms-filter">
          <form action="#" method="post">
            <div className="ms-wrapper-filters-list">
              <div className="ms-item fg">
                <label htmlFor="thecityid">Property Types</label>
                <select
                  className="ms-select fc-select f-ptype"
                  name="ptype"
                  id="ptype"
                  onChange={(e) => {
                    dispatch(setTypes(`${e.target.value}`));
                  }}
                >
                  {typesinputs.map((typeInput) => {
                    return (
                      <option
                        key={typeInput.value}
                        value={`${typeInput.value}`}
                        selected={typeInput.value == type}
                      >
                        {typeInput.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ms-item fg">
                <label htmlFor="thecityid">Neighborhood</label>
                <select
                  className="ms-select fc-select f-neighborhood"
                  name="thecityid"
                  id="thecityid"
                  onChange={(e) => {
                    dispatch(setNeighborhood(parseInt(e.target.value)));
                  }}
                >
                  <option value="0">Select a Neighborhood</option>
                  {result.map((neighborhoodObject) => {
                    // console.log(neighborhoodObject);
                    return (
                      <option
                        key={neighborhoodObject.shortcode_content_id}
                        value={neighborhoodObject.shortcode_content_id}
                        selected={
                          neighborhoodObject.shortcode_content_id ==
                          neighborhood
                        }
                      >
                        {neighborhoodObject.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="ms-item fg">
                <label htmlFor="thestyle">Property Style</label>
                <div className="ms-dropdown fc-dropdown f-pstyle js-fc-dropdown">
                  <select
                    className="ms-select fc-select f-pstyle"
                    name="thestyle"
                    id="thestyle"
                    onChange={(e) => {
                      dispatch(setStyles(`${e.target.value}`));
                    }}
                  >
                    {propertyStylesOptions.map((typeInput) => {
                      return (
                        <option
                          key={typeInput.value}
                          value={`${typeInput.value}`}
                          selected={typeInput.value == style}
                        >
                          {typeInput.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="ms-item fg">
                <label htmlFor="thepricerange">Price Range</label>
                <select
                  className="ms-select fc-select f-pricerange"
                  name="the_pricerange"
                  id="the_pricerange"
                  onChange={(e) => {
                    dispatch(setPrice(`${e.target.value}`));
                  }}
                >
                  {priceRangesOptions.map((rangeInput) => {
                    return (
                      <option
                        key={rangeInput.value}
                        value={`${rangeInput.value}`}
                        selected={rangeInput.value == price}
                      >
                        {rangeInput.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="ms-wrapper-month-list">
              <ul className="ms-month-list">
                {rangesinputs.map((rangeInput) => (
                  <li className="ms-item" key={rangeInput.value}>
                    <div className="ms-chk -radio">
                      <input
                        id={`${rangeInput.value}`}
                        type="radio"
                        name="month"
                        value={rangeInput.value}
                        className="f-interval-date"
                        checked={range === rangeInput.value}
                        onChange={() => dispatch(setRanges(rangeInput.value))}
                      />
                      <label htmlFor={`${rangeInput.value}`}>
                        {rangeInput.label}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </div>
      </div>
    </FilterWrapper>
  );
};

export default FiltersComponent;
