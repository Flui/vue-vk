/* global VK */
const API_ID = 6375132;

export function injectVKOpenApi() {
  return new Promise((resolve, reject) => {
    try {
      const fjs = document.getElementsByTagName('script')[0];

      if (document.getElementById('vk_openapi_js')) {
        resolve();
        return;
      }

      const js = document.createElement('script');
      js.id = 'vk_openapi_js';
      js.src = '//vk.com/js/api/openapi.js?152';
      js.onload = resolve;
      js.onerror = reject;

      fjs.parentNode.insertBefore(js, fjs);
    } catch (err) {
      reject(err);
    }
  });
}

export function injectVKCallApi() {
  return new Promise((resolve, reject) => {
    try {
      const fjs = document.getElementsByTagName('script')[0];

      if (document.getElementById('vk_callapi_js')) {
        resolve();
        return;
      }

      const js = document.createElement('script');
      js.id = 'vk_callapi_js';
      js.src = 'http://vk.com/js/api/xd_connection.js?2';
      js.charset = 'windows-1251';
      js.onload = resolve;
      js.onerror = reject;

      fjs.parentNode.insertBefore(js, fjs);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 *
 */
export function injectVKShareApi() {
  return new Promise((resolve, reject) => {
    try {
      const fjs = document.getElementsByTagName('script')[0];

      if (document.getElementById('vk_shareapi_js')) {
        resolve();
        return;
      }

      const js = document.createElement('script');
      js.id = 'vk_shareapi_js';
      js.src = 'https://vk.com/js/api/share.js?95';
      js.charset = 'windows-1251';
      js.onload = resolve;
      js.onerror = reject;

      fjs.parentNode.insertBefore(js, fjs);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * This initializes the VK api
 * @param {boolean} onlyWidgets
 */
export const initVK = (onlyWidgets = false) => () =>
  VK.init({ apiId: API_ID, onlyWidgets });

export const initCallVK = () => new Promise((resolve, reject) => {
  try {
    window.name = 'fXD';
    VK.init(resolve);
  } catch (err) {
    reject(err);
  }
});

export function getPostHash(ownerId, postId) {
  return new Promise((resolve, reject) => {
    try {
      VK.api.call('wall.getById', { posts: `${ownerId}_${postId}` }, resolve, reject);
    } catch (err) {
      reject(err);
    }
  });
}

export const loginVK = () => new Promise((resolve, reject) => {
  try {
    VK.Auth.login(resolve);
  } catch (err) {
    reject(err);
  }
});

export function getPostHashOld(ownerId, postId) {
  const url = `https://vk.com/dev.php?act=a_get_post_hash&al=1&post=${ownerId}_${postId}`;
  const requestOptions = {
    method: 'GET',
    mode: 'cors',
  };

  return fetch(url, requestOptions)
    .then(response => response);
}
