class Head {
    constructor (cardSection) {
        this.cardSection = cardSection;
    }

    renderHTML(cardSection) {
        return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Employee Data</title>
                    <!--bulma css link-->
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
                    </head>

                    <body>
                        <!-- header section with page title -->
                        <header>
                            <section class="hero is-primary is-link p-.5">
                                <div class="hero-body">
                                    <p class="title">
                                        Employee Data
                                    </p>
                                </div>
                            </section>
                        </header>
                        <main>
                        <div class="task-container columns is-multiline is-centered">
                           ${cardSection}
                           </div>
                        </main>
                    </body>
    `
    }
}

module.exports = Head