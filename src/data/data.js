const data = [
    {
        id : 1,
        day: 11,
        month : 1,
        year : 2023,
        event :  [
            {
                id: 'AP-1',
                type : 'Appointment',
                title : 'First session with Alex Stan',
                time : '9:00 AM - 9:30 AM',                
            },
            {
                id: 'EV-1',
                type : 'Event',
                title : 'SMART CITY ASIA 2023',
                time : '9:00 AM - 9:30 AM',
                des : 'ev1'
            }      
        ]
    },
    {
        id : 1,
        day: 13,
        month : 1,
        year : 2023,
        event :  [
            {
                id: 'AP-1',
                type : 'Appointment',
                title : 'First session with Alex Stan',
                time : '9:00 AM - 9:30 AM',                
            },
            {
                id: 'EV-1',
                type : 'Event',
                title : 'SMART CITY ASIA 2023',
                time : '9:00 AM - 9:30 AM',
                des : 'ev1'             
            }      
        ]
    }
]


export const Event = [
    {
        id: 'ev1',
        title : 'SMART CITY ASIA 2023',
        img : 'https://tse2.mm.bing.net/th?id=OIP.EQZCpn1Nz0MkoBK0WZc8fQHaEn&pid=Api&P=0',
        datetime : 'Thu, Apr 13, 2023, 9:00 AM - Sat, Apr 15, 2023, 5:00 PM Indochina Time Thailand Time',
        location : 'Trung tâm Hội chợ và Triển lãm Sài Gòn - SECC 799 Nguyễn Văn Linh Ho Chi Minh City, Vietnam 50000' ,
        duration : '2 hour',
        content : 'Professional Trade Show in Vietnam related Smart City Smart City is really a thing now that is considered by the world. Approaching to latest technology and solution by joining Vietnam Smart City Asia 2023'
    }
]

export default data