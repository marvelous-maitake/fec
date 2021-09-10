import {API_KEY} from '../config/config.js';

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

const addParams = (url, params) => {
  console.log(params);
  if (params === undefined) {
    return url;
  }
  url += '/?';
  for (const key in params) {
    url+= key + '=' + params[key] + '&';
  }
  console.log(url);
  return url.slice(0, -1);
}

//Params: e.g. ({page: 1, count: 5})
  //page: Selects the page of results to return. Default 1.
  //count: Specifies how many results per page to return. Default 5.
export async function getListProducts(params) {
  let url = API_URL + '/products'
  if (params) {
    url = addParams(url, params);
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  })
  return response.json();
}

//Params: e.g. (12345)
  //product_id: Required ID of the Product requested
export async function getProductInfo(product_id) {
  let url = API_URL + '/products/' + product_id;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  })
  return response.json();
}

//Params: e.g. (12345)
  //product_id: Required ID of the Product requested
export async function  getProductStyles(product_id) {
  const url = API_URL + '/products/' + product_id + '/styles';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  });
  return response.json();
}

//Params: e.g. (12345)
  //product_id: Required ID of the Product Requested
export async function getRelatedProducts(product_id) {
  const url = API_URL + '/products/' + product_id + '/related';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  });
  return response.json();
}

//Params: e.g. ({page: 1, count: 5, sort: 'newest', product_id: 12345})
  //page: Selects the page of results to return. Default 1.
  //count: Specifies how many results per page to return. Default 5.
  //sort: Changes the sort order of reviews to be based on 'newest', 'helpful', or 'relevant'
  //product_id: Required ID of the Product Requested
export async function getListReviews(params) {
  let url = API_URL + '/reviews';
  url = addParams(url, params);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  })
  return response.json();
}

//Params: e.g. (12345)
  //product_id: Required ID of the Product Requested
export async function getReviewMeta(product_id) {
  const url = API_URL + '/reviews/meta/?product_id=' + product_id;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  })
  return response.json();
}

//Params: e.g. ({page: 1, count: 5, product_id: 12345})
  //product_id: Required ID of the Product Requested.
  //page: Selects the page of results to return. Default 1.
  //count: Specifies how many results per page to return. Default 5.
export async function getListQuestions(params) {
  let url = API_URL + '/qa/questions';
  url = addParams(url, params);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  })
  return response.json();
}

//Params: e.g. (15, {page: 1, count: 5})
  //question_id: Required ID of the question for which answers are needed
  //page: selects the page of results to return. Default 1.
  //count: Specifies how many results per page to return. Default 5.
export async function getListAnswers(question_id, params) {
  let url = API_URL + '/qa/questions/' + question_id + '/answers';
  if (params) {
    url = addParams(url, params)
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  })
  return response.json();
}