const MultiSearch = () => {
    return (
        <div className="bg-[#F7F7F7] text-white py-[70px]">
            <form className="flex justify-center items-center gap-4">
                <input type="text" placeholder="Hotel Name" className="bg-white p-3 w-[320px]"/>
                <input type="text" placeholder="Select Country" className="bg-white p-3 w-[320px]"/>
                <button type="submit" className="flex justify-center items-center bg-[#D80F0F] px-4 py-1 rounded-md w-[120px]">
                    <img src="/images/search.png" alt="search" />
                    <p>Search</p>
                </button>
            </form>
        </div>
    )
}

export default MultiSearch;
