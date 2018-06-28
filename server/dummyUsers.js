import User from './models/user';

export default function () {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const user1 = new User({
            firstName: 'Janet',
            lastName: 'Hwu',
            fullName: 'Janet Hwu',
            email: 'janet@hwu.com',
            preferences: ['board games', 'card games', 'paper and pencil games'],
            eventsSignedUp: [''],
            slug: 'janet-hwu',
            cuid: 'janetisthebestestyay3333'
        });
        const user2 = new User({
            firstName: 'Roberto',
            lastName: 'Perez',
            fullName: 'Roberto Perez',
            email: 'roberto@perez.com',
            preferences: ['role-playing games', 'strategy games'],
            eventsSignedUp: [''],
            slug: 'roberto-perez',
            cuid: 'robertrulesamazingyus5555'
        });
        const user3 = new User({
            firstName: 'Kyle',
            lastName: 'Magee',
            fullName: 'Kyle Magee',
            email: 'kyle@magee.com',
            preferences: ['role-playing games', 'card games'],
            eventsSignedUp: [''],
            slug: 'kyle-magee',
            cuid: 'kylemaniacmagee3333'
        });
        const user4 = new User({
            firstName: 'Michael',
            lastName: 'Malach',
            fullName: 'Michael Malach',
            email: 'michael@malach.com',
            preferences: ['role-playing games', 'paper and pencil games'],
            eventsSignedUp: [''],
            slug: 'michael-malach',
            cuid: 'michaelismagical1111'
        });
        const user5 = new User({
            firstName: 'Jimbob',
            lastName: 'Jones',
            fullName: 'Jimbob Jones',
            email: 'jimbob@jones.com',
            preferences: ['role-playing games', 'title-based games'],
            eventsSignedUp: [''],
            slug: 'jimbob-jones',
            cuid: 'jimbobjumpsforjoy3333'
        });
        const user6 = new User({
            firstName: 'Mary',
            lastName: 'Hatta',
            fullName: 'Mary Hatta',
            email: 'marry@hatta.com',
            preferences: ['board games', 'dice games', 'card games'],
            eventsSignedUp: [''],
            slug: 'mary-hatta',
            cuid: 'maryhattalittlelamblol7777'
        });
        const user7 = new User({
            firstName: 'William',
            lastName: 'Shakespeare',
            fullName: 'William Shakespeare',
            email: 'william@shakespeare.com',
            preferences: ['role-playing games', 'adventure games'],
            eventsSignedUp: [''],
            slug: 'will-shakes',
            cuid: 'willshakeitlikeyoumeanit5678'
        });
        const user8 = new User({
            firstName: 'June',
            lastName: 'Sevin',
            fullName: 'June Sevin',
            email: 'june@sevin.com',
            preferences: ['adventure games', 'title-based games'],
            eventsSignedUp: [''],
            slug: 'june-sevin',
            cuid: 'junesevinisnotmybday3333'
        });
        const user9 = new User({
            firstName: 'Georgie',
            lastName: 'Porgie',
            fullName: 'Georgie Porgie',
            email: 'georgie@porgie.com',
            preferences: ['role-playing games', 'dice games'],
            eventsSignedUp: [''],
            slug: 'georgie-porgie',
            cuid: 'puddingandpieyumz2222'
        });
        const user10 = new User({
            firstName: 'Satan',
            lastName: 'Santa',
            fullName: 'Satan Santa',
            email: 'satan@santa.com',
            preferences: ['dice games', 'card games'],
            eventsSignedUp: [''],
            slug: 'satan-santa',
            cuid: 'soundsmorelikeabandname3333'
        });

        User.create([user1, user2, user3, user4, user5, user6, user7, user8, user9, user10], (error) => {
            if (!error) {
                console.log('User dummy data seeded....');
            }
        });

  });
}