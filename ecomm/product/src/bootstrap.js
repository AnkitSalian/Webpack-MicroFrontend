import faker from 'faker';

const mountComponent = (elem) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    elem.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
    const elem = document.querySelector('#dev-products');

    if (elem) {
        mountComponent(elem);
    }
}

export { mountComponent };