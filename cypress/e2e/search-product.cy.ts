describe('search products', () => {
    it('should be able to search for products', () => {
        // cy.visit('/')
        // cy.get('input[name=q]').type('moletom').parent('form').submit()
        cy.searchByQuery('moletom') // cypress/suport/commands.ts

        cy.location('pathname').should('include', '/search')
        cy.location('search').should('include', 'q=moletom') // busca o param de busca na URL

        cy.get('a[href^="/product"]').should('exist')
    })

    it('should not be able to visit search page without a search query', () => {
        cy.on('uncaught:exception', () => { // 'Redirect' do next dispara uma "exceção" com throw e cy identifica como erro
            return false // indica para cy não fazer nada se identificar alguma exceção
                // ignora a exceção e continua com o teste
        })

        cy.visit('/search')

        cy.location('pathname').should('equal', '/')
    })
})