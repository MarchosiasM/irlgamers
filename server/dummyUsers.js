import User from './models/user';

export default function() {
    console.log("USER SEED TRIGGERED!");
    User.count().exec((err, count) => {
        if (count > 0) {
            console.log("NO NEED TO SEED USERS....");
            return;
        }

        const user1 = new User({
            firstName: 'Janet',
            lastName: 'Hwu',
            fullName: 'Janet Hwu',
            email: 'janet@hwu.com',
            preferences: ['board games', 'card games', 'paper and pencil games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'janet-hwu',
            firebase_id: 'q5zH280ek3S0A8XSvb6XEyiPzJ73',
            cuid: '5b402817fc13ae24f0000000'
        });
        const user2 = new User({
            firstName: 'Roberto',
            lastName: 'Perez',
            fullName: 'Roberto Perez',
            email: 'roberto@perez.com',
            preferences: ['role-playing games', 'strategy games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'roberto-perez',
            firebase_id: 'j59i2RAn6HVkwqHzcErWdU3xEzN2',
            cuid: '5b402817fc13ae24f0000001'
        });
        const user3 = new User({
            firstName: 'Kyle',
            lastName: 'Magee',
            fullName: 'Kyle Magee',
            email: 'kyle@magee.com',
            preferences: ['role-playing games', 'card games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'kyle-magee',
            firebase_id: '4lgdwrkOHucfNIaN8M2kIkluec02',
            cuid: '5b402817fc13ae24f0000002'
        });
        const user4 = new User({
            firstName: 'Michael',
            lastName: 'Malach',
            fullName: 'Michael Malach',
            email: 'michael@malach.com',
            preferences: ['role-playing games', 'paper and pencil games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'michael-malach',
            firebase_id: 'OJuBVH8XO1OuBWuOI86K2VpdQLb2',
            cuid: '5b402817fc13ae24f0000003'
        });
        const user5 = new User({
            firstName: 'Jimbob',
            lastName: 'Jones',
            fullName: 'Jimbob Jones',
            email: 'jimbob@jones.com',
            preferences: ['role-playing games', 'tile-based games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'jimbob-jones',
            firebase_id: 'jimbobjumpsforjoy3333',
            cuid: '5b402817fc13ae24f0000004'
        });
        const user6 = new User({
            firstName: 'Mary',
            lastName: 'Hatta',
            fullName: 'Mary Hatta',
            email: 'marry@hatta.com',
            preferences: ['board games', 'dice games', 'card games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'mary-hatta',
            firebase_id: 'maryhattalittlelamblol7777',
            cuid: '5b402817fc13ae24f0000005'
        });
        const user7 = new User({
            firstName: 'William',
            lastName: 'Shakespeare',
            fullName: 'William Shakespeare',
            email: 'william@shakespeare.com',
            preferences: ['role-playing games', 'adventure games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'will-shakes',
            firebase_id: 'willshakeitlikeyoumeanit5678',
            cuid: '5b402817fc13ae24f0000006'
        });
        const user8 = new User({
            firstName: 'June',
            lastName: 'Sevin',
            fullName: 'June Sevin',
            email: 'june@sevin.com',
            preferences: ['adventure games', 'tile-based games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'june-sevin',
            firebase_id: 'junesevinisnotmybday3333',
            cuid: '5b402817fc13ae24f0000007'
            
        });
        const user9 = new User({
            firstName: 'Georgie',
            lastName: 'Porgie',
            fullName: 'Georgie Porgie',
            email: 'georgie@porgie.com',
            preferences: ['role-playing games', 'dice games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'georgie-porgie',
            firebase_id: 'puddingandpieyumz2222',
            cuid: '5b402817fc13ae24f0000008'
        });
        const user10 = new User({
            firstName: 'Satan',
            lastName: 'Santa',
            fullName: 'Satan Santa',
            email: 'satan@santa.com',
            preferences: ['dice games', 'card games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'satan-santa',
            firebase_id: 'soundsmorelikeabandname3333',
            cuid: '5b402817fc13ae24f0000009'
        });

        User.create([user1, user2, user3, user4, user5, user6, user7, user8, user9, user10], (error) => {
            if (!error) {
                console.log('USER DUMMY DATA SEEDED!');
            } else {
                console.log("STARTING SEEDING USERS, BUT ERROR: ", error);
            }
        });

    });
}