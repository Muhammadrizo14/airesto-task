export const data ={
    "current_day": "2025-04-04",
    "available_days": [
        "2025-04-04",
        "2025-04-05",
        "2025-04-06",
        "2025-04-07",
        "2025-04-08",
    ],
    "restaurant": {
        "id": 11100,
        "restaurant_name": "Супра",
        "opening_time": "11:00",
        "closing_time": "21:00",
        "timezone": "Asia/Vladivostok"
    },
    "tables": [
        {
            "id": "table-1",
            "number": "1",
            "capacity": 3,
            "zone": "1 этаж",
            "orders": [
                {
                    "id": "order-1-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-1-2",
                    "start_time": "2025-04-04T11:20:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-1-3",
                    "start_time": "2025-04-05T11:50:00+10:00",
                    "end_time": "2025-04-05T15:00:00+10:00",
                    "status": "Closed"
                }
            ],
            "reservations": [
                {
                    "id": 101,
                    "name_for_reservation": "Елена",
                    "phone_number": "+70000079",
                    "num_people": 3,
                    "seating_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 102,
                    "name_for_reservation": "Дмитрий",
                    "phone_number": "+70000076",
                    "num_people": 5,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Новая"
                },
                {
                    "id": 103,
                    "name_for_reservation": "Елена",
                    "phone_number": "+70000030",
                    "num_people": 4,
                    "seating_time": "2025-04-04T17:40:00+10:00",
                    "end_time": "2025-04-04T20:00:00+10:00",
                    "status": "Живая очередь"
                }
            ]
        },
        {
            "id": "table-2",
            "number": "2",
            "capacity": 3,
            "zone": "1 этаж",
            "orders": [
                {
                    "id": "order-2-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:30:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-2-2",
                    "start_time": "2025-04-04T12:00:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-2-3",
                    "start_time": "2025-04-04T14:00:00+10:00",
                    "end_time": "2025-04-04T15:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 201,
                    "name_for_reservation": "Анна",
                    "phone_number": "+70000091",
                    "num_people": 4,
                    "seating_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 202,
                    "name_for_reservation": "Ольга",
                    "phone_number": "+70000070",
                    "num_people": 5,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T19:00:00+10:00",
                    "status": "Заявка"
                },
                {
                    "id": 203,
                    "name_for_reservation": "Елена",
                    "phone_number": "+70000093",
                    "num_people": 4,
                    "seating_time": "2025-04-04T20:00:00+10:00",
                    "end_time": "2025-04-04T21:00:00+10:00",
                    "status": "Новая"
                }
            ]
        },
        {
            "id": "table-3",
            "number": "3",
            "capacity": 3,
            "zone": "1 этаж",
            "orders": [
                {
                    "id": "order-3-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-3-2",
                    "start_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-3-3",
                    "start_time": "2025-04-04T19:00:00+10:00",
                    "end_time": "2025-04-04T20:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 301,
                    "name_for_reservation": "Анна",
                    "phone_number": "+70000058",
                    "num_people": 4,
                    "seating_time": "2025-04-05T15:00:00+10:00",
                    "end_time": "2025-04-05T16:00:00+10:00",
                    "status": "Заявка"
                },
                {
                    "id": 302,
                    "name_for_reservation": "Ольга",
                    "phone_number": "+70000040",
                    "num_people": 5,
                    "seating_time": "2025-04-05T16:00:00+10:00",
                    "end_time": "2025-04-05T17:00:00+10:00",
                    "status": "Новая"
                },
                {
                    "id": 303,
                    "name_for_reservation": "Елена",
                    "phone_number": "+70000031",
                    "num_people": 3,
                    "seating_time": "2025-04-06T17:00:00+10:00",
                    "end_time": "2025-04-06T18:00:00+10:00",
                    "status": "Живая очередь"
                }
            ]
        },
        {
            "id": "table-4",
            "number": "4",
            "capacity": 3,
            "zone": "1 этаж",
            "orders": [
                {
                    "id": "order-4-1",
                    "start_time": "2025-04-05T11:00:00+10:00",
                    "end_time": "2025-04-05T12:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-4-2",
                    "start_time": "2025-04-06T12:00:00+10:00",
                    "end_time": "2025-04-06T13:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-4-3",
                    "start_time": "2025-04-04T13:00:00+10:00",
                    "end_time": "2025-04-04T14:00:00+10:00",
                    "status": "Closed"
                }
            ],
            "reservations": [
                {
                    "id": 401,
                    "name_for_reservation": "Сергей",
                    "phone_number": "+70000079",
                    "num_people": 4,
                    "seating_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Заявка"
                },
                {
                    "id": 402,
                    "name_for_reservation": "Наталья",
                    "phone_number": "+70000030",
                    "num_people": 3,
                    "seating_time": "2025-04-04T16:00:00+10:00",
                    "end_time": "2025-04-04T17:00:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 403,
                    "name_for_reservation": "Сергей",
                    "phone_number": "+70000052",
                    "num_people": 5,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Новая"
                }
            ]
        },
        {
            "id": "table-5",
            "number": "5",
            "capacity": 8,
            "zone": "1 этаж",
            "orders": [
                {
                    "id": "order-5-1",
                    "start_time": "2025-04-05T11:00:00+10:00",
                    "end_time": "2025-04-05T12:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-5-2",
                    "start_time": "2025-04-05T16:00:00+10:00",
                    "end_time": "2025-04-05T17:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-5-3",
                    "start_time": "2025-04-04T18:00:00+10:00",
                    "end_time": "2025-04-04T19:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 501,
                    "name_for_reservation": "Татьяна",
                    "phone_number": "+70000082",
                    "num_people": 5,
                    "seating_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T17:00:00+10:00",
                    "status": "Заявка"
                },
                {
                    "id": 502,
                    "name_for_reservation": "Дмитрий",
                    "phone_number": "+70000099",
                    "num_people": 2,
                    "seating_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 503,
                    "name_for_reservation": "Ольга",
                    "phone_number": "+70000032",
                    "num_people": 5,
                    "seating_time": "2025-04-04T19:00:00+10:00",
                    "end_time": "2025-04-04T20:00:00+10:00",
                    "status": "Открыт"
                }
            ]
        },
        {
            "id": "table-6",
            "number": "6",
            "capacity": 8,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-6-1",
                    "start_time": "2025-04-04T12:00:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-6-2",
                    "start_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-6-3",
                    "start_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T19:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 601,
                    "name_for_reservation": "Ольга",
                    "phone_number": "+70000079",
                    "num_people": 5,
                    "seating_time": "2025-04-05T15:00:00+10:00",
                    "end_time": "2025-04-05T16:00:00+10:00",
                    "status": "Заявка"
                },
                {
                    "id": 602,
                    "name_for_reservation": "Иван",
                    "phone_number": "+70000090",
                    "num_people": 5,
                    "seating_time": "2025-04-05T16:00:00+10:00",
                    "end_time": "2025-04-05T17:00:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 603,
                    "name_for_reservation": "Иван",
                    "phone_number": "+70000079",
                    "num_people": 4,
                    "seating_time": "2025-04-05T17:00:00+10:00",
                    "end_time": "2025-04-05T18:00:00+10:00",
                    "status": "Заявка"
                }
            ]
        },
        {
            "id": "table-7",
            "number": "7",
            "capacity": 7,
            "zone": "2 этаж",
            "orders": [],
            "reservations": [
                {
                    "id": 701,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000038",
                    "num_people": 5,
                    "seating_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 702,
                    "name_for_reservation": "Татьяна",
                    "phone_number": "+70000073",
                    "num_people": 3,
                    "seating_time": "2025-04-05T16:00:00+10:00",
                    "end_time": "2025-04-05T17:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 703,
                    "name_for_reservation": "Иван",
                    "phone_number": "+70000095",
                    "num_people": 3,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Живая очередь"
                }
            ]
        },
        {
            "id": "table-8",
            "number": "8",
            "capacity": 7,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-8-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-8-2",
                    "start_time": "2025-04-04T13:00:00+10:00",
                    "end_time": "2025-04-04T14:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-8-3",
                    "start_time": "2025-04-05T15:00:00+10:00",
                    "end_time": "2025-04-05T16:00:00+10:00",
                    "status": "Closed"
                }
            ],
            "reservations": [
                {
                    "id": 801,
                    "name_for_reservation": "Елена",
                    "phone_number": "+70000053",
                    "num_people": 5,
                    "seating_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T17:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 802,
                    "name_for_reservation": "Татьяна",
                    "phone_number": "+70000086",
                    "num_people": 5,
                    "seating_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T17:00:00+10:00",
                    "status": "Заявка"
                },
                {
                    "id": 803,
                    "name_for_reservation": "Дмитрий",
                    "phone_number": "+70000046",
                    "num_people": 3,
                    "seating_time": "2025-04-04T19:00:00+10:00",
                    "end_time": "2025-04-04T20:00:00+10:00",
                    "status": "Живая очередь"
                }
            ]
        },
        {
            "id": "table-9",
            "number": "9",
            "capacity": 4,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-9-1",
                    "start_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-9-2",
                    "start_time": "2025-04-04T12:00:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-9-3",
                    "start_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 901,
                    "name_for_reservation": "Наталья",
                    "phone_number": "+70000085",
                    "num_people": 5,
                    "seating_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 902,
                    "name_for_reservation": "Алексей",
                    "phone_number": "+70000042",
                    "num_people": 3,
                    "seating_time": "2025-04-04T18:00:00+10:00",
                    "end_time": "2025-04-04T19:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 903,
                    "name_for_reservation": "Елена",
                    "phone_number": "+70000083",
                    "num_people": 2,
                    "seating_time": "2025-04-04T19:00:00+10:00",
                    "end_time": "2025-04-04T20:00:00+10:00",
                    "status": "Открыт"
                }
            ]
        },
        {
            "id": "table-10",
            "number": "10",
            "capacity": 7,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-05T11:00:00+10:00",
                    "end_time": "2025-04-05T12:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-05T13:00:00+10:00",
                    "end_time": "2025-04-05T15:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-05T18:00:00+10:00",
                    "end_time": "2025-04-05T17:00:00+10:00",
                    "status": "Closed"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-11",
            "number": "11",
            "capacity": 6,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-11-1",
                    "start_time": "2025-04-05T11:00:00+10:00",
                    "end_time": "2025-04-05T12:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-11-2",
                    "start_time": "2025-04-05T15:00:00+10:00",
                    "end_time": "2025-04-05T17:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-11-3",
                    "start_time": "2025-04-05T19:00:00+10:00",
                    "end_time": "2025-04-05T20:00:00+10:00",
                    "status": "Closed"
                }
            ],
            "reservations": [
                {
                    "id": 1101,
                    "name_for_reservation": "Сергей",
                    "phone_number": "+70000050",
                    "num_people": 4,
                    "seating_time": "2025-04-04T17:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Новая"
                }
            ]
        },
        {
            "id": "table-12",
            "number": "12",
            "capacity": 3,
            "zone": "2 этаж",
            "orders": [
                {
                    "id": "order-12-1",
                    "start_time": "2025-04-05T11:00:00+10:00",
                    "end_time": "2025-04-05T12:00:00+10:00",
                    "status": "Closed"
                },
                {
                    "id": "order-12-2",
                    "start_time": "2025-04-04T12:00:00+10:00",
                    "end_time": "2025-04-04T13:00:00+10:00",
                    "status": "New"
                },
                {
                    "id": "order-12-3",
                    "start_time": "2025-04-05T13:00:00+10:00",
                    "end_time": "2025-04-05T14:00:00+10:00",
                    "status": "New"
                }
            ],
            "reservations": [
                {
                    "id": 1201,
                    "name_for_reservation": "Елена",
                    "phone_number": "+70000083",
                    "num_people": 5,
                    "seating_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:00:00+10:00",
                    "status": "Открыт"
                },
                {
                    "id": 1202,
                    "name_for_reservation": "Мария",
                    "phone_number": "+70000076",
                    "num_people": 4,
                    "seating_time": "2025-04-04T18:00:00+10:00",
                    "end_time": "2025-04-04T19:00:00+10:00",
                    "status": "Живая очередь"
                },
                {
                    "id": 1203,
                    "name_for_reservation": "Сергей",
                    "phone_number": "+70000090",
                    "num_people": 2,
                    "seating_time": "2025-04-04T17:48:00+10:00",
                    "end_time": "2025-04-04T19:30:00+10:00",
                    "status": "Живая очередь"
                }
            ]
        },
        {
            "id": "table-13",
            "number": "13",
            "capacity": 5,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T13:40:00+10:00",
                    "end_time": "2025-04-04T15:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-04T16:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations":[]
        },
        {
            "id": "table-14",
            "number": "14",
            "capacity": 3,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-14-1",
                    "start_time": "2025-04-04T15:00:00+10:00",
                    "end_time": "2025-04-04T16:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-14-2",
                    "start_time": "2025-04-05T15:30:00+10:00",
                    "end_time": "2025-04-05T18:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-14-3",
                    "start_time": "2025-04-04T19:00:00+10:00",
                    "end_time": "2025-04-04T20:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": [],
        },
        {
            "id": "table-15",
            "number": "15",
            "capacity": 4,
            "zone": "Банкетный зал",
            "orders": [],
            "reservations": []
        },
        {
            "id": "table-16",
            "number": "16",
            "capacity": 6,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:30:00+10:00",
                    "end_time": "2025-04-04T13:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-05T13:30:00+10:00",
                    "end_time": "2025-04-05T15:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-04T16:00:00+10:00",
                    "end_time": "2025-04-04T18:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-17",
            "number": "17",
            "capacity": 3,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-05T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T14:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-04T19:00:00+10:00",
                    "end_time": "2025-04-04T21:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-18",
            "number": "18",
            "capacity": 4,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T11:30:00+10:00",
                    "end_time": "2025-04-04T15:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-05T16:00:00+10:00",
                    "end_time": "2025-04-05T18:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-19",
            "number": "19",
            "capacity": 2,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T15:30:00+10:00",
                    "end_time": "2025-04-04T16:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-04T19:00:00+10:00",
                    "end_time": "2025-04-04T20:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        },
        {
            "id": "table-20",
            "number": "20",
            "capacity": 3,
            "zone": "Банкетный зал",
            "orders": [
                {
                    "id": "order-10-1",
                    "start_time": "2025-04-04T11:00:00+10:00",
                    "end_time": "2025-04-04T12:50:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-2",
                    "start_time": "2025-04-04T16:30:00+10:00",
                    "end_time": "2025-04-04T18:30:00+10:00",
                    "status": "Banquet"
                },
                {
                    "id": "order-10-3",
                    "start_time": "2025-04-05T16:00:00+10:00",
                    "end_time": "2025-04-05T18:00:00+10:00",
                    "status": "Banquet"
                }
            ],
            "reservations": []
        }
    ]
}