
import { test, expect, describe, vi, beforeEach} from 'vitest'
import {volumeSetupRefactor} from "./volumeSetupRefactor";


describe('volumeSetupRefactor test' , ()=> {
    beforeEach(() => {
        vi.restoreAllMocks();
        });

    test('should select the correct element based on ', () => {
        const parameters = [
            'BTC',
            "ETH",
            "USD",
            "FIRSTCCY",
            "SAM"
        ]

        parameters.forEach(parameter => {


        // arrange
        const spyGetSettings = vi.fn().mockImplementation(() => parameter)
        const propSpy = vi.fn().mockImplementation((attribute: string, value: boolean) => "")
        const spyJquery = vi.fn().mockImplementation((elementId: string) => ({
            prop: propSpy
        }))
        const spyInitCurrenciesList = vi.fn().mockImplementation(() => "")
        const APP = {
            util: {
                getSettings: spyGetSettings,
                initCurrenciesList: spyInitCurrenciesList
            },
        }
        vi.stubGlobal('APP', APP)
        vi.stubGlobal('$', spyJquery)

        // act
        volumeSetupRefactor();

        // assert
        expect(spyGetSettings).toBeCalledWith('ticker_vol_unit');
        if(parameter === 'SAM'){
            expect(spyJquery).not.toHaveBeenCalledOnce();
            expect(propSpy).not.toHaveBeenCalledOnce();
        } else if (parameter === 'FIRSTCCY'){
            expect(spyJquery).toBeCalledWith('#tickervolccy_0');
            expect(propSpy).toBeCalledWith("checked", true);
        }else{
            expect(spyJquery).toBeCalledWith(`#tickervolccy_${parameter}`);
            expect(propSpy).toBeCalledWith("checked", true);
        }

        expect(spyInitCurrenciesList).toHaveBeenCalledOnce();
        })
    })

})
