import {BASE_URL, generateUrl} from '../src/generateUrl';
import { test, expect, describe } from 'vitest'


describe('generateUrl test' , ()=> {
    test('should return the url with correct query string', () => {
        // arrange
        const args = {
            height: 300,
            interval: '3h',
            locale: 'en',
            toolbar_bg: '',
            pair: 'BTC_USD',
            width: 360,
        }
        // TODO: add loop for params to create expected url to avoid failures given by params order
        const expectedUrl = `${BASE_URL}/?height=300&interval=3h&locale=en&pair=BTC_USD&width=360`
        // act
        const url = generateUrl(args)
        // assert
        expect(url).toBe(expectedUrl)
    })
})
