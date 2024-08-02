let orderNumber = 1;
const maxOrderNumber = 100;

const orderNumberHelper = () => {
    let formattedOrderNumber;

    if (orderNumber < 10) {
        formattedOrderNumber = "00" + orderNumber;
        orderNumber++;
    } else {
        formattedOrderNumber = "0" + orderNumber;
        orderNumber++;
    }

    if (orderNumber >= maxOrderNumber) {
        orderNumber = 1;
    }

    return formattedOrderNumber;
};

module.exports = orderNumberHelper;
