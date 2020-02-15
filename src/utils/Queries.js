    // Return spells filtered by whether their attributes match all non-empty spellQuery keys
    const filterSpellsByQuery = ( spells, spellQuery ) => {

        // Create array of non-empty queries to search by
        const activeFilters = Object.keys(spellQuery).filter(key => spellQuery[key] !== '')
        // Return all spells if no queries are active
        if (activeFilters.length === 0) return spells

        // Return only spells which match regexp of every active query
        return spells.filter((spell) => {
            return activeFilters.every((filterKey) => {
                const spellStringQuery = new RegExp(spellQuery[filterKey], "i")
                return spellStringQuery.test(spell[filterKey])
            })
        })
    }

    export { filterSpellsByQuery }