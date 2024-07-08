export function volumeSetupRefactor() {
    // setup volume unit interface
    const volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();
    let elementID = null;
    switch (volumeUnit) {
        case 'FIRSTCCY':
            elementID = '#tickervolccy_0';
            break;
        case 'USD':
        case 'BTC':
        case 'ETH':
            elementID = `#tickervolccy_${volumeUnit}`;
            break;
        default:
            elementID = null
    }

    if (elementID) {
        $(elementID).prop("checked", true);
    }

    // override currencies list
    return window.APP.util.initCurrenciesList()
}