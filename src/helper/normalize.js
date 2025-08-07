import {order_statuses, reservation_statuses} from "@/helper/enum.js";

export const normalizeEvents=(orders, reservations)=> {
    const normalizedOrders = orders.map(order => ({
        id: order.id,
        type: 'order',
        start: order.start_time,
        end: order.end_time,
        status:order_statuses[order.status],
        label: order.status==='Banquet'?'Банкет':'Заказ',
        backgroundColor: order.status==='Banquet'?'#B348F729':'#7FD7CC29',
        borderColor: order.status==='Banquet'?'#7B439E':'#7FD7CC',
        tagBackgroundColor: order.status==='Bill'?'#4AC99B52':'#FFFFFF1F',
        isShowTag: order.status!=='Banquet',
    }));

    const normalizedReservations = reservations.map(res => ({
        id: res.id,
        type: 'reservation',
        start: res.seating_time,
        end: res.end_time,
        label: `${res.name_for_reservation}; ${res.num_people}`,
        status: reservation_statuses[ res.status].name,
        name_for_reservation: res.name_for_reservation,
        num_people: res.num_people,
        phone_number: res.phone_number,
        backgroundColor: res.status==='Живая очередь'?'#0097FD29':'#FF704329',
        borderColor: res.status==='Живая очередь'?'#007AFF':'#FF7043',
        tagBackgroundColor:reservation_statuses[ res.status].backgroundColor,
        tagColor: reservation_statuses[ res.status].color,
        isShowTag: true,
    }));

    return [...normalizedOrders, ...normalizedReservations];
}