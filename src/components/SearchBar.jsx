
function SearchBar() {
  return (
    <>
    <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: !searcModule && "none" }}
        >
          <div className="container">
            <div className="searchbar">
              <button onClick={() => console.log(searchFor)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input
                onChange={(e) => setSearchFor(e.target.value)}
                value={searchFor}
                type="text"
                placeholder="search"
              />
              <button
                type="button"
                onClick={() =>
                  searchFor.length
                    ? setSearchFor("")
                    : setSearchModule((p) => !p)
                }
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        </form>
        </>
  )
}

export default SearchBar