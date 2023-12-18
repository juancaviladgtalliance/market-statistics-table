import React, { useEffect } from "react";
import { hooks } from "../lib/redux";
import { getAsyncCities } from "../lib/redux/features/tableslicer";
import {
  TitleComponent,
  CurrrentListComponent,
  TotalSoldComponent,
  MoiComponent,
  AvgComponent,
  AvgPropertyComponent,
  RatioComponent,
  NeighborhoodList,
} from "./row";
import { TableWrapper } from "../lib/styledComponents/table";
import { Skeleton } from "antd";
import { priceRanges } from "../constants";

const TableComponent = () => {
  const dispatch = hooks.useAppDispatch();
  const { activeNeighborhood } = hooks.useAppSelector((state) => state.ius);
  const { range, type, style, neighborhood, price } = hooks.useAppSelector(
    (state) => state.filters
  );

  const { cities, failed } = hooks.useAppSelector((state) => state.tables);

  const validatePrice = price === "all" ? priceRanges["0-1"].value : price;

  useEffect(() => {
    if (cities.length === 0 && !failed) {
      dispatch(getAsyncCities());
    }
  }, []);

  const neighborhoodRows =
    neighborhood === 0
      ? cities
      : cities.filter((city) => city.id === neighborhood);

  return (
    <TableWrapper>
      {cities.length === 0 && !failed ? (
        <div className="skeletonContainer">
          <Skeleton
            paragraph={{ rows: 10, width: "100%" }}
            avatar={false}
            active
          />
        </div>
      ) : (
        neighborhoodRows.map((row) => {
          const { Condo, Home } = row.range[range];
          const currentRange = type === "condo" ? Condo : Home;
          const { NoWaterFront, WaterFront, NoStyle, NewProperty } =
            currentRange;

          const activeClass = row.id === activeNeighborhood ? " active" : "";
          const ActiveRow = row.id === activeNeighborhood ? " active-row" : "";
          if (style === "new") {
            const {
              moi,
              percent_sale_sold_price,
              pxsqft_sold,
              sqft_sold,
              total_active,
              total_sold,
              variation_active,
              variation_sold,
            } = NewProperty[validatePrice];
            return (
              <React.Fragment key={row.id}>
                <div className={`row${ActiveRow}`} key={row.id}>
                  <TitleComponent
                    rowId={row.id}
                    title={row.name}
                    range={`${range}`}
                  />
                  <MoiComponent moi={moi} activeClass={activeClass} />
                  <AvgComponent avg={pxsqft_sold} activeClass={activeClass} />
                  <RatioComponent
                    ratio={percent_sale_sold_price}
                    activeClass={activeClass}
                  />
                  <AvgPropertyComponent
                    avgProp={sqft_sold}
                    activeClass={activeClass}
                  />
                  <TotalSoldComponent
                    variation_sold={variation_sold}
                    totalSold={total_sold}
                    activeClass={activeClass}
                  />
                  <CurrrentListComponent
                    variation_active={variation_active}
                    unitSold={total_active}
                    activeClass={activeClass}
                  />
                </div>
                {row.id == neighborhood && <NeighborhoodList rowId={row.id} />}
              </React.Fragment>
            );
          } else if (style === "no_waterfront") {
            const {
              moi,
              percent_sale_sold_price,
              pxsqft_sold,
              sqft_sold,
              total_active,
              total_sold,
              variation_active,
              variation_sold,
            } = NoWaterFront[validatePrice];
            return (
              <React.Fragment key={row.id}>
                <div className={`row${ActiveRow}`} key={row.id}>
                  <TitleComponent
                    rowId={row.id}
                    title={row.name}
                    range={`${range}`}
                  />
                  <MoiComponent moi={moi} activeClass={activeClass} />
                  <AvgComponent avg={pxsqft_sold} activeClass={activeClass} />
                  <RatioComponent
                    ratio={percent_sale_sold_price}
                    activeClass={activeClass}
                  />
                  <AvgPropertyComponent
                    avgProp={sqft_sold}
                    activeClass={activeClass}
                  />
                  <TotalSoldComponent
                    variation_sold={variation_sold}
                    totalSold={total_sold}
                    activeClass={activeClass}
                  />
                  <CurrrentListComponent
                    variation_active={variation_active}
                    unitSold={total_active}
                    activeClass={activeClass}
                  />
                </div>
                {row.id == neighborhood && <NeighborhoodList rowId={row.id} />}
              </React.Fragment>
            );
          } else if (style === "waterfront") {
            const {
              moi,
              percent_sale_sold_price,
              pxsqft_sold,
              sqft_sold,
              total_active,
              total_sold,
              variation_active,
              variation_sold,
            } = WaterFront[validatePrice];
            return (
              <React.Fragment key={row.id}>
                <div className={`row${ActiveRow}`} key={row.id}>
                  <TitleComponent
                    rowId={row.id}
                    title={row.name}
                    range={`${range}`}
                  />
                  <MoiComponent moi={moi} activeClass={activeClass} />
                  <AvgComponent avg={pxsqft_sold} activeClass={activeClass} />
                  <RatioComponent
                    ratio={percent_sale_sold_price}
                    activeClass={activeClass}
                  />
                  <AvgPropertyComponent
                    avgProp={sqft_sold}
                    activeClass={activeClass}
                  />
                  <TotalSoldComponent
                    variation_sold={variation_sold}
                    activeClass={activeClass}
                    totalSold={total_sold}
                  />
                  <CurrrentListComponent
                    variation_active={variation_active}
                    activeClass={activeClass}
                    unitSold={total_active}
                  />
                </div>
                {row.id == neighborhood && <NeighborhoodList rowId={row.id} />}
              </React.Fragment>
            );
          } else {
            const {
              moi,
              percent_sale_sold_price,
              pxsqft_sold,
              sqft_sold,
              total_active,
              total_sold,
              variation_active,
              variation_sold,
            } = NoStyle[validatePrice];

            return (
              <React.Fragment key={row.id}>
                <div className={`row${ActiveRow}`} key={row.id}>
                  <TitleComponent
                    title={row.name}
                    range={`${range}`}
                    rowId={row.id}
                  />
                  <MoiComponent moi={moi} activeClass={activeClass} />
                  <AvgComponent avg={pxsqft_sold} activeClass={activeClass} />
                  <RatioComponent
                    ratio={percent_sale_sold_price}
                    activeClass={activeClass}
                  />
                  <AvgPropertyComponent
                    avgProp={sqft_sold}
                    activeClass={activeClass}
                  />
                  <TotalSoldComponent
                    variation_sold={variation_sold}
                    totalSold={total_sold}
                    activeClass={activeClass}
                  />
                  <CurrrentListComponent
                    variation_active={variation_active}
                    unitSold={total_active}
                    activeClass={activeClass}
                  />
                </div>
                {row.id == neighborhood && <NeighborhoodList rowId={row.id} />}
              </React.Fragment>
            );
          }
        })
      )}
    </TableWrapper>
  );
};

export default TableComponent;
