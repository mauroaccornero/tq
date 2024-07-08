# question 02

"Create a function `generateUrl` to generate a URL from given parameters:
{
width: 360,
height: 300,
locale: 'en',
toolbar_bg: '',
interval: '3h',
pair: 'BTC_USD',
}
You can use any lib but the generated result should be
"http://testurl.bitfinx.com/?height=300&interval=3h&locale=en&pair=BTC_USD&width=360"
More parameters are planned to be added/removed later and the the result should neglect the empty params (ex: should not include toolbar_bg in URL when its value is empty).
"

- use URL constructor to build a new url
- append or set query string using searchParams
- check for empty values to avoid adding query string without values

improvements:

```
if(value){
            url.searchParams.append(key, value.toString())
        }
```

will exclude parameters like height:0 more info are required to improve thi behaviour

test against an exact string can lead to errors related to the order of parameters a better approach would be to verify if the expected url contains a query string or to loop the provided parameters


to run the example simply run:

```
npm install

npm run test
```