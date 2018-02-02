const host = window.location.host;
let proto;
if (host.includes("localhost")) {
  proto = "http";
} else {
  proto = "https";
}

export const removeFeed = url => {
  return {
    type: "REMOVE_FEED",
    payload: url
  };
};

export const checkFeeds = url => {
  return dispatch => {
    return dispatch(sendText(url));
  };
};

export const sendText = url => {
  const endpoint =
    "http://rss2json.com/api.json?rss_url=" + encodeURIComponent(url);
  return dispatch => {
    return fetch(endpoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(res => {
        return dispatch(setResults(res));
      })
      .catch(error => dispatch(setFail("no")));
  };
};

export const setResults = res => {
  console.log(res);
  return {
    type: "GET_RESULTS_SUCCESS",
    payload: res
  };
};

export const setFail = res => {
  return {
    type: "GET_RESULTS_FAIL",
    payload: res
  };
};
