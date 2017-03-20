export default new function() {
    this.set = (key, value) => this[key] = value;

    this.get = key => this[key];

    this.create = (name, methods) => this.context[name] = new DB(methods);

    this.context = () => this.link = data => this.context.Data = data;
}

let urlPrefix = 'https:api.mizlicai.com';

function DB(methods) {
    for (let method in methods) {
        const config = methods[method];
        this[method] = query => new Request(config, query, method);
    }
}

function Request(config, querys, method) {
    const mergeQuery = {
        os: 'h5'
    }

    let url = `${urlPrefix}${config.url}.json`;

    return new Promise((resolve, reject) => {
        $.ajax({url, type: config.type, dataType: 'json', data: Object.assign({}, mergeQuery, querys)}).done(re => {
            resolve(re);
        }).fail(function() {
            reject({errorMsg: '请求失败'})
        }).always(function() {
            console.log("complete");
        });
    })
}
