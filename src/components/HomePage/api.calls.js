import axios from 'axios';

export function assignInvoicesToSalaryCycle() {
    return axios.get('https://fakestoreapi.com/products').then((data) => data.data);
}

export function getItemsInCategory(category) {
    return axios.get(`https://fakestoreapi.com/products/category/${category}`).then((data) => data.data);
}