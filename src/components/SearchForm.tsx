'use client';

export default function SearchForm() {
    return (
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
                <i className="fas fa-search search-icon" aria-hidden="true"></i>
                <input
                    type="search"
                    placeholder="Busque por termo ou categoria"
                    aria-label="Busca"
                    style={{ backgroundColor: '#ffffff', color: '#333' }}
                />
            </div>
            <button type="submit" className="btn btn--accent btn--uppercase">
                Pesquisar
            </button>
        </form>
    );
}