import request from 'then-request';

export function getJSON(path, success) {
  return request('GET', 'http://localhost:3000' + path)
    .done((data) => {
      const json = JSON.parse(data.getBody());
      success(json);
    });
}
