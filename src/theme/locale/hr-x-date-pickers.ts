export default {
    components: {
        MuiLocalizationProvider: {
            defaultProps: {
                localeText: {
                    // Navigacija kroz kalendar
                    previousMonth: 'Prethodni mjesec',
                    nextMonth: 'Sljedeći mjesec',

                    // Navigacija prikaza
                    openPreviousView: 'Otvori prethodni prikaz',
                    openNextView: 'Otvori sljedeći prikaz',
                    calendarViewSwitchingButtonAriaLabel: (view:any) =>
                        view === 'year'
                            ? 'prikaz godine je otvoren, prebacite se na prikaz kalendara'
                            : 'prikaz kalendara je otvoren, prebacite se na prikaz godine',

                    // Oznake za raspon datuma
                    start: 'Početak',
                    end: 'Kraj',

                    // Traka s radnjama
                    cancelButtonLabel: 'Odustani',
                    clearButtonLabel: 'Očisti',
                    okButtonLabel: 'U redu',
                    todayButtonLabel: 'Danas',

                    // Nazivi alatnih traka
                    datePickerToolbarTitle: 'Odaberite datum',
                    dateTimePickerToolbarTitle: 'Odaberite datum i vrijeme',
                    timePickerToolbarTitle: 'Odaberite vrijeme',
                    dateRangePickerToolbarTitle: 'Odaberite raspon datuma',

                    // Oznake sata
                    clockLabelText: (view:any, time:any, adapter:any) =>
                        `Odaberite ${view}. ${
                            time === null ? 'Nije odabrano vrijeme' : `Odabrano vrijeme je ${adapter.format(time, 'fullTime')}`
                        }`,
                    hoursClockNumberText: (hours:any) => `${hours} sati`,
                    minutesClockNumberText: (minutes:any) => `${minutes} minuta`,
                    secondsClockNumberText: (seconds:any) => `${seconds} sekundi`,

                    // Oznake digitalnog sata
                    selectViewText: (view:any) => `Odaberite ${view}`,

                    // Oznake kalendara
                    calendarWeekNumberHeaderLabel: 'Broj tjedna',
                    calendarWeekNumberHeaderText: '#',
                    calendarWeekNumberAriaLabelText: (weekNumber:any) => `Tjedan ${weekNumber}`,
                    calendarWeekNumberText: (weekNumber:any) => `${weekNumber}`,

                    // Oznake za otvaranje birača
                    openDatePickerDialogue: (value:any, utils:any) =>
                        value !== null && utils.isValid(value)
                            ? `Odaberite datum, odabrani datum je ${utils.format(value, 'fullDate')}`
                            : 'Odaberite datum',
                    openTimePickerDialogue: (value:any, utils:any) =>
                        value !== null && utils.isValid(value)
                            ? `Odaberite vrijeme, odabrano vrijeme je ${utils.format(value, 'fullTime')}`
                            : 'Odaberite vrijeme',

                    fieldClearLabel: 'Očisti vrijednost',

                    // Oznake tablice
                    timeTableLabel: 'Odaberi vrijeme',
                    dateTableLabel: 'Odaberi datum',

                    // Oznake odjeljka polja
                    fieldYearPlaceholder: (params:any) => 'G'.repeat(params.digitAmount),
                    fieldMonthPlaceholder: (params:any) => (params.contentType === 'letter' ? 'MMMM' : 'MM'),
                    fieldDayPlaceholder: () => 'DD',
                    fieldWeekDayPlaceholder: (params:any) => (params.contentType === 'letter' ? 'EEEE' : 'EE'),
                    fieldHoursPlaceholder: () => 'hh',
                    fieldMinutesPlaceholder: () => 'mm',
                    fieldSecondsPlaceholder: () => 'ss',
                    fieldMeridiemPlaceholder: () => 'aa'
                }
            }
        }
    }
};
