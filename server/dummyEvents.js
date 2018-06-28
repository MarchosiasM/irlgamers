import Event from './models/event';

export default function() {
    console.log("EVENT SEED FILE TRIGGERED!");
    Event.count().exec((err, count) => {
        if (count > 0) {
            console.log("RETURNING OUT OF EVENT SEED");
            return;
        }

        const event1 = new Event({
            eventName: 'Catan Tournament',
            address: '12731 Schooner Dr',
            city: 'Anchorage',
            state: 'AK',
            zipcode: '99515',
            game: 'Settlers of Catan',
            gameType: 'board game',
            scheduledDate: '2018-06-28T01:16:39.296Z',
            scheduledTime: 'T01:16:39.296Z',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            // owner: '',
            // attendees: ['']
        });
        const event2 = new Event({
            eventName: 'Texas Holdem in Bama',
            address: '87 Misty Forest Dr',
            city: 'Phenix City',
            state: 'AL',
            zipcode: '36869',
            game: 'Texas Holdem',
            gameType: 'card game',
            scheduledDate: '2018-06-28T01:16:39.296Z',
            scheduledTime: 'T01:16:39.296Z',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            // owner: '',
            // attendees: ['']
        });
        const event3 = new Event({
            eventName: 'Catan Tournament',
            address: '12731 Schooner Dr',
            city: 'Anchorage',
            state: 'AK',
            zipcode: '99515',
            game: 'Settlers of Catan',
            gameType: 'board game',
            scheduledDate: '2018-06-28T01:16:39.296Z',
            scheduledTime: 'T01:16:39.296Z',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            // owner: '',
            // attendees: ['']
        });
        const event4 = new Event({
            eventName: 'Catan Tournament',
            address: '12731 Schooner Dr',
            city: 'Anchorage',
            state: 'AK',
            zipcode: '99515',
            game: 'Settlers of Catan',
            gameType: 'board game',
            scheduledDate: '2018-06-28T01:16:39.296Z',
            scheduledTime: 'T01:16:39.296Z',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            // owner: '',
            // attendees: ['']
        });
        const event5 = new Event({
            eventName: 'Catan Tournament',
            address: '12731 Schooner Dr',
            city: 'Anchorage',
            state: 'AK',
            zipcode: '99515',
            game: 'Settlers of Catan',
            gameType: 'board game',
            scheduledDate: '2018-06-28T01:16:39.296Z',
            scheduledTime: 'T01:16:39.296Z',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            // owner: '',
            // attendees: ['']
        });
        const event6 = new Event({
            eventName: 'Catan Tournament',
            address: '12731 Schooner Dr',
            city: 'Anchorage',
            state: 'AK',
            zipcode: '99515',
            game: 'Settlers of Catan',
            gameType: 'board game',
            scheduledDate: '2018-06-28T01:16:39.296Z',
            scheduledTime: 'T01:16:39.296Z',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            // owner: '',
            // attendees: ['']
        });
        const event7 = new Event({
            eventName: 'Catan Tournament',
            address: '12731 Schooner Dr',
            city: 'Anchorage',
            state: 'AK',
            zipcode: '99515',
            game: 'Settlers of Catan',
            gameType: 'board game',
            scheduledDate: '2018-06-28T01:16:39.296Z',
            scheduledTime: 'T01:16:39.296Z',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            // owner: '',
            // attendees: ['']
        });
        const event8 = new Event({
            eventName: 'Catan Tournament',
            address: '12731 Schooner Dr',
            city: 'Anchorage',
            state: 'AK',
            zipcode: '99515',
            game: 'Settlers of Catan',
            gameType: 'board game',
            scheduledDate: '2018-06-28T01:16:39.296Z',
            scheduledTime: 'T01:16:39.296Z',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            // owner: '',
            // attendees: ['']
        });
        const event9 = new Event({
            eventName: 'Catan Tournament',
            address: '12731 Schooner Dr',
            city: 'Anchorage',
            state: 'AK',
            zipcode: '99515',
            game: 'Settlers of Catan',
            gameType: 'board game',
            scheduledDate: '2018-06-28T01:16:39.296Z',
            scheduledTime: 'T01:16:39.296Z',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            // owner: '',
            // attendees: ['']
        });
        const event10 = new Event({
            eventName: 'Catan Tournament',
            address: '12731 Schooner Dr',
            city: 'Anchorage',
            state: 'AK',
            zipcode: '99515',
            game: 'Settlers of Catan',
            gameType: 'board game',
            scheduledDate: '2018-06-28T01:16:39.296Z',
            scheduledTime: 'T01:16:39.296Z',
            slots: 12,
            notes: 'BYOB, and bring pizza money too.',
            slug: 'catan-tournament',
            cuid: 'catanyanyanyan',
            // owner: '',
            // attendees: ['']
        });
        
        Event.create([event1, event2, event3, event4, event5, event6, event7, event8, event9, event10], (error) => {
            console.log("STARTING SEEDING, BUT ERROR: ", error);
            if (!error) {
                console.log('EVENT DUMMY DATA SEEDED!');
            }
        });

    });
}