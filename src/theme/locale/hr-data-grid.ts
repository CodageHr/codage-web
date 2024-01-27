
export default {
    components: {
        MuiDataGrid: {
            defaultProps: {
                localeText: {
                    // Korijen
                    noRowsLabel: 'Nema zapisa',
                    noResultsOverlayLabel: 'Nema pronađenih rezultata.',

                    // Gumb gustoće na alatnoj traci
                    toolbarDensity: 'Gustoća',
                    toolbarDensityLabel: 'Gustoća',
                    toolbarDensityCompact: 'Kompaktno',
                    toolbarDensityStandard: 'Standardno',
                    toolbarDensityComfortable: 'Udobno',

                    // Tekst gumba za biranje stupaca na alatnoj traci
                    toolbarColumns: 'Stupci',
                    toolbarColumnsLabel: 'Odaberi stupce',

                    // Tekst gumba za filtre na alatnoj traci
                    toolbarFilters: 'Filteri',
                    toolbarFiltersLabel: 'Prikaži filtere',
                    toolbarFiltersTooltipHide: 'Sakrij filtere',
                    toolbarFiltersTooltipShow: 'Prikaži filtere',
                    toolbarFiltersTooltipActive: (count: number) => count !== 1 ? `${count} aktivnih filtera` : `${count} aktivan filter`,

                    // Polje brzog filtriranja na alatnoj traci
                    toolbarQuickFilterPlaceholder: 'Pretraži…',
                    toolbarQuickFilterLabel: 'Pretraga',
                    toolbarQuickFilterDeleteIconLabel: 'Očisti',

                    // Tekst gumba za izvoz na alatnoj traci
                    toolbarExport: 'Izvoz',
                    toolbarExportLabel: 'Izvoz',
                    toolbarExportCSV: 'Preuzmi kao CSV',
                    toolbarExportPrint: 'Ispis',
                    toolbarExportExcel: 'Preuzmi kao Excel',

                    // Tekst panela stupaca
                    columnsPanelTextFieldLabel: 'Pronađi stupac',
                    columnsPanelTextFieldPlaceholder: 'Naslov stupca',
                    columnsPanelDragIconLabel: 'Premjesti stupac',
                    columnsPanelShowAllButton: 'Prikaži sve',
                    columnsPanelHideAllButton: 'Sakrij sve',

                    // Tekst panela filtara
                    filterPanelAddFilter: 'Dodaj filter',
                    filterPanelRemoveAll: 'Ukloni sve',
                    filterPanelDeleteIconLabel: 'Obriši',
                    filterPanelLogicOperator: 'Logički operator',
                    filterPanelOperator: 'Operator',
                    filterPanelOperatorAnd: 'I',
                    filterPanelOperatorOr: 'ILI',
                    filterPanelColumns: 'Stupci',
                    filterPanelInputLabel: 'Vrijednost',
                    filterPanelInputPlaceholder: 'Vrijednost filtra',

                    // Tekst operatora filtara
                    filterOperatorContains: 'sadrži',
                    filterOperatorEquals: 'jednako',
                    filterOperatorStartsWith: 'počinje s',
                    filterOperatorEndsWith: 'završava s',
                    filterOperatorIs: 'je',
                    filterOperatorNot: 'nije',
                    filterOperatorAfter: 'nakon',
                    filterOperatorOnOrAfter: 'na ili nakon',
                    filterOperatorBefore: 'prije',
                    filterOperatorOnOrBefore: 'na ili prije',
                    filterOperatorIsEmpty: 'je prazno',
                    filterOperatorIsNotEmpty: 'nije prazno',
                    filterOperatorIsAnyOf: 'je bilo koji od',
                    'filterOperator=': '=',
                    'filterOperator!=': '!=',
                    'filterOperator>': '>',
                    'filterOperator>=': '>=',
                    'filterOperator<': '<',
                    'filterOperator<=': '<=',

                    // Tekst operatora filtriranja zaglavlja
                    headerFilterOperatorContains: 'Sadrži',
                    headerFilterOperatorEquals: 'Jednako',
                    headerFilterOperatorStartsWith: 'Počinje s',
                    headerFilterOperatorEndsWith: 'Završava s',
                    headerFilterOperatorIs: 'Je',
                    headerFilterOperatorNot: 'Nije',
                    headerFilterOperatorAfter: 'Nakon',
                    headerFilterOperatorOnOrAfter: 'Na ili nakon',
                    headerFilterOperatorBefore: 'Prije',
                    headerFilterOperatorOnOrBefore: 'Na ili prije',
                    headerFilterOperatorIsEmpty: 'Je prazno',
                    headerFilterOperatorIsNotEmpty: 'Nije prazno',
                    headerFilterOperatorIsAnyOf: 'Je bilo koji od',
                    'headerFilterOperator=': 'Jednako',
                    'headerFilterOperator!=': 'Nije jednako',
                    'headerFilterOperator>': 'Veće od',
                    'headerFilterOperator>=': 'Veće od ili jednako',
                    'headerFilterOperator<': 'Manje od',
                    'headerFilterOperator<=': 'Manje od ili jednako',

                    // Tekst vrijednosti filtara
                    filterValueAny: 'bilo što',
                    filterValueTrue: 'istina',
                    filterValueFalse: 'laž',

                    // Tekst izbornika stupaca
                    columnMenuLabel: 'Izbornik',
                    columnMenuShowColumns: 'Prikaži stupce',
                    columnMenuManageColumns: 'Upravljanje stupcima',
                    columnMenuFilter: 'Filter',
                    columnMenuHideColumn: 'Sakrij stupac',
                    columnMenuUnsort: 'Bez sortiranja',
                    columnMenuSortAsc: 'Sortiraj uzlazno',
                    columnMenuSortDesc: 'Sortiraj silazno',

                    // Tekst zaglavlja stupca
                    columnHeaderFiltersTooltipActive: (count: number) =>
                        count !== 1 ? `${count} aktivnih filtera` : `${count} aktivan filter`,
                    columnHeaderFiltersLabel: 'Prikaži filtere',
                    columnHeaderSortIconLabel: 'Sortiraj',

                    // Tekst u podnožju kada su odabrani retci
                    footerRowSelected: (count: number) =>
                        count !== 1
                            ? `${count.toLocaleString()} odabranih redova`
                            : `${count.toLocaleString()} odabrani red`,

                    // Tekst o ukupnom broju redaka u podnožju
                    footerTotalRows: 'Ukupno redaka:',

                    // Tekst o ukupnom broju vidljivih redaka u podnožju
                    footerTotalVisibleRows: (visibleCount: number, totalCount: number) =>
                        `${visibleCount.toLocaleString()} od ${totalCount.toLocaleString()}`,

                    // Tekst selekcije pomoću checkboxa
                    checkboxSelectionHeaderName: 'Selekcija checkboxom',
                    checkboxSelectionSelectAllRows: 'Odaberi sve retke',
                    checkboxSelectionUnselectAllRows: 'Poništi odabir svih redaka',
                    checkboxSelectionSelectRow: 'Odaberi red',
                    checkboxSelectionUnselectRow: 'Poništi odabir reda',

                    // Tekst za boolean ćeliju
                    booleanCellTrueLabel: 'da',
                    booleanCellFalseLabel: 'ne',

                    // Tekst za više akcija u ćeliji
                    actionsCellMore: 'više',

                    // Tekst za pričvršćivanje stupca
                    pinToLeft: 'Prikvači lijevo',
                    pinToRight: 'Prikvači desno',
                    unpin: 'Otprikvači',

                    // Stablo podataka
                    treeDataGroupingHeaderName: 'Grupa',
                    treeDataExpand: 'vidi dječje',
                    treeDataCollapse: 'sakrij dječje',

                    // Grupiranje stupaca
                    groupingColumnHeaderName: 'Grupa',
                    groupColumn: (name: string) => `Grupiraj po ${name}`,
                    unGroupColumn: (name: string) => `Prekini grupiranje po ${name}`,

                    // Master/detalj
                    detailPanelToggle: 'Prekidač detaljnog panela',
                    expandDetailPanel: 'Proširi',
                    collapseDetailPanel: 'Skupi',

                    // Korišteni ključevi prijevoda jezgre komponenti
                    MuiTablePagination: {},

                    // Tekst preuređivanja redaka
                    rowReorderingHeaderName: 'Preuređivanje redaka',

                    // Agregacija
                    aggregationMenuItemHeader: 'Agregacija',
                    aggregationFunctionLabelSum: 'zbroj',
                    aggregationFunctionLabelAvg: 'prosječno',
                    aggregationFunctionLabelMin: 'najmanje',
                    aggregationFunctionLabelMax: 'najviše',
                    aggregationFunctionLabelSize: 'veličina',
                }
            }
        }
    }
};
