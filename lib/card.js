// <====== employee information card ======>
class Card {
    constructor(level, name, email, id, other) {
        this.level = level;
        this.name = name;
        this.email = email;
        this.id = id;
        this.other = other;
    }

    createCard(level, name, email, id, other) {
        let otherType;
        let otherData = other
        switch (level) {
            case 'manager':
                otherType = 'Office Number';
                break;
            case 'engineer':
                otherType = 'GitHub UN';
                otherData = `<a href='https://www.github.com/${other}' target='_blank'>${other}</a>`
                break;
            case 'intern':
                otherType = 'school'
                break;
        }

        const charLevel = level.charAt(0).toUpperCase() + level.slice(1)

        return `
    
        <div class="column is-3">
            <div class="card m-3">
                <section class="hero is-primary is-danger">
                    <div class="hero-body p-3">
                        <p class="is-size-4">
                            ${name}
                        </p>
                        <p class="is-size-5 is-italic">
                            ${charLevel}
                        </p>
                    </div>
                </section>
                <div class="card-content">
                    <p class="is-size-6">
                        Email: <a href='mailto:${email}' target='_blank'>${email}</a>
                    </p>
                    <p class="is-size-6">
                        Id: ${id}
                    </p>
                    <p class="is-size-6">
                        ${otherType}: ${otherData}
                    </p>
                </div>
            </div>
        </div>
   `
    }
}

module.exports = Card