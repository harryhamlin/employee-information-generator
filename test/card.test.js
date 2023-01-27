const Card = require(`../lib/card`)

describe('Card', () => {
    describe('Initialization', () => {
        it('should return an object containing level, name, email, id and other when called without passing an argument', () => {
            const obj = new Card();
            expect('level' in obj && 'name' in obj && 'email' in obj && 'id' in obj && 'other' in obj).toEqual(true);
        })

        it('should set all arguments when created', () => {
            const level = 'level';
            const name = 'name';
            const email = 'email';
            const id = 'id';
            const other = 'other';
            const obj = new Card(level, name, email, id, other);
            expect(obj.level).toEqual('level');
            expect(obj.name).toEqual('name');
            expect(obj.email).toEqual('email');
            expect(obj.id).toEqual('id');
            expect(obj.other).toEqual('other');
        })
    })
    describe('Arguments', () => {
        it('should return an other type of Office Number for level = manager, GitHub UN for level = engineer, and School for level = intern', () => {
            const objManager = new Card('manager', 'name', 'email', 'id', 'other');
            const createCardManager = objManager.createCard();
            const objEngineer = new Card('engineer', 'name', 'email', 'id', 'other');
            const createCardEngineer = objEngineer.createCard();
            const objIntern = new Card('intern', 'name', 'email', 'id', 'other');
            const createCardIntern = objIntern.createCard();
            expect(createCardManager).toContain('Office Number');
            expect(createCardEngineer).toContain('GitHub UN');
            expect(createCardIntern).toContain('School');
        })

        it('should return capitalized first letter of level when input', () => {
            const obj = new Card('manager', '', '', '', '');
            const createCard = obj.createCard();
            expect(createCard).toContain('Manager')
        })

        it('should return a hyperlinked github UN in the case of level = engineer', () => {
            const obj = new Card('engineer', '', '', '', 'UN');
            const createCard = obj.createCard();
            expect(createCard).toContain(`<a href='https://www.github.com/UN' target='_blank'>UN</a>`)
        })
    })

    it('should return a fully formed HTML card with arguments passed', () => {
        const obj = new Card('intern', 'name', 'email', 'id', 'other');
        const createCard = obj.createCard();
        expect(createCard).toContain('Intern');
        expect(createCard).toContain('name');
        expect(createCard).toContain('email');
        expect(createCard).toContain('id');
        expect(createCard).toContain('other');
    })
})

