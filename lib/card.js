// <====== employee information class with constructor and createCard function ======>
class Card {
    constructor(level, name, email, id, other) {
        this.level = level;
        this.name = name;
        this.email = email;
        this.id = id;
        this.other = other;
    }

    // <====== createCard generates html code for each employee card ======>
    createCard() {
        //<====== declared variables ======>
        let otherType;
        let otherData = this.other;
        // <====== sets the other type to be displayed on card depending on employee type ======>
        switch (this.level) {
            case 'manager':
                otherType = 'Office Number';
                break;
            case 'engineer':
                otherType = 'GitHub UN';
                otherData = `<a href='https://www.github.com/${this.other}' target='_blank'>${this.other}</a>`
                break;
            case 'intern':
                otherType = 'school'
                break;
        }

        // <====== capatalizes the first letter of employee level ======>
        const charLevel = this.level.charAt(0).toUpperCase() + this.level.slice(1)

        // <====== returns employee html card ======>
        return `
    
        <div class="column is-3">
            <div class="card m-3">
                <section class="hero is-primary is-danger">
                    <div class="hero-body p-3">
                        <p class="is-size-4">
                            ${this.name}
                        </p>
                        <p class="is-size-5 is-italic">
                            ${charLevel}
                        </p>
                    </div>
                </section>
                <div class="card-content">
                    <p class="is-size-6">
                        Email: <a href='mailto:${this.email}' target='_blank'>${this.email}</a>
                    </p>
                    <p class="is-size-6">
                        Id: ${this.id}
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