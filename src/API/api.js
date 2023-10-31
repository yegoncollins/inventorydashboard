export async function getOrders() {
    const res = await fetch('https://dummyjson.com/carts/1');
    return await res.json();

};
export async function getRevenue() {
    const res = await fetch('https://dummyjson.com/carts');
    return await res.json();

};