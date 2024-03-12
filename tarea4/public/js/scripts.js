document.getElementById('logoutButton').addEventListener('click', function() {
    fetch('/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
    }).then(response => {
        if(response.ok) {
            window.location.href = '/login';
        }
    }).catch(error => console.error('Error:', error));
});



document.addEventListener('DOMContentLoaded', function() {

    let currentPage = 1;
    let totalPages;
    const searchForm = document.getElementById('searchForm');
    const resultsContainer = document.getElementById('results-container');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q');

    if (queryParam && searchForm) {
        searchForm.q.value = queryParam;
        performSearch(); 
    }

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = searchForm.q.value;
            currentPage = 1; 
            window.history.pushState({}, '', `?q=${encodeURIComponent(query)}`);
            performSearch();
        });
    }

    if (prevPageButton) {
        prevPageButton.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                performSearch();
            }
        });
    }

    if (nextPageButton) {
        nextPageButton.addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                performSearch();
            }
        });
    }

    function performSearch() {
        const query = searchForm ? searchForm.q.value : queryParam;
        fetch(`/api/buscar?q=${encodeURIComponent(query)}&page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                resultsContainer.innerHTML = ''; 
                totalPages = data.totalPages;
    

                if (data.noticias.length > 0) {
                    data.noticias.forEach(noticia => {
                        const noticiaHTML = `
                            <div class="noticia">
                                <h2><a href="${noticia.url}" target="_blank">${noticia.title}</a></h2>
                                <p>${noticia.description}</p>
                            </div>
                        `;
                        resultsContainer.innerHTML += noticiaHTML;
                    });
                } else {
                    resultsContainer.innerHTML = '<div class="no-results">No se encontraron resultados Paps .|. .</div>';
                }
    
                updatePaginationControls();
            })
            .catch(error => {
                console.error('Error:', error);
                resultsContainer.innerHTML = '<div class="error">Error al realizar la búsqueda.</div>'; 
            });
    }
    

    function updatePaginationControls() {
        const pageNumberSpan = document.getElementById('pageNumber');
        if (pageNumberSpan) {
            pageNumberSpan.textContent = `Página ${currentPage} de ${totalPages}`;
            prevPageButton.disabled = currentPage <= 1;
            nextPageButton.disabled = currentPage >= totalPages;
        }
    }
});
