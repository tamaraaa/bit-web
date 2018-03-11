const dataModule = (() => {

  const baseUrl = 'http://api.tvmaze.com/shows';

  const searchUrl = 'http://api.tvmaze.com/search/shows';

  class Show {
    constructor(name, image, id, summary, originalImg) {
      this.image = image;
      this.name = name;
      this.summary = summary;
      this.id = id;
      this.originalImg = originalImg;
    }
  }

  const adaptData = (shows) => {
    const top50 = shows.slice(0, 51);
    return top50.map(({name, image, id}) => new Show(name, image.medium, id));
  };

  const fetchShow = (id, displayShow) => {
    $.get(`${baseUrl}/${id}`)
      .done(({name, image, id, summary}) => displayShow(new Show(name, image.medium, id, summary, image.original)))
  };

  const getTen = (res, displaySearchResults) => {
    const tenShows = res.slice(0, 10).map(({ show }) => ({ name:show.name, id: show.id }))
    displaySearchResults(tenShows)
  }

  const searchShows = (query, displaySearchResults) => {
    $.get(`${searchUrl}?q=${query}`)
      .done((response) => getTen(response, displaySearchResults))
  }

  return {
    baseUrl,
    adaptData,
    fetchShow,
    searchShows
  }

})()


const uiModule = (($, data) => {

  const $mainContainer = $(".main");

  const displayShows = shows => {
    $mainContainer.append(`<h1>Popular Shows</h1><div class="row content"></div>`)
    shows.forEach(show => $(".content").append(createShowCard(show)));
  };

  const showPage = (show) => {
    return $(`
<h1>${show.name}</h1>
      <div class="show-container">
        <img src=${show.originalImg} class="original-img">
        <p class="text">${show.summary}</p>
      </div>
    `)
  };

  const displayShow = show => {
    $('.search-results').empty()
    $mainContainer.empty();
    $mainContainer.append(showPage(show));
    $('.search').val('')
  };

  const createShowCard = ({name, image, id}) => {
    const showEl = $(`
            <a class="show col-4" data-id="${id}">
                <img src=${image}>
                <h4>${name}</h4>
            </a>
        `);
    $(".show").on("click", (e) => data.fetchShow(e.currentTarget.getAttribute('data-id'), displayShow));

    return showEl
  };

  const displayError = () => {
    $(".content").innerHTML = "<h3>Error</h3>"
  };

  const createSearchResult = (show) => {
    const searchRes = $(`<li class="search-result" data-id=${show.id}>${show.name}</li>`);

    searchRes.on("click", (e) => data.fetchShow(e.currentTarget.getAttribute('data-id'), displayShow));

    return searchRes
  }

  const displaySearchResults = (searchResults) => {
    const results = searchResults.map(res => createSearchResult(res));
    $('.search-results').empty().append(results)
  };

  $(".search").on("keyup", (input) => data.searchShows(input.target.value, displaySearchResults))

  return {
    displayShows,
    displayError
  }

})(jQuery, dataModule);


const mainModule = ((data, ui) => {

  const init = () => fetchShows(data.baseUrl);

  const fetchShows = (url) => {
    $.get(url)
      .done(onSuccessHandler)
      .fail(onErrorHandler)
  };

  const onSuccessHandler = (response) => {
    const adaptedShows = data.adaptData(response);
    ui.displayShows(adaptedShows)
  };

  const onErrorHandler = (error) => ui.displayError(error);

  return {
    init
  }

})(dataModule, uiModule);