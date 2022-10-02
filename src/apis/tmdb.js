const FetchTmdb = (url, optionalParams = {}) => {
    url = `https://api.themoviedb.org/3/${url}`;
    const params = {
        'api_key': 'd90bff089b50463d40bab3985facd41a',
        ...optionalParams
    }
    Object.keys(params).forEach(function (key, index) {
        if (index === 0)
            url += '?';
        url += `${key}=${params[key]}`
    });

    return new Promise((resolve, reject) => {
        fetch(url)
            // .catch(err => reject(err))
            .then(resp => resolve(resp.json()))
            .catch(err => reject(err));
    })
}

export default FetchTmdb;