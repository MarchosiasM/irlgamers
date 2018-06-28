import User from './models/user';

export default function() {
    console.log("USER SEED FILE TRIGGERED!");
    User.count().exec((err, count) => {
        if (count > 0) {
            console.log("RETURNING OUT OF USER SEED");
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
            cuid: 'janetisthebestestyay3333'
        });
        const user2 = new User({
            firstName: 'Roberto',
            lastName: 'Perez',
            fullName: 'Roberto Perez',
            email: 'roberto@perez.com',
            preferences: ['role-playing games', 'strategy games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'roberto-perez',
            cuid: 'robertrulesamazingyus5555'
        });
        const user3 = new User({
            firstName: 'Kyle',
            lastName: 'Magee',
            fullName: 'Kyle Magee',
            email: 'kyle@magee.com',
            preferences: ['role-playing games', 'card games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'kyle-magee',
            cuid: 'kylemaniacmagee3333'
        });
        const user4 = new User({
            firstName: 'Michael',
            lastName: 'Malach',
            fullName: 'Michael Malach',
            email: 'michael@malach.com',
            preferences: ['role-playing games', 'paper and pencil games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'michael-malach',
            cuid: 'michaelismagical1111'
        });
        const user5 = new User({
            firstName: 'Jimbob',
            lastName: 'Jones',
            fullName: 'Jimbob Jones',
            email: 'jimbob@jones.com',
            preferences: ['role-playing games', 'title-based games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'jimbob-jones',
            cuid: 'jimbobjumpsforjoy3333'
        });
        const user6 = new User({
            firstName: 'Mary',
            lastName: 'Hatta',
            fullName: 'Mary Hatta',
            email: 'marry@hatta.com',
            preferences: ['board games', 'dice games', 'card games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'mary-hatta',
            cuid: 'maryhattalittlelamblol7777'
        });
        const user7 = new User({
            firstName: 'William',
            lastName: 'Shakespeare',
            fullName: 'William Shakespeare',
            email: 'william@shakespeare.com',
            preferences: ['role-playing games', 'adventure games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'will-shakes',
            cuid: 'willshakeitlikeyoumeanit5678'
        });
        const user8 = new User({
            firstName: 'June',
            lastName: 'Sevin',
            fullName: 'June Sevin',
            email: 'june@sevin.com',
            preferences: ['adventure games', 'title-based games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'june-sevin',
            cuid: 'junesevinisnotmybday3333'
        });
        const user9 = new User({
            firstName: 'Georgie',
            lastName: 'Porgie',
            fullName: 'Georgie Porgie',
            email: 'georgie@porgie.com',
            preferences: ['role-playing games', 'dice games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'georgie-porgie',
            cuid: 'puddingandpieyumz2222'
        });
        const user10 = new User({
            firstName: 'Satan',
            lastName: 'Santa',
            fullName: 'Satan Santa',
            email: 'satan@santa.com',
            preferences: ['dice games', 'card games'],
            // eventsSignedUp: [1, 2, 3],
            slug: 'satan-santa',
            cuid: 'soundsmorelikeabandname3333'
        });

        User.create([user1, user2, user3, user4, user5, user6, user7, user8, user9, user10], (error) => {
            console.log("STARTING SEEDING, BUT ERROR: ", error);
            if (!error) {
                console.log('USER DUMMY DATA SEEDED!');
            }
        });

    });
}