const axios = require('./nodeFiles');

function validateLink(resolvedPromise) {
  return axios.get(resolvedPromise.href)
    .then((response) => {
      const validObject = {
        ...resolvedPromise,
        status: response.status,
        ok: 'ok',
      };
      return console.log(validObject);
    })
    .catch((err) => {
      if (err.response) {
        const validObject = {
          ...resolvedPromise,
          status: err.response.status,
          ok: 'fail',
        };
        return console.log(validObject);
      }
      const validObject = {
        ...resolvedPromise,
        status: 'Deprecated',
        ok: 'fail',
      };
      return console.log(validObject);
    });
}

module.exports = { validateLink };
