import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function FilterBar({ allProducts, dispatch, sortingOrder }) {
  const uniqueMemories = [
    ...new Set(allProducts.map((obj) => obj.memory || "")),
  ];
  const uniqueDestinations = [
    ...new Set(allProducts.map((obj) => obj.destination || "")),
  ];
  const uniqueBrands = [
    ...new Set(
      allProducts.map(
        (obj) => obj.title.substring(0, obj.title.indexOf(" ")) || ""
      )
    ),
  ];
  const uniqueCpu = [
    ...new Set(
      allProducts
        .map((obj) => obj.cpu && obj.cpu.substring(0, obj.cpu.indexOf(" ")))
        .filter((obj) => obj)
    ),
  ];
  const uniqueStorage = [
    ...new Set(
      allProducts
        .map((obj) => obj.storage.substring(0, obj.storage.indexOf(" ")))
        .filter((obj) => obj)
    ),
  ];
  const uniqueDisplay = [
    ...new Set(
      allProducts.map(
        (obj) => obj.screen.substring(0, obj.screen.indexOf('"')) || ""
      )
    ),
  ];

  const minPrice = Math.floor(
    Math.min(
      ...allProducts.map((a) =>
        a.best_price.slice(1, a.best_price.indexOf("@"))
      )
    )
  );
  const maxPrice = Math.ceil(
    Math.max(
      ...allProducts.map((a) =>
        a.best_price.slice(1, a.best_price.indexOf("@"))
      )
    )
  );

  const [totalValues,setTotalValues]=useState([minPrice, maxPrice]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    memory: [],
    title: [],
    screen: [],
    cpu: [],
    storage: [],
    destination: [],
    best_price: [],
  });

  const applyFilters = () => {
    const temp = allProducts.filter((prod) =>
      Object.keys(filters)
        .filter((key) => filters[key].length > 0)
        .every((key) =>
          filters[key].some((f) => {
            switch (key) {
              case "cpu":
              case "title":
              case "storage":
                return prod[key]
                  .toLowerCase()
                  .substring(0, prod[key].indexOf(" "))
                  .includes(f.toLowerCase());
              case "screen":
                return prod[key]
                  .substring(0, prod[key].indexOf('"'))
                  .includes(f);
              case "best_price":
                return (
                  f[0] < +prod[key].slice(1, prod[key].indexOf("@")) &&
                  f[1] > +prod[key].slice(1, prod[key].indexOf("@"))
                );
              default:
                return prod[key].includes(f);
            }
          })
        )
    );
    handleSort(+sortingOrder, temp);
  };

  const handleCheckboxes = (keyword, value, e) => {
    setFilters((filters) => ({
      ...filters,
      [keyword]: e.target.checked
        ? [...filters[keyword], value]
        : filters[keyword].filter((v) => v != value),
    }));
    applyFilters();
  };

  const handleSort = (val, data = filteredProducts) => {
    const temp = [...data].sort((a, b) => {
      switch (val) {
        case 0:
          return (
            +a.best_price.slice(1, a.best_price.indexOf("@")) -
            +b.best_price.slice(1, b.best_price.indexOf("@"))
          );
        case 1:
          return (
            +b.best_price.slice(1, b.best_price.indexOf("@")) -
            +a.best_price.slice(1, a.best_price.indexOf("@"))
          );
        case 2:
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        case 3:
          return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
        case 4:
          return (
            +a.weight.slice(0, a.weight.indexOf("k")) -
            +b.weight.slice(0, b.weight.indexOf("k"))
          );
        case 5:
          return (
            +b.weight.slice(0, b.weight.indexOf("k")) -
            +a.weight.slice(0, a.weight.indexOf("k"))
          );
      }
    });
    setFilteredProducts(temp);
  };

  const unsetAllFilters = () => {
    setFilters({
      memory: [],
      title: [],
      screen: [],
      cpu: [],
      storage: [],
      destination: [],
      best_price: [],
    });
    [...document.querySelectorAll('.filterPanel input[type="checkbox"]')].map(
      (input) => (input.checked = false)
    );
    !filters.length&&setTotalValues([minPrice,maxPrice]);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  useEffect(() => {
    dispatch({
      type: "ASSIGNFILTERS",
      payload: filteredProducts,
    });
  }, [filteredProducts]);

  useEffect(() => {
    filteredProducts.length && handleSort(+sortingOrder);
  }, [sortingOrder]);

  useEffect(() => {
    Object.values(filters).some((value) => value.length > 0) &&
      dispatch({
        type: "CURRENTPAGE",
        payload: 1,
      });
  }, [filters]);

  return (
    <section className="filterPanel">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="pricePanel">
          <label>Price range</label>
          <Slider
          marks={(e)=>console.log(e)}
            onAfterChange={(e) =>
              setFilters((filters) => ({ ...filters, best_price: [e] }))
            }
            onChange={(e)=>setTotalValues(e)}
            className="custom_slicer"
            defaultValue={totalValues}
            max={maxPrice}
            min={minPrice}
            style={{ width: "90%" }}
            reverse={false}
            range={true}
            tooltip={true}
            value={totalValues}
            // railStyle={{color:"red"}}
          />
        </div>
        <div className="charPanel">
          <label>Manufacturer</label>
          {uniqueBrands.map((brand, i) => (
            <label key={i}>
              <input
                onChange={(e) => handleCheckboxes("title", brand, e)}
                type="checkbox"
              />
              {brand}
            </label>
          ))}
        </div>
        <div className="charPanel">
          <label>Display size</label>
          {uniqueDisplay.map((display, i) => (
            <label key={i}>
              <input
                onChange={(e) => handleCheckboxes("screen", display, e)}
                type="checkbox"
              />
              {display}
            </label>
          ))}
        </div>
        <div className="charPanel">
          <label>CPU</label>
          {uniqueCpu.map((cpu, i) => (
            <label key={i}>
              <input
                onChange={(e) => handleCheckboxes("cpu", cpu, e)}
                type="checkbox"
              />
              {cpu}
            </label>
          ))}
        </div>
        <div className="charPanel">
          <label>Storage</label>
          {uniqueStorage.map((storage, i) => (
            <label key={i}>
              <input
                onChange={(e) => handleCheckboxes("storage", storage, e)}
                type="checkbox"
              />
              {storage}
            </label>
          ))}
        </div>
        <div className="charPanel">
          <label>Memory</label>
          {uniqueMemories.map((memory, i) => (
            <label key={i}>
              <input
                onChange={(e) => handleCheckboxes("memory", memory, e)}
                type="checkbox"
              />
              {memory}
            </label>
          ))}
        </div>
        <div className="charPanel">
          <label>Best for</label>
          {uniqueDestinations.map((dest, i) => (
            <label key={i}>
              <input
                onChange={(e) => handleCheckboxes("destination", dest, e)}
                type="checkbox"
              />
              {dest.replace("_", " ")}
            </label>
          ))}
        </div>
        {Object.values(filters).some((value) => value.length > 0) && (
          <div className="clearPanel">
            <button onClick={() => unsetAllFilters()}>Unset filters</button>
          </div>
        )}
      </form>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(FilterBar);
