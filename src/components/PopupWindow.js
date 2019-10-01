import { toQuery } from "../helpers/utils";


class PopupWindow {
  constructor(id, url, options = {}) {
    this.id = id;
    this.url = url;
    this.options = options;
  }

  open() {
    const { url, id, options } = this;
    this.window = window.open(url, id, toQuery(options, ","));
  }

  close() {
    this.cancel();
    this.window.close();
  }

  poll() {
    this.promise = new Promise((resolve, reject) => {
      this._iid = window.setInterval(() => {
        try {
          const popup = this.window;
            if (!popup || popup.closed !== false) {
                this.close();
                reject(new Error("The popup was closed"));
                return;
            }
            if (popup.location.href === this.url || popup.location.pathname === 'blank') {
                return;
              }
            let access_token = (popup.location.href.split('&')[1].split('=')[1]) ? (popup.location.href.split('&')[1].split('=')[1]) : null ,
            refresh_token = (popup.location.href.split('&')[2].split('=')[1]) ? (popup.location.href.split('&')[2].split('=')[1]) : null;
            let params = {access_token,refresh_token}
            resolve(params);
            this.close();
        } catch (error) {

            console.log(error)
        }
      }, 1000);
    });
  }

  cancel() {
    if (this._iid) {
      window.clearInterval(this._iid);
      this._iid = null;
    }
  }

  then(...args) {
    return this.promise.then(...args);
  }

  catch(...args) {
    return this.promise.then(...args);
  }

  static open(...args) {
    const popup = new this(...args);

    popup.open();
    popup.poll();

    return popup;
  }
}

export default PopupWindow;
