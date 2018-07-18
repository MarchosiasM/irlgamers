import Event from './models/event';

export default function() {
    console.log("EVENT SEED TRIGGERED!");
    Event.count().exec((err, count) => {
        if (count > 0) {
            console.log("NO NEED TO SEED EVENTS....");
            return;
        }

        const event1 = new Event({
            eventName: 'Catan Tournament',
            address: '9312 Parus Point',
            city: 'San Diego',
            state: 'CA',
            zipcode: '92129',
            game: 'Settlers of Catan',
            gameType: 'board games',
            scheduledDate: '2018-06-28',
            scheduledTime: '11:00 PM',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            owner: 'j59i2RAn6HVkwqHzcErWdU3xEzN2',
            ownerName: 'Roberto Perez',
            attendees: ['4lgdwrkOHucfNIaN8M2kIkluec02', 'OJuBVH8XO1OuBWuOI86K2VpdQLb2', 'j59i2RAn6HVkwqHzcErWdU3xEzN2'],
            attendeeNames: ['Kyle McGee', 'Michael Malach', 'Roberto Perez']
        });
        const event2 = new Event({
            eventName: 'Texas Holdem in Bama',
            address: '87 Misty Forest Dr',
            city: 'Phenix City',
            state: 'AL',
            zipcode: '36869',
            game: 'Texas Holdem',
            gameType: 'card games',
            scheduledDate: '2018-07-28',
            scheduledTime: '8:00 PM',
            slots: 4,
            notes: 'no plus ones please',
            slug: 'texas-holdem-in-bama',
            cuid: 'holdemupandkeepemup',
            owner: 'j59i2RAn6HVkwqHzcErWdU3xEzN2',
            ownerName: 'Roberto Perez',
            attendees: ['4lgdwrkOHucfNIaN8M2kIkluec02', 'OJuBVH8XO1OuBWuOI86K2VpdQLb2' ],
            attendeeNames: ['Kyle McGee', 'Michael Malach']
        });
        const event3 = new Event({
            eventName: 'Chess and Cheese',
            address: '6216 Tarragona Dr',
            city: 'San Diego',
            state: 'CA',
            zipcode: '92115',
            game: 'Chess',
            gameType: 'board games',
            scheduledDate: '2018-08-15',
            scheduledTime: '06:30 PM',
            slots: 1,
            notes: 'Just looking for a good chess partner. Advanced players only please.',
            slug: 'chess-and-cheese',
            cuid: 'chessmaster1234',
            owner: 'q5zH280ek3S0A8XSvb6XEyiPzJ73',
            ownerName: 'Janet Hwu',
            attendees: [],
            attendeeNames: []
        });
        const event4 = new Event({
            eventName: 'Mahjong Madness',
            address: '1133 Malcolm Dr',
            city: 'San Diego',
            state: 'CA',
            zipcode: '92115',
            game: 'Mahjong',
            gameType: 'tile-based games',
            scheduledDate: '2018-08-01',
            scheduledTime: '07:30 PM',
            slots: 3,
            notes: 'You better like Tropic Thunder, because we will be watching it while we play.',
            slug: 'mahjong-madness',
            cuid: 'amammamamaamammaaaaahjong',
            owner: 'q5zH280ek3S0A8XSvb6XEyiPzJ73',
            ownerName: 'Janet Hwu',
            attendees: [],
            attendeeNames: []
        });
        const event5 = new Event({
            eventName: 'Boys Night Out Woooo',
            address: '4612 63rd St',
            city: 'San Diego',
            state: 'CA',
            zipcode: '92115',
            game: 'Call of Cthulu',
            gameType: 'role-playing games',
            scheduledDate: '2018-08-19',
            scheduledTime: '08:30 PM',
            slots: 8,
            notes: 'Come party with me over a game of Cthulu! What what?',
            slug: 'boys-night-out-woooo',
            cuid: 'boysboysboysboys1234',
            owner: '4lgdwrkOHucfNIaN8M2kIkluec02',
            ownerName: 'Kyle McGee',
            attendees: [],
            attendeeNames: []
        });
        const event6 = new Event({
            eventName: 'Dudes & Dungeons & Dragons',
            address: '622 Nautilus St',
            city: 'La Jolla',
            state: 'CA',
            zipcode: '92037',
            game: 'Dungeons & Dragons',
            gameType: 'role-playing games',
            scheduledDate: '2018-08-14',
            scheduledTime: '05:30 PM',
            slots: 10,
            notes: 'Please bring your own 20-sided die.',
            slug: 'dudes-&-dungeons-&-dragons',
            cuid: 'dndndndndnd1111',
            owner: '4lgdwrkOHucfNIaN8M2kIkluec02',
            ownerName: 'Kyle McGee',
            attendees: [],
            attendeeNames: []
        });
        const event7 = new Event({
            eventName: 'Tzolkin Night',
            address: '7442 Brentwood St',
            city: 'San Diego',
            state: 'CA',
            zipcode: '92111',
            game: 'Tzolkin',
            gameType: 'board games',
            scheduledDate: '2018-07-30',
            scheduledTime: '06:45 PM',
            slots: 3,
            notes: 'Experienced players only please. I do not want to explain the rules',
            slug: 'tzolkin-night',
            cuid: 'mayancalendargearhead1234',
            owner: 'Zu00nK1j3jQliNiUnGTQqMNgkEZ2',
            ownerName: 'Michael Malach',
            attendees: [],
            attendeeNames: []
        });
        const event8 = new Event({
            eventName: 'Malifaux',
            address: '1824 Erie St',
            city: 'San Diego',
            state: 'CA',
            zipcode: '92110',
            game: 'Malifaux',
            gameType: 'strategy games',
            scheduledDate: '2018-08-18',
            scheduledTime: '07:30 PM',
            slots: 1,
            notes: 'Bring something delicious to share.',
            slug: 'malifaux',
            cuid: 'malmalmalmalamallaa9999',
            owner: 'Zu00nK1j3jQliNiUnGTQqMNgkEZ2',
            ownerName: 'Michael Malach',
            attendees: [],
            attendeeNames: []
        });
        const event9 = new Event({
            eventName: 'Casual Cards',
            address: '527 Orchid Ln',
            city: 'Del Mar',
            state: 'CA',
            zipcode: '92014',
            game: 'Cards Against Humanity',
            gameType: 'card games',
            scheduledDate: '2018-08-13',
            scheduledTime: '05:45 PM',
            slots: 7,
            notes: 'Join us for some Cards Against Humanity, Codenames, and The Resistance',
            slug: 'casual-cards',
            cuid: 'casualgamerswelcomeherethanks3333',
            owner: 'OJuBVH8XO1OuBWuOI86K2VpdQLb2',
            ownerName: 'Michael Malach',
            attendees: [],
            attendeeNames: []
        });
        const event10 = new Event({
            eventName: 'Ultimate Werewolf Party',
            address: '8806 Centaurus Way',
            city: 'San Diego',
            state: 'CA',
            zipcode: '92126',
            game: 'Ultimate Werewolf',
            gameType: 'card games',
            scheduledDate: '2018-08-10',
            scheduledTime: '08:30 PM',
            slots: 7,
            notes: 'Let us play some werewolf.',
            slug: 'ultimate-werewolf-party',
            cuid: 'arooooooooo0000',
            owner: 'OJuBVH8XO1OuBWuOI86K2VpdQLb2',
            ownerName: 'Michael Malach',
            attendees: [],
            attendeeNames: []
        });
        
        Event.create([event1, event2, event3, event4, event5, event6, event7, event8, event9, event10], (error) => {
            if (!error) {
                console.log('EVENT DUMMY DATA SEEDED!');
            } else {
                console.log("STARTING SEEDING EVENTS, BUT ERROR: ", error);
            }
        });

    });
}